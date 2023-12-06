import { ContractPromise } from "@polkadot/api-contract";
import { getD9Api } from "../../../connections";
import { crossChainD9Contract } from "./crossChainTransferABI";
import { STORAGE_DEPOSIT_LIMIT, getReadGasLimit, getWriteGasLimit, processContractCallOutcome } from "..";
import { formatNumber, toUSDTUnits } from "../../../functions/utils";
import { ContractCallOutcome } from "@polkadot/api-contract/types";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { getNodeD9Address } from "../../../functions/d9Wallet";

/**
 * @description get transaction id
 * @param userAddress D9 base58 address
 * @note this function exists on both contracts but this is the canonical version
 */
export async function generateTransactionIdD9(userAddress: string): Promise<string> {
   const contract: ContractPromise = await getD9CrossChainTransfer();
   const nodeAddress = await getNodeD9Address();
   return contract.query['generateTxId'](nodeAddress, {
      gasLimit: await getReadGasLimit(),
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, userAddress)
      .then((outcome) => {
         return processContractCallOutcome<string>(outcome, (data) => { return data })
      })
}

export async function assetCommitD9(transactionId: string, fromAddress: string, toAddress: string, amount: number): Promise<SubmittableExtrinsic<'promise'>> {
   const contract = await getD9CrossChainTransfer();
   return contract.tx['assetCommit']({
      gasLimit: await getWriteGasLimit(),
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, transactionId, fromAddress, toAddress, toUSDTUnits(amount))
}

export async function assetDispatchD9(transactionId: string, fromAddress: string, toAddress: string, amount: number): Promise<SubmittableExtrinsic<'promise'>> {
   const contract = await getD9CrossChainTransfer();
   return contract.tx['assetDispatch']({
      gasLimit: await getWriteGasLimit(),
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, transactionId, fromAddress, toAddress, toUSDTUnits(amount))
}

export async function getCurrentNonceD9(userAddress: string): Promise<number> {
   const contract: ContractPromise = await getD9CrossChainTransfer();
   const nodeAddress = await getNodeD9Address();
   return contract.query['getCurrentNonce'](nodeAddress, {
      gasLimit: await getReadGasLimit(),
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, userAddress)
      .then((outcome) => {
         return processContractCallOutcome<number>(outcome, transactionNonceFormatter)
      })
}

export async function getD9CrossChainTransfer(): Promise<ContractPromise> {
   const d9 = await getD9Api();
   const contract = new ContractPromise(d9, crossChainD9Contract, process.env.D9_TRANSFER_CONTRACT_ADDRESS!);
   return contract;
}

function transactionNonceFormatter(data: any): number {
   return formatNumber(data);
}