import { getTronWeb } from "../../../connections";
import { toUSDTUnits } from "../../../utils";
import { simpleTransferMetadata } from "./simpleTransfer";

export async function tronReceiveUserUSDT(fromAddress: string, amount: number) {
   console.log("receiving usdt - simple transfer")
   console.log("from address", fromAddress)
   return getSimpleTransferContract()
      .then((contract) => {
         return contract.receiveUSDT(fromAddress,
            toUSDTUnits(amount)).send()
            .catch((e: any) => {
               console.log("error in tron simple transfer", e)
               throw e;
            })
      })
      .catch((e) => {
         console.log("error in tron simple transfer", e)
         throw e;
      })
}

export async function tronSendUserUSDT(toAddress: string, amount: number) {
   console.log("sending usdt - simple transfer")
   console.log("to address", toAddress)
   return getSimpleTransferContract()
      .then((contract) => {
         return contract.sendUSDT(toAddress,
            toUSDTUnits(amount)).send()
            .catch((e: any) => {
               throw e
            })
      })
      .catch((e) => {
         console.log("error sending usdt on tron", e)
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