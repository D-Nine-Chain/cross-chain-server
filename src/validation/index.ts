import { CryptoTransfer } from "../types";
import { validateAddress } from "./addressValidation";
import { validateAmount } from "./amountValidation";
export { validateAddress };

/**
 * this function basically converts whatever is done to validatethe transfer into a single Promise
 * @param transfer 
 * @returns 
 */
export async function validateTransfer(transfer: CryptoTransfer): Promise<void> {
   try {
      await validateAmount(transfer.fromChain, transfer.fromAddress, transfer.amount);
   }
   catch (e) {
      return Promise.reject(e);
   }
}