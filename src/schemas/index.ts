import { z } from 'zod';
import { validateAddress } from '../validation';

export const ChainEnum = z.enum(["TRON", "D9"]).readonly();

export const CommitSchema = z.object({
   fromAddress: z.string().min(20, "From address is required"),
   toAddress: z.string().min(20, "To address is required"),
   amount: z.number().positive("Amount must be positive").readonly(),
   fromChain: ChainEnum,
   toChain: ChainEnum,
   transactionId: z.string().min(1, "Transaction ID is required"),
})
   .superRefine((data, ctx) => {
      if (data.fromChain === data.toChain) {
         ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'fromChain and toChain can not be the same.',
            path: ['toChain', 'fromChain'],
         })
      }
      if (data.fromChain === 'TRON') {
         if (!data.fromAddress.startsWith("T") || data.fromAddress.length != 34) {
            ctx.addIssue({
               code: z.ZodIssueCode.custom,
               message: 'Invalid Tron address',
               path: ['fromAddress'],
            })
         }
      } else if (data.fromChain === 'D9') {
         if (data.fromAddress.length !== 47 && data.fromAddress.length !== 48) {
            ctx.addIssue({
               code: z.ZodIssueCode.custom,
               message: 'Invalid D9 address',
               path: ['fromAddress'],
            })
         }
      }

      if (data.toChain === 'TRON') {
         if (!data.toAddress.startsWith("T") || data.toAddress.length != 34) {
            ctx.addIssue({
               code: z.ZodIssueCode.custom,
               message: 'Invalid Tron address',
               path: ['toAddress'],
            })
         }
      } else if (data.toChain === 'D9') {
         if (data.toAddress.length !== 47 && data.toAddress.length !== 48) {
            ctx.addIssue({
               code: z.ZodIssueCode.custom,
               message: 'Invalid D9 address',
               path: ['toAddress'],
            })
         }
      }
   })

export const D9CommitSchema = CommitSchema;

export const AddressBytesForTron = z.object({
   fromAddressBytes: z.string().min(1, "From address is required"),
   toAddressBytes: z.string().min(1, "To address is required"),
})

export const TronCommitSchema = z.object({
   fromAddress: z.string().min(20, "From address is required"),
   toAddress: z.string().min(20, "To address is required"),
   amount: z.number().positive("Amount must be positive").readonly(),
   fromChain: ChainEnum,
   toChain: ChainEnum,
   transactionId: z.string().min(1, "Transaction ID is required"),
}).merge(AddressBytesForTron)

export const DispatchSchema = CommitSchema

export const D9DispatchSchema = DispatchSchema;

export const TronDispatchSchema = z.object({
   fromAddress: z.string().min(20, "From address is required"),
   toAddress: z.string().min(20, "To address is required"),
   amount: z.number().positive("Amount must be positive").readonly(),
   fromChain: ChainEnum,
   toChain: ChainEnum,
   transactionId: z.string().min(1, "Transaction ID is required"),
}).merge(AddressBytesForTron)

export const D9Address = z.string().refine((data) =>
   validateAddress("D9", data), { message: "Invalid D9 address" }
)