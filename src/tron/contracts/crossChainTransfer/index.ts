import { getTronWeb } from "../../../connections";
import { CryptoTransfer } from "../../../types";
import { crossChainTronContract } from "./crossChainTronAbi";


export async function assetCommitTron(transactionId: string, fromAddress: string, toAddress: string): Promise<any> {
   getTronTransferContract()
      .then((contract) => {
         return contract.assetCommit(transactionId, fromAddress, toAddress).send();
      })
      .catch((e) => {
         console.log("error in tron asset commit", e)
         throw e;
      })
}

export async function assetDispatchTron(transfer: CryptoTransfer): Promise<any> {
   console.log(`asset dispatch in tron called`)
   return getTronTransferContract()
      .then((contract) => {
         return contract.assetDispatch(transfer.transactionId, transfer.fromAddress, transfer.toAddress, transfer.amount).send();
      })
      .catch((e) => {
         console.log("tron dispatch errror")
         throw e;
      })
}

export async function getCurrentNonceTron(userAddress: string): Promise<number> {
   const contract = await getTronTransferContract();
   return await contract.getCurrentNonce(userAddress).call();
}

export async function getTronTransferContract(): Promise<any> {
   const tronWeb = await getTronWeb();
   return tronWeb.contract(crossChainTronContract.abi, process.env.TRON_TRANSFER_CONTRACT_ADDRESS!)
} 