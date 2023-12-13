

import { SubmittableExtrinsic } from "@polkadot/api/types";
import { D9CommitUSDT, D9DispatchUSDT } from "../../../types";
import { getNodeD9Address, getNodeD9KeyPair } from "../../wallet";
import { createAssetCommitExtrinsic, createAssetDispatchExtrinsic, getD9CrossChainTransfer, getTransaction } from "./d9CrossChainTransfer";
import type { ISubmittableResult } from '@polkadot/types/types';
import { ContractPromise } from '@polkadot/api-contract';
import { STORAGE_DEPOSIT_LIMIT, getReadGasLimit, processContractCallOutcome } from "..";
import { toUSDTUnits } from "../../../utils";

export async function d9getTransaction(transactionId: string): Promise<any> {
   return getTransaction(transactionId)
}

export async function executeD9UsdtCommit(commit: D9CommitUSDT) {
   console.log("assetCommitD9 function call");
   const unsignedTxPromise = createAssetCommitExtrinsic(commit.transactionId, commit.fromAddress, commit.toAddress, toUSDTUnits(commit.amount));
   return callContract(unsignedTxPromise)
      .then((result) => {
         return result.toHuman();
      })
      .catch((e) => {
         console.log("error in d9 asset commit", e)
         throw e;
      })
}
export async function queryExecuteDispatch(dispatch: D9DispatchUSDT) {
   const contract: ContractPromise = await getD9CrossChainTransfer();
   const nodeAddress = await getNodeD9Address();
   return contract.query['assetDispatch'](nodeAddress, {
      gasLimit: await getReadGasLimit(),
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, dispatch.fromAddress, dispatch.toAddress, toUSDTUnits(dispatch.amount))
      .then((outcome) => {
         return processContractCallOutcome<string>(outcome, (data) => { return data }, "dry run execute d9 dispatch")
      })
}

export async function executeD9UsdtDispatch(dispatch: D9DispatchUSDT) {
   return queryExecuteDispatch(dispatch)
      .then(() => {
         console.log("assetDispatchD9 function call");
         const unsignedTxPromise = createAssetDispatchExtrinsic(dispatch.fromAddress, dispatch.toAddress, toUSDTUnits(dispatch.amount));
         return callContract(unsignedTxPromise)
            .then((result) => {
               console.log("result", result.toHuman())
               return result.toHuman();
            })
      })
}

export async function dryRunExecuteUsdtDispatch(dispatch: D9DispatchUSDT) {
   const contract: ContractPromise = await getD9CrossChainTransfer();
   const nodeAddress = await getNodeD9Address();
   return contract.query['assetDispatch'](nodeAddress, {
      gasLimit: await getReadGasLimit(),
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, dispatch.fromAddress, dispatch.toAddress, toUSDTUnits(dispatch.amount))
      .then((outcome) => {
         return processContractCallOutcome<string>(outcome, (data) => { return data }, "dry run execute d9 dispatch")
      })

}

async function callContract(unsignedTxPromise: Promise<SubmittableExtrinsic<'promise'>>): Promise<ISubmittableResult> {
   const keyPairPromise = getNodeD9KeyPair();
   return Promise.all([unsignedTxPromise, keyPairPromise])
      .then(([unsignedTx, keyPair]) => {
         return unsignedTx.signAsync(keyPair, { nonce: -1 })
      })
      .then((signedTx) => {
         // Use a new Promise to capture the result of the submittableResultHandler
         // return signedTx.send();
         return new Promise<ISubmittableResult>((resolve, reject) => {
            signedTx.send((result) => {
               if (result.status.isFinalized && !result.dispatchError) {
                  console.log("result is finalized", result.toHuman())
                  resolve(result);
               }
               else if (result.status.isFinalized && result.dispatchError) {
                  console.log("submittable result error", result.toHuman())
                  const dispatchError = (result.toHuman()! as any).dispatchError;
                  reject(dispatchError);
               }
            });

         });
      })
      .catch((e) => {
         console.log("error in d9 contract call", e)
         throw new Error("Error at D9 Commit contract call");
      });
}

// function decodeEvent(event: any) {
//    console.log("decoding event")
//    const abi = new Abi(crossChainD9Contract)
//    if (event.method == "ContractEmitted") {
//       console.log("contract emitted event")
//       const [emittedContractAddress, data] = event.data;
//       console.log("emitted contract address is ", emittedContractAddress)
//       const decodedData = abi.decodeEvent(data);
//       console.log("decoded data to json", decodedData)
//       const eventArgs = decodedData.args;
//       eventArgs.forEach((arg: any) => {
//          console.log("arg is ", arg)
//          console.log("arg is ", arg.toJSON())
//       })
//       console.log("Contract emitted event:", decodedData.event);

//    }
// }