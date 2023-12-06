import { assetCommitD9, generateTransactionIdD9 } from "../../contracts/d9/crossChainTransfer.ts";
import { CryptoTransfer } from "../../types";
import { getNodeD9KeyPair } from "../d9Wallet/index.js";

export async function generateTransactionID(transfer: CryptoTransfer): Promise<string> {
   const d9Address = transfer.fromChain === 'D9' ? transfer.fromAddress : transfer.toAddress;
   const transactionID = await generateTransactionIdD9(d9Address);
   return transactionID;
}
export async function transferAsset(transfer: CryptoTransfer) {
   transfer.transactionId = await generateTransactionID(transfer);
   try {
      await assetCommit(transfer);
      await assetDispatch(transfer);
   } catch (e) {
      undoTransfer()
   }
}

async function assetCommit(transfer: CryptoTransfer) {
   if (transfer.fromChain === 'TRON') {
      // do tron stuff
   } else {
      const unsignedTx = await assetCommitD9(transfer.transactionId!, transfer.fromAddress, transfer.toAddress, transfer.amount);
      const keyPair = await getNodeD9KeyPair();
      const signedTx = await unsignedTx.signAsync(keyPair, { nonce: -1 });
      await signedTx.send();
   }
}

async function assetDispatch(transfer: CryptoTransfer) {
   if (transfer.toChain === 'D9') {
      // do tron stuff
   }
}

async function undoTransfer() {

}