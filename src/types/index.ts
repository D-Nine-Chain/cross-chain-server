import { z } from "zod";
import { ChainEnum, CryptoTransferSchema } from "../schemas";
import type { WeightV2 } from '@polkadot/types/interfaces'

export type ChainEnum = z.infer<typeof ChainEnum>;

export type CryptoTransfer = z.infer<typeof CryptoTransferSchema>;

export interface GasLimits {
   readLimit: WeightV2,
   writeLimit: WeightV2,
}