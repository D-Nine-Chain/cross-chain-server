import { getTronWeb } from "../../../connections";
import { toUSDTUnits } from "../../../utils";
import { simpleTransferMetadata } from "./simpleTransfer";

export async function tronReceiveUserUSDT(fromAddress: string, amount: number) {
   return getSimpleTransferContract()
      .then((contract) => {
         return contract.receiveUSDT(fromAddress,
            toUSDTUnits(amount)).send()
            .catch((e: any) => {
               console.log("error in tron asset commit", e)
               throw e;
            })
      })
      .catch((e) => {
         console.log("error in tron asset commit", e)
         throw e;
      })
}

export async function tronSendUserUSDT(toAddress: string, amount: number) {
   return getSimpleTransferContract()
      .then((contract) => {
         return contract.sendUSDT(toAddress,
            toUSDTUnits(amount)).send()
            .catch((e: any) => {
               throw e
            })
      })
      .catch((e) => {
         console.log("error in tron asset commit", e)
         throw e;
      })
}

async function getSimpleTransferContract(): Promise<any> {
   return getTronWeb()
      .then((tronWeb) => {
         return tronWeb.contract(simpleTransferMetadata.abi, process.env.TRON_SIMPLE_TRANSFER_CONTRACT_ADDRESS!)
      })
      .catch((e) => {
         console.log("error in get simple transfer contract", e)
         throw e;
      })
}