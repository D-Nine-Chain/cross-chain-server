import { Request, Response } from 'express';
import { CryptoTransferSchema } from '../../schemas';
import { CryptoTransfer } from '../../types';
import { validateTransfer } from '../../validation';
import { crossChainTransfer } from '../../crossChain/crossChainActions';
import { SafeParseReturnType, ZodError } from 'zod';
import { parse } from 'path';

export async function crossChainTransferRoute(req: Request, res: Response): Promise<void> {
   CryptoTransferSchema.safeParseAsync(req.body)
      .then((parseResult: SafeParseReturnType<any, CryptoTransfer>) => {
         if (!parseResult.success) {
            res.status(400)
            throw parseResult.error;
         }
         const transfer: CryptoTransfer = parseResult.data;

         return validateTransfer(transfer).then(() => transfer);
      })
      .then((transfer) => crossChainTransfer(transfer))
      .then(() => { res.send({ success: true }); return; })
      .catch((e: any) => {
         console.log("error in cross chain transfer route", e)
         res.send({ success: false, error: e });
      })
}


