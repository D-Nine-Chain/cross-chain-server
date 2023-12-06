import express from 'express';
const router = express.Router();
import { startTransfer } from './startTransfer';
import { getTransactionId } from './getTransactionId';
import { health } from './health';


export function defineRoutes(app: any) {
   router.get('/health', health)
   router.get('/transfer/id/next/:userAddress', getTransactionId)
   router.post('/transfer/start', startTransfer)
   app.use('/api', router);
   app.get('/', (req: any, res: any) => {
      res.send("Hello Seattle, I'm listening");
   })
}


//5ED3AFmssWV9BbrkBmsTpBSNSoJESLuX5YKHBnVxo15PQ4mc

//76b2efd7264edfee51028c89276916d16809300cf0925564a4d7f193e4421642
