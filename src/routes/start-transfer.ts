import { Request, Response } from 'express';
import { ChainEnum, CryptoTransfer, CryptoTransferSchema } from '../schemas';

export async function startTransfer(req: Request, res: Response): Promise<void> {
   const parseResult: any = CryptoTransferSchema.safeParse(req.body);
   if (!parseResult.success) {
      res.status(400).send(parseResult.error);
   }
   const transfer: CryptoTransfer = parseResult.data;

}

function validateTransfer(transfer: CryptoTransfer) {

}

function validateBalance() { }
function validateAllowance() { }