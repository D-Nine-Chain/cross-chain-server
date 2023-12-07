import { generateTransactionIdD9 } from "../d9/contracts/crossChainTransfer.ts/d9CrossChainTransfer";
import { assetCommitD9 } from "../d9/transfer/d9Commit";
import { assetDispatchTron } from "../tron/contracts/crossChainTransfer";
import { CryptoTransfer } from "../types";
import { formatTransferForContracts } from "../utils";

export async function generateTransactionID(transfer: CryptoTransfer): Promise<string> {
   const d9Address = transfer.fromChain === 'D9' ? transfer.fromAddress : transfer.toAddress;
   const transactionID = await generateTransactionIdD9(d9Address);
   return transactionID;
}

export async function crossChainTransfer(transfer: CryptoTransfer) {
   // transfer.transactionId = "0x" + (await generateTransactionID(transfer));
   // const formattedTransfer = await formatTransferForContracts(transfer);
   // console.log("formattedTransfer", formattedTransfer)
   // await assetCommit(formattedTransfer);
   // await assetDispatch(formattedTransfer);

   generateTransactionID(transfer)
      .then((transactionID) => {
         transfer.transactionId = "0x" + transactionID;
         return formatTransferForContracts(transfer);
      })
      .then((formattedTransfer) => {
         return assetCommit(formattedTransfer)
            .then(() => {
               return assetDispatch(formattedTransfer);
            })
      })
      .catch((e) => {
         console.log("cross chain transfer error ", e);
         throw e
      })
}

async function assetCommit(transfer: CryptoTransfer) {

   if (transfer.fromChain === 'TRON') {
      return Promise.reject();
   } else {
      console.log("d9 commit")
      return await assetCommitD9(transfer);
   }
}

async function assetDispatch(transfer: CryptoTransfer) {
   if (transfer.toChain === 'D9') {

   } else {
      await assetDispatchTron(transfer);
   }
}
