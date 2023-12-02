import { ChainEnum } from "../schemas";

export async function validateAmount(chainEnum: ChainEnum, amount: number): Promise<boolean> {
   const allowance = validateAllowance(chainEnum, amount);
   const balancce = validateBalance(chainEnum, amount);
   return true;
}


async function validateAllowance(chainEnum: ChainEnum, amount: number): Promise<boolean> {
   if (chainEnum === "TRON") {
      return await validateTronAllowance(amount);
   }
   else {
      return await validateD9Allowance(amount);
   }
}

async function validateTronAllowance(amount: number): Promise<boolean> {
   return true;
}

async function validateD9Allowance(amount: number): Promise<boolean> {
   return true;
}


async function validateBalance(chainEnum: ChainEnum, amount: number): Promise<boolean> {
   if (chainEnum === "TRON") {
      return await validateTronBalance();
   }
   else {
      return await validateD9Balance();
   }

}

function validateD9Balance(): Promise<boolean> {
   return true;
}
function validateTronBalance(): Promise<boolean> {
   return true;
}


