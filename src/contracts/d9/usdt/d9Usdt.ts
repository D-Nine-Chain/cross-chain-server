import { getD9Api } from "../../../connections";
import type { WeightV2 } from '@polkadot/types/interfaces'
import { BN, BN_ONE } from "@polkadot/util";
import { ContractPromise } from '@polkadot/api-contract';
import { usdtContractABI } from "./d9UsdtAbi";
import { GasLimits } from "../../../types";

const MAX_CALL_WEIGHT = new BN(5_000_000_000_000).isub(BN_ONE);
export const STORAGE_DEPOSIT_LIMIT = null;
export const PROOFSIZE = new BN(119903836479112);

export async function getD9USDTBalance(address: string) {
   const gasLimit = await getReadGasLimit();
   const contract = await getD9USDT();
   const balance = await contract.query['psp22::balanceOf'](address, {
      gasLimit: gasLimit,
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, address)
   return balance;
}

export async function getD9USDTAllowance(userAddress: string) {
   const gasLimit = await getReadGasLimit();
   const contract = await getD9USDT();
   const allowance = await contract.query['psp22::allowance'](userAddress, {
      gasLimit: gasLimit,
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, userAddress, process.env.D9_TRANSFER_CONTRACT_ADDRESS!)
   return allowance;
}


export async function getD9USDT(): Promise<any> {
   const d9 = await getD9Api();

   const contract = new ContractPromise(d9, usdtContractABI, process.env.D9_USDT_CONTRACT_ADDRESS!);

   const gasLimits: GasLimits = {
      readLimit: await getReadGasLimit(),
      writeLimit: await getWriteGasLimit()
   }
   return contract;
}

async function getWriteGasLimit() {
   let api = await getD9Api();
   return api.registry.createType('WeightV2', { refTime: new BN(50_000_000_000), proofSize: new BN(800_000) }) as WeightV2;
}

async function getReadGasLimit() {
   let api = await getD9Api();
   return api.registry.createType('WeightV2', { refTime: MAX_CALL_WEIGHT, proofSize: PROOFSIZE }) as WeightV2
}
