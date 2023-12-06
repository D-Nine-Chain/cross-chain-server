import { Request, Response } from 'express';
import { ChainEnum, CryptoTransferSchema } from '../schemas';
import { CryptoTransfer } from '../types';
import { validateTransfer } from '../functions/validation';
import { generateTransactionID, transferAsset } from '../functions/transferAsset';

export async function startTransfer(req: Request, res: Response): Promise<void> {
   const parseResult: any = CryptoTransferSchema.safeParseAsync(req.body);
   if (!parseResult.success) {
      res.status(400).send(parseResult.error);
   }
   const transfer: CryptoTransfer = parseResult.data;
   // valdiate the transfer
   try {
      await validateTransfer(transfer);
   } catch (e) {
      res.send({ success: false, error: e });
   }

   // do the commit part of the transfer
   try {
      await transferAsset(transfer);

   } catch (e) {
      res.status(500).send({ success: false, error: e });
   }

}


