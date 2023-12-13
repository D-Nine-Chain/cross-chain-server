import { getTronWeb } from "../../../connections";
import { TronDispatchUSDT } from "../../../types";
import { crossChainTronContract } from "./crossChainTronAbi";


// export async function executeTronUsdtCommit(commit: TronCommitUSDT): Promise<any> {
//    getTronTransferContract()
//       .then((contract) => {
//          return contract.assetCommit(
//             commit.transactionId,
//             commit.fromAddress,
//             commit.fromAddressBytes,
//             commit.toAddressBytes,
//             commit.amount
//          ).send();
//       })
//       .catch((e) => {
//          console.log("error in tron asset commit", e)
//          throw e;
//       })
// }

export async function tronGetTransaction(transactionId: string): Promise<any> {
   const contract = await getTronTransferContract();
   return contract.getTransaction(transactionId).call()
      .then((result: any) => {
         console.log("tron get transaction result", result)
         return result.timestamp > 0 ? result : null;
      })
}

export async function executeTronUsdtDispatch(dispatch: TronDispatchUSDT): Promise<any> {
   console.log(`asset dispatch in tron called`)
   return getTronTransferContract()
      .then((contract) => {
         return contract.assetDispatch(
            dispatch.transactionId,
            dispatch.toAddress,
            dispatch.fromAddressBytes,
            dispatch.toAddressBytes,
            dispatch.amount
         ).send();
      })
      .catch((e) => {
         console.log("tron dispatch errror")
         throw e;
      })
}

export async function getCurrentNonceTron(userAddress: string): Promise<number> {
   return getTronTransferContract()
      .then((contract) => {
         return contract.getCurrentNonce(userAddress).call();
      })
}

export async function getTronTransferContract(): Promise<any> {
   return getTronWeb()
      .then((tronWeb) => {
         return tronWeb.contract(crossChainTronContract.abi, process.env.TRON_TRANSFER_CONTRACT_ADDRESS!)
      })
} 