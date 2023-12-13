export type Transaction = {
   transactionId: string,
   fromAddress: string,
   toAddress: string,
   status: TransactionStatus
   completionTime?: number,
}

export enum TransactionStatus {
   Commit,
   Complete,
}