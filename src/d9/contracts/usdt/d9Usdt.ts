import { getD9Api } from "../../../connections";

import { ContractPromise } from '@polkadot/api-contract';
import { usdtContractABI } from "./d9UsdtAbi";
import { STORAGE_DEPOSIT_LIMIT, getReadGasLimit, processContractCallOutcome } from "..";
import { formatNumber } from "../../../utils";



export async function getD9USDTBalance(address: string): Promise<number> {
   const gasLimit = await getReadGasLimit();
   const contract = await getD9USDT();
   return contract.query['psp22::balanceOf'](address, {
      gasLimit: gasLimit,
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, address)
      .then((outcome) => {
         return processContractCallOutcome<number>(outcome, formatNumber, "balanceOf")
      })
}

export async function getD9USDTAllowance(userAddress: string): Promise<number> {
   const gasLimit = await getReadGasLimit();
   const contract = await getD9USDT();
   return contract.query['psp22::allowance'](userAddress, {
      gasLimit: gasLimit,
      storageDepositLimit: STORAGE_DEPOSIT_LIMIT,
   }, userAddress, process.env.D9_TRANSFER_CONTRACT_ADDRESS!)
      .then((outcome) => {
         return processContractCallOutcome<number>(outcome, formatNumber, "allowance")
      })
}

export async function getD9USDT(): Promise<ContractPromise> {
   const d9 = await getD9Api();
   const contract = new ContractPromise(d9, usdtContractABI, process.env.D9_USDT_CONTRACT_ADDRESS!);
   return contract;
}

