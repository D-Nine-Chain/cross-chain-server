import { createAssetCommitExtrinsic, createAssetDispatchExtrinsic } from "../contracts/crossChainTransfer.ts/d9CrossChainTransfer";
import { CryptoTransfer } from "../../types";
import { getNodeD9KeyPair } from "../wallet";
import { submittableResultHandler } from "../contracts";
import { SubmittableExtrinsic } from "@polkadot/api/types";

export async function assetCommitD9(transfer: CryptoTransfer) {
   console.log("assetCommitD9 function call")
   console.log("crypto transfer in assetcommit d9 before calling contract ", transfer)
   const unsignedTxPromise = createAssetCommitExtrinsic(transfer.fromAddress, transfer.toAddress, transfer.amount);
   const keyPairPromise = getNodeD9KeyPair();
   return Promise.all([unsignedTxPromise, keyPairPromise])
      .then(([unsignedTx, keyPair]) => {
         return unsignedTx.signAsync(keyPair, { nonce: -1 })
      })
      .then((signedTx) => {
         return signedTx.send(submittableResultHandler)
      })
      .catch((e) => {
         console.log("error in assetCommitD9", e)
         throw e;
      })
}

export async function assetDispatchD9(transfer: CryptoTransfer) {
   const unsignedTx = await createAssetDispatchExtrinsic(transfer.transactionId!, transfer.fromAddress, transfer.toAddress, transfer.amount);
   const keyPair = await getNodeD9KeyPair();
   const signedTx = await unsignedTx.signAsync(keyPair, { nonce: -1 });
   await signedTx.send();
}