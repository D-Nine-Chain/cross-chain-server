

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

export async function queryExecuteCommit(commit: D9CommitUSDT) {
   console.log("commit is ", commit)
   const contract: ContractPromise = await getD9CrossChainTransfer();
   const nodeAddress = await getNodeD9Address();
   return contract.query['assetCommit'](nodeAddress, {
      gasLimit: await getReadGasLimit(),
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, commit.transactionId, commit.fromAddress, commit.toAddress, toUSDTUnits(commit.amount))
      .then((outcome) => {
         return processContractCallOutcome<string>(outcome, (data) => { return data }, "dry run execute d9 commit")
      })
}


export async function executeD9UsdtCommit(commit: D9CommitUSDT) {
   return queryExecuteCommit(commit)
      .then(() => {
         console.log("assetCommitD9 function call");
         const unsignedTxPromise = createAssetCommitExtrinsic(commit.transactionId, commit.fromAddress, commit.toAddress, commit.amount);
         return callContract(unsignedTxPromise)
            .then((result) => {
               return result.toHuman();
            })
            .catch((e) => {
               console.log("error in d9 asset commit", e)
               throw e;
            })
      })
}


export async function queryExecuteDispatch(dispatch: D9DispatchUSDT) {
   console.log("dispatch is ", dispatch)
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
         const unsignedTxPromise = createAssetDispatchExtrinsic(dispatch.fromAddress, dispatch.toAddress, dispatch.amount);
         return callContract(unsignedTxPromise)
            .then((result) => {
               console.log("result", result.toHuman())
               return result.toHuman();
            })
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
         throw new Error(JSON.stringify(e))
      });
}

