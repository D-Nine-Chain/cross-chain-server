import { z } from "zod";
import { ChainEnum, CommitSchema, D9CommitSchema, DispatchSchema, AddressBytesForTron, D9DispatchSchema, TronCommitSchema, TronDispatchSchema } from "../schemas";
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

