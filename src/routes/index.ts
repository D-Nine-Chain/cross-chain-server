import { startTransfer } from './start-transfer';

import { health } from './health';

export function defineRoutes(app: any) {
   app.get('/health', health)
}





