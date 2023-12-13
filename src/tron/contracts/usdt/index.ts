import { getTronWeb } from "../../../connections";


export async function getTronUSDTBalance(address: string) {
   console.log("getting balance")
   return getTronUSDT()
      .then((contract) => {
         return contract.balanceOf(address).call()
            .then((balance: any) => {
               console.log("balance", balance)
               return balance;
            })
      })
      .catch((e) => {
         console.log("error getting tron usdt ", e)
         throw e;
      })
}

export async function getTronUSDTAllowance(ownerAddress: string) {
   console.log("validating tron allowance")
   return getTronUSDT()
      .then((contract) => {

         return contract.allowance(ownerAddress, process.env.TRON_SIMPLE_TRANSFER_CONTRACT_ADDRESS!).call();
      })

}

export async function getTronUSDT(): Promise<any> {
   return getTronWeb()
      .then((tronWeb) => {
         return tronWeb.contract().at(process.env.TRON_USDT_CONTRACT_ADDRESS!)
      })
}