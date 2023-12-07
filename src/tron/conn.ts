import { getSecret } from '../secrets';
const TronWeb = require('tronweb')

let tronWeb: any = null;
export async function getTronWeb() {
   if (tronWeb) {
      return tronWeb;
   } else {
      // const privateKey = await getSecret('TRON_NODE_KEY');
      const privateKey = "f35900b65b71f83f7741d41146acafc5dbf132a24f754b162fcce3e39cad55e5";
      tronWeb = new TronWeb({
         fullHost: process.env.TRON_ENDPOINT,
         headers: { "TRON-PRO-API-KEY": process.env.TRON_API_KEY },
         privateKey: privateKey
      })
      return tronWeb;
   }
}