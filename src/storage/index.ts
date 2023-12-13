
import { QueryConstraint, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { getDb } from "./firestoreSetup";
import { Transaction, TransactionStatus } from "./storageTypes";
import { CommitRequest, DispatchRequest } from "../types";

const COLLECTION = "Transactions";

export async function markTransactionComplete(transactionId: string) {
   return getDb()
      .then((db) => {
         const docRef = doc(db, COLLECTION, transactionId)
         return updateDoc(docRef, COLLECTION, transactionId, { status: TransactionStatus.Complete, completionTime: Date.now() })
      })
}


export async function saveNewTransaction(request: CommitRequest | DispatchRequest) {
   return getDb()
      .then((db) => {
         const docRef = doc(db, COLLECTION, request.transactionId)
         const transactionData = {
            transactionId: request.transactionId,
            fromAddress: request.fromAddress,
            toAddress: request.toAddress,
            status: TransactionStatus.Commit
         }
         return setDoc(docRef, transactionData)
      })
}

export async function getTransaction(transactionId: string) {
   return getDb()
      .then((db) => {
         const docRef = doc(db, COLLECTION, transactionId)
         return getDoc(docRef)
      })
      .then((snapShot) => {
         if (snapShot.exists()) {
            return snapShot.data()
         }
         else {
            return null;
         }
      })
}

export async function validateNotDispatchedAlready(transactionId: string) {
   const completeConstraint = where("status", "==", TransactionStatus.Complete)
   const transactionIdConstraint = where("transactionId", "==", transactionId)
   return queryTransactions([completeConstraint, transactionIdConstraint])
      .then((transactions) => {
         if (transactions.length > 0) {
            throw new Error("Transaction already dispatched")
         }
      })
}

export async function validateCommitExists(transactionId: string) {
   const transactionIdConstraint = where("transactionId", "==", transactionId)
   return queryTransactions([transactionIdConstraint])
      .then((transactions) => {
         if (transactions.length === 0) {
            throw new Error("Commit does not exist")
         }
      })
}
export async function getIncompleteTransactions() {
   const w = where("status", "==", TransactionStatus.Commit)
   return queryTransactions([w]);
}

async function queryTransactions(queryConstraints: QueryConstraint[]) {
   return getDb()
      .then((db) => {
         const transactionsColRef = collection(db, COLLECTION);
         const q = query(transactionsColRef, ...queryConstraints);
         return getDocs(q)
            .then((querySnapshot) => {
               const transactions: Transaction[] = [];
               querySnapshot.forEach((doc) => {
                  transactions.push(doc.data() as Transaction);
               });
               return transactions;
            });
      });
}