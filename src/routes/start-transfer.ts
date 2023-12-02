import { Request, Response } from 'express';
import { ChainEnum, CryptoTransfer, CryptoTransferSchema } from '../schemas';
import { validateAmount } from '../validations/amountValidation';

export async function startTransfer(req: Request, res: Response): Promise<void> {
   const parseResult: any = CryptoTransferSchema.safeParse(req.body);
   if (!parseResult.success) {
      res.status(400).send(parseResult.error);
   }
   const transfer: CryptoTransfer = parseResult.data;
   const isValidTransfer = await validateTransfer(transfer);

}

async function validateTransfer(transfer: CryptoTransfer) {
   const isValidAmount = await validateAmount(transfer.fromChain, transfer.fromAddress, transfer.amount);
   return isValidAmount
}

async function startTransferCommit(transfer: CryptoTransfer) {

}
