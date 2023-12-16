import express from 'express';
const router = express.Router();
import { commitUSDTRoute } from './commitUSDT';
import { getTransactionIdRoute } from './getTransactionId';
import { health } from './health';
import { getNodeD9Address } from '../../d9/wallet';
import { dispatchUSDTRoute } from './dispatchUSDT';
import { getAccountDataRoute } from './accountData';


export function defineRoutes(app: any) {
   router.get('/health', health)
   router.get('/transfer/id/next/:userAddress', getTransactionIdRoute)
   router.get('/transfer/id/:transactionId', getTransactionIdRoute)
   router.post('/account', getAccountDataRoute)
   router.post('/transfer/commit', commitUSDTRoute)
   router.post('/transfer/dispatch', dispatchUSDTRoute)


   router.get('/node/address', (_: any, res: any) => {
      getNodeD9Address().then((address) => {
         res.send({ address })
      })
   })
   app.use('/api', router);
   app.get('/', (_: any, res: any) => {
      res.send("Hello Seattle, I'm listening");
   })
}


