import { getD9USDTAllowance, getD9USDTBalance, getTronUSDTAllowance, getTronUSDTBalance } from "../../contracts";
import { ChainEnum } from "../../types";

export async function validateAmount(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<[void, void]> {
   const allowanceCheckPromise = validateAllowance(chainEnum, userAddress, amount);
   const balanceCheckPromise = validateBalance(chainEnum, userAddress, amount);
   return Promise.all([allowanceCheckPromise, balanceCheckPromise]);
}


async function validateAllowance(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<void> {
   if (chainEnum === "TRON") {
      return await validateTronAllowance(userAddress, amount);
   }
   else {
      return await validateD9Allowance(userAddress, amount);
   }
}

async function validateTronAllowance(userAddress: string, amount: number): Promise<void> {
   const allowance = await getTronUSDTAllowance(userAddress);
   if (allowance < amount) {
      Promise.reject("Tron USDT has insufficient allowance")
   }
}

async function validateD9Allowance(userAddress: string, amount: number): Promise<void> {
   const allowance = await getD9USDTAllowance(userAddress);
   if (allowance < amount) {
      return Promise.reject("D9 USDT has insufficient allowance");
   }
}


async function validateBalance(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<void> {
   if (chainEnum === "TRON") {
      return await validateTronBalance(userAddress, amount);
   }
   else {
      return await validateD9Balance(userAddress, amount);
   }

}

async function validateD9Balance(userAddress: string, amount: number): Promise<void> {
   const balance = await getD9USDTBalance(userAddress);
   if (balance <= amount) {
      return Promise.reject("D9 USDT has insufficient balance");
   }
}

async function validateTronBalance(userAddress: string, amount: number): Promise<void> {
   const balance = await getTronUSDTBalance(userAddress);
   if (balance <= amount) {
      return Promise.reject("Tron USDT has insufficient balance");
   }
}


