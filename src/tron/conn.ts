import { getSecret } from '../secrets';
const TronWeb = require('tronweb')

let tronWeb: any = null;
export async function getTronWeb() {
   if (tronWeb) {
      return tronWeb;
   } else {
      return getSecret('TRON_NODE_KEY')
         .then((privateKey) => {
            tronWeb = new TronWeb({
               fullHost: process.env.TRON_ENDPOINT,
               headers: { "TRON-PRO-API-KEY": process.env.TRON_API_KEY },
               privateKey: privateKey
            })
            return tronWeb;
         })
   }
}