import { Request, Response } from 'express';
import { getD9Api, getTronWeb } from '../../connections';

export async function health(req: Request, res: Response): Promise<void> {
   const d9Api = await getD9Api();
   const d9Block = await d9Api.rpc.chain.getBlock();
   const tronWeb = await getTronWeb();
   const tronBlock = await tronWeb.trx.getCurrentBlock();
   const response = {
      d9Block: d9Block,
      tronBlock: tronBlock,
      youSaid: req.body
   }
   res.send(response);
}