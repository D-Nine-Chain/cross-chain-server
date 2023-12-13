
import { getD9USDTAllowance, getD9USDTBalance } from "../d9/contracts/usdt/d9Usdt";
import { getTronUSDTAllowance, getTronUSDTBalance } from "../tron/contracts/usdt";
import { ChainEnum } from "../types";

export async function validateAmount(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<[void, void]> {
   const allowanceCheckPromise = validateAllowance(chainEnum, userAddress, amount);
   const balanceCheckPromise = validateBalance(chainEnum, userAddress, amount);
   return Promise.all([allowanceCheckPromise, balanceCheckPromise])
      .catch((e) => {
         throw new Error(e);
      })
}


async function validateAllowance(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<void> {
   try {
      if (chainEnum === "TRON") {
         return validateTronAllowance(userAddress, amount);
      }
      else {
         return validateD9Allowance(userAddress, amount);
      }
   } catch (e) {
      console.log("error in validate allowance", e)
      throw e;
   }
}

async function validateTronAllowance(userAddress: string, amount: number): Promise<void> {
   return getTronUSDTAllowance(userAddress)
      .then((allowance) => {
         if (allowance < amount) {
            throw new Error("Tron USDT has insufficient allowance");
         }
      })
      .catch((e) => {
         console.log("error in tron allowance", e)
         throw e;
      })
}

async function validateD9Allowance(userAddress: string, amount: number): Promise<void> {
   return getD9USDTAllowance(userAddress)
      .then((allowance) => {
         if (allowance < amount) {
            throw new Error("D9 USDT has insufficient allowance");
         }
         else {
            return Promise.resolve();
         }
      })
}


async function validateBalance(chainEnum: ChainEnum, userAddress: string, amount: number): Promise<void> {
   if (chainEnum === "TRON") {
      return validateTronBalance(userAddress, amount)
   }
   else {
      return validateD9Balance(userAddress, amount);
   }

}

async function validateD9Balance(userAddress: string, amount: number): Promise<void> {
   return getD9USDTBalance(userAddress)
      .then((balance) => {
         if (balance <= amount) {
            throw new Error("D9 USDT has insufficient balance")
         } else {
            return Promise.resolve();
         }
      })
}

async function validateTronBalance(userAddress: string, amount: number): Promise<void> {
   return getTronUSDTBalance(userAddress)
      .then((balance) => {
         console.log("balanace is ", balance)
         if (balance <= amount) {
            throw new Error("Tron USDT has insufficient balance")
         } else {
            return Promise.resolve();
         }
      })

}


