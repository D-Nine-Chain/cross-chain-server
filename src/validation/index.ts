import { CommitRequest, DispatchRequest } from "../types";
import { validateAddress } from "./addressValidation";
import { validateAmount } from "./amountValidation";
import { validateNotDispatchedAlready } from "../storage";
export { validateAddress };

/**
 * this function basically converts whatever is done to validatethe transfer into a single Promise
 * @param usdtCommit 
 * @returns 
 */
export async function validateCommitRequest(usdtCommit: CommitRequest): Promise<void> {
   try {
      await validateAmount(usdtCommit.fromChain, usdtCommit.fromAddress, usdtCommit.amount);
      await validateAddress(usdtCommit.toChain, usdtCommit.toAddress);
      await validateAddress(usdtCommit.fromChain, usdtCommit.fromAddress);
   }
   catch (e) {
      return Promise.reject(e);
   }
}

export async function validateDispatchRequest(usdtDispatchRequest: DispatchRequest): Promise<void> {
   try {
      await validateAddress(usdtDispatchRequest.toChain, usdtDispatchRequest.toAddress);
      await validateAddress(usdtDispatchRequest.fromChain, usdtDispatchRequest.fromAddress);
      await validateNotDispatchedAlready(usdtDispatchRequest.transactionId);
      // await validateCommitExists(usdtDispatchRequest.transactionId);
   }
   catch (e) {
      return Promise.reject(e);
   }
}