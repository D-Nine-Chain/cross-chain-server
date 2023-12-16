import { z } from "zod";
import { ChainEnum, CommitSchema, D9CommitSchema, DispatchSchema, AddressBytesForTron, D9DispatchSchema, TronCommitSchema, TronDispatchSchema, AccountRequestSchema } from "../schemas";
import type { WeightV2 } from '@polkadot/types/interfaces'

export type ChainEnum = z.infer<typeof ChainEnum>;

export type CommitRequest = z.infer<typeof CommitSchema>;

export type D9CommitUSDT = z.infer<typeof D9CommitSchema>;

export type TronCommitUSDT = z.infer<typeof TronCommitSchema>;

export type AddressBytesForTron = z.infer<typeof AddressBytesForTron>;

export type DispatchRequest = z.infer<typeof DispatchSchema>;

export type D9DispatchUSDT = z.infer<typeof D9DispatchSchema>;

export type TronDispatchUSDT = z.infer<typeof TronDispatchSchema>;

export interface GasLimits {
   readLimit: WeightV2,
   writeLimit: WeightV2,
}

export type AccountRequest = z.infer<typeof AccountRequestSchema>;

export type AccountResponse = {
   d9: {
      address: string,
      balance: number,
      allowance: number,
   },
   tron: {
      address: string,
      balance: number,
      allowance: number,
   }
}