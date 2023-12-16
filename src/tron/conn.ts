import { getSecret } from '../secrets';
const TronWeb = require('tronweb')

let tronWeb: any = null;
export async function getTronWeb() {
   if (tronWeb) {
      return tronWeb;
   } else {

      return Promise.all([getSecret('TRON_NODE_KEY'), getSecret('TRON_API_KEY')])
         .then(([privateKey, apiKey]) => {
            console.log("api key ", apiKey)
            tronWeb = new TronWeb({
               fullHost: process.env.TRON_ENDPOINT,
               headers: { "TRON-PRO-API-KEY": apiKey },
               privateKey: privateKey
            })
            return tronWeb;
         })
   }
}