import { WsProvider, ApiPromise } from '@polkadot/api';
const wsProvider = new WsProvider(process.env.D9_ENDPOINT);

let d9Api: ApiPromise | null = null;
export async function getD9Api() {
   if (d9Api) {
      return d9Api;
   } else {
      d9Api = await ApiPromise.create({ provider: wsProvider });
      return d9Api;
   }
}
