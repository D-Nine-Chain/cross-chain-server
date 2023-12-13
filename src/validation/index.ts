import { CommitRequest, DispatchRequest } from "../types";
import { validateAddress } from "./addressValidation";
import { validateAmount } from "./amountValidation";
import { validateCommitExists, validateNotDispatchedAlready } from "../storage";
export { validateAddress };

/**
 * this function basically converts whatever is done to validatethe transfer into a single Promise
 * @param commit 
 * @returns 
 */
export async function validateCommitRequest(commit: CommitRequest): Promise<void> {
   try {
      await validateAmount(commit.fromChain, commit.fromAddress, commit.amount);
      await validateAddress(commit.toChain, commit.toAddress);
      await validateAddress(commit.fromChain, commit.fromAddress);
   }
   catch (e) {
      throw e;
   }
}

export async function validateDispatchRequest(usdtDispatchRequest: DispatchRequest): Promise<void> {
   try {
      await validateAddress(usdtDispatchRequest.toChain, usdtDispatchRequest.toAddress);
      await validateAddress(usdtDispatchRequest.fromChain, usdtDispatchRequest.fromAddress);
      await validateNotDispatchedAlready(usdtDispatchRequest.transactionId);
      await validateCommitExists(usdtDispatchRequest.transactionId);
   }
   catch (e) {
      throw e;
   }
}