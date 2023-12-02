import { getD9USDTAllowance, getD9USDTBalance, getTronUSDTAllowance, getTronUSDTBalance } from "../contracts";
import { ChainEnum } from "../schemas";

export async function validateAmount(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<boolean> {
   const allowanceCheck = await validateAllowance(chainEnum, userAddress, amount);
   const balanceCheck = await validateBalance(chainEnum, userAddress, amount);
   return allowanceCheck && balanceCheck;
}


async function validateAllowance(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<boolean> {
   if (chainEnum === "TRON") {
      return await validateTronAllowance(userAddress, amount);
   }
   else {
      return await validateD9Allowance(userAddress, amount);
   }
}

async function validateTronAllowance(userAddress: string, amount: number): Promise<boolean> {
   const allowance = await getTronUSDTAllowance(userAddress);
   return allowance >= amount;
}

async function validateD9Allowance(userAddress: string, amount: number): Promise<boolean> {
   const allowance = await getD9USDTAllowance(userAddress);
   return allowance >= amount;
}


async function validateBalance(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<boolean> {
   if (chainEnum === "TRON") {
      return await validateTronBalance(userAddress, amount);
   }
   else {
      return await validateD9Balance(userAddress, amount);
   }

}

async function validateD9Balance(userAddress: string, amount: number): Promise<boolean> {
   const balance = await getD9USDTBalance(userAddress);
   return balance >= amount;
}
async function validateTronBalance(userAddress: string, amount: number): Promise<boolean> {
   const balance = await getTronUSDTBalance(userAddress);
   return balance >= amount;
}


