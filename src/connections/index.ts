import { getTronWeb } from "./tronConnection";
import { getD9Api } from "./d9Connection";
export { getTronWeb, getD9Api }

export async function initConnections() {
   console.info(`initializing blockchain connections`)
   await getTronWeb();
   console.log(`tron web ready`)
   await getD9Api();
   console.log(`d9 api ready`)
}

