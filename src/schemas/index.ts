import { z } from 'zod';
import { validateAddress } from '../validation';
export const ChainEnum = z.enum(["TRON", "D9"]).readonly();

export const CryptoTransferSchema = z.object({
   fromAddress: z.string().min(1, "From address is required"),
   toAddress: z.string().min(1, "To address is required"),
   amount: z.number().positive("Amount must be positive").readonly(),
   fromChain: ChainEnum,
   toChain: ChainEnum,
   transactionId: z.string().optional(),
   timestamp: z.date().optional(),
}).refine(data => data.fromChain !== data.toChain, {
   message: "From chain and to chain cannot be the same",
   path: ["toChain"],
});

export const D9Address = z.string().refine((data) =>
   validateAddress("D9", data), { message: "Invalid D9 address" }
)