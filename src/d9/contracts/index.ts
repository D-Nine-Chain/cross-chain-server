import type { WeightV2 } from '@polkadot/types/interfaces'
import { BN, BN_ONE } from "@polkadot/util";
import { getD9Api } from '../../connections';
import { ContractCallOutcome } from '@polkadot/api-contract/types';
import { ISubmittableResult } from '@polkadot/types/types';
export const MAX_CALL_WEIGHT = new BN(5_000_000_000_000).isub(BN_ONE);
export const STORAGE_DEPOSIT_LIMIT = null;
export const PROOFSIZE = new BN(119903836479112);

export async function getWriteGasLimit() {
   let api = await getD9Api();
   return api.registry.createType('WeightV2', { refTime: new BN(50_000_000_000), proofSize: new BN(800_000) }) as WeightV2;
}

export async function getReadGasLimit() {
   let api = await getD9Api();
   return api.registry.createType('WeightV2', { refTime: MAX_CALL_WEIGHT, proofSize: PROOFSIZE }) as WeightV2
}

export async function processContractCallOutcome<T>(callOutcome: ContractCallOutcome, dataFormatter: (data: any) => T, methodName?: string): Promise<T> {
   console.log("output for ", methodName, callOutcome.output?.toJSON())
   if (callOutcome.result.isOk) {
      const contractResponse = (callOutcome.output!.toJSON()! as any).ok
      if (contractResponse != null) {// ok is the rust okay, some contracts response with Result others give raw data 
         return await contractResponseHandler(contractResponse, dataFormatter)
      } else {
         throw new Error("Contract response is null")
      }
   }
   else {
      throw new Error("Extrinsic Error: Perhaps not a contract error")
   }
}

async function contractResponseHandler<T>(contractResponse: ContractResponse, dataFormatter: (data: any) => any): Promise<T> {
   console.log("contract response", contractResponse)
   if (contractResponse.ok) {//handle Result<T, E> response Ok(T) responses
      return Promise.resolve(dataFormatter(contractResponse.ok));
   } else if (contractResponse.err) {// handle Result<T, E> response Err(E) responses
      return Promise.reject(contractResponse.err);
   } else {
      return Promise.resolve(dataFormatter(contractResponse));
   }
}

export function submittableResultHandler(submittableResult: ISubmittableResult) {
   console.log("submittable result", submittableResult.toHuman())
   if (submittableResult.status.isFinalized && !submittableResult.dispatchError) {
      console.log("submittable finalied no dispatch error", submittableResult.toHuman())
      submittableResult.toHuman();
   }
   else if (submittableResult.status.isFinalized && submittableResult.dispatchError) {
      console.log("submittable result error", submittableResult.toHuman())
      submittableResult.dispatchError;
   }
}

interface ContractResponse {
   ok?: any; // the result of the contract call
   err?: any; // any errors that the contract emitted
}
