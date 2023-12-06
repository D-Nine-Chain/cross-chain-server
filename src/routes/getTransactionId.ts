import { Request, Response } from "express";
import { generateTransactionIdD9 } from "../contracts/d9/crossChainTransfer.ts";
import { D9Address } from "../schemas/";


export async function getTransactionId(req: Request, res: Response): Promise<void> {
   const parseResult: any = await D9Address.safeParseAsync(req.params.userAddress);
   if (!parseResult.success) {
      res.status(400).send(parseResult.error);
   }
   const userAddress = parseResult.data;
   try {
      const transactionId = await generateTransactionIdD9(userAddress);
      res.send(transactionId);
   } catch (e) {
      res.status(500).send({ success: false, error: e });
   }
}