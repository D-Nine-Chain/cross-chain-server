import { getTronWeb } from "../../connections";


export async function getTronUSDTBalance(address: string) {
   const contract = await getTronUSDT();
   const balance = await contract.balanceOf(address).call();
   return balance;
}

export async function getTronUSDTAllowance(ownerAddress: string) {
   const contract = await getTronUSDT();
   const allowance = await contract.allowance(ownerAddress, process.env.TRON_TRANSFER_CONTRACT_ADDRESS!).call();
   return allowance;
}

export async function getTronUSDT(): Promise<any> {
   const tronWeb = await getTronWeb();
   return await tronWeb.contract().at(process.env.TRON_USDT_CONTRACT_ADDRESS!);
}