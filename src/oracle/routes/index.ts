import express from 'express';
const router = express.Router();
import { crossChainTransferRoute } from './crossChainTransfer';
import { getTransactionIdRoute } from './getTransactionId';
import { health } from './health';
import { getNodeD9Address } from '../../d9/wallet';


export function defineRoutes(app: any) {
   router.get('/health', health)
   router.get('/transfer/id/next/:userAddress', getTransactionIdRoute)
   router.post('/transfer/start', crossChainTransferRoute)
   router.get('/node/address', (req: any, res: any) => {
      getNodeD9Address().then((address) => {
         res.send({ address })
      })
   })
   app.use('/api', router);
   app.get('/', (req: any, res: any) => {
      res.send("Hello Seattle, I'm listening");
   })
}


//5ED3AFmssWV9BbrkBmsTpBSNSoJESLuX5YKHBnVxo15PQ4mc

//76b2efd7264edfee51028c89276916d16809300cf0925564a4d7f193e4421642
