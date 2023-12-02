import { z } from 'zod';
export const ChainEnum = z.enum(["TRON", "D9"]);
export type ChainEnum = z.infer<typeof ChainEnum>;

export const CryptoTransferSchema = z.object({
   fromAddress: z.string().min(1, "From address is required"),
   toAddress: z.string().min(1, "To address is required"),
   amount: z.number().positive("Amount must be positive"),
   fromChain: ChainEnum,
   toChain: ChainEnum,
   transactionId: z.string().optional(),
   timestamp: z.date().optional(),
}).refine(data => data.fromChain !== data.toChain, {
   message: "From chain and to chain cannot be the same",
   path: ["toChain"],
});

