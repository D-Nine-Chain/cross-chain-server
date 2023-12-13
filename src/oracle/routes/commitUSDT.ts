import { Request, Response } from 'express';
import { CommitSchema } from '../../schemas';
import { CommitRequest, AddressBytesForTron, TronCommitUSDT, D9CommitUSDT } from '../../types';
import { validateCommitRequest } from '../../validation';
import { executeD9UsdtCommit } from '../../d9/contracts/crossChainTransfer.ts';

import { convertD9AdressToHex, convertTronAddressToHex } from '../../utils';
import { saveNewTransaction } from '../../storage';
import { tronReceiveUserUSDT } from '../../tron/contracts/SimpleTransfer';

export async function commitUSDTRoute(
   req: Request,
   res: Response
): Promise<void> {
   CommitSchema.safeParseAsync(req.body)
      .then(parseResult => {
         console.log("parse   result ", parseResult)
         if (!parseResult.success) {
            res.status(400);
            throw parseResult.error;
         }
         return parseResult.data;
      })
      .then((commitRequest: CommitRequest) => {
         return saveNewTransaction(commitRequest)
            .then(() => commitRequest)
            .catch((e) => { throw e })
      })
      .then(commitRequest => {
         validateCommitRequest(commitRequest);
         return commitRequest.fromChain === "D9"
            ? createD9Commit(commitRequest)
            : createTronCommit(commitRequest);
      })
      .then((commit: D9CommitUSDT | TronCommitUSDT) => {
         return commit.fromChain === "D9"
            ? executeD9UsdtCommit(commit as D9CommitUSDT)
            : tronReceiveUserUSDT(commit.fromAddress, commit.amount);
      })
      .then(() => res.send({ success: true }))
      .catch(error => {
         console.error("Error in cross-chain transfer route", error);
         res.status(500).send({ success: false, error });
      });
}

async function createD9Commit(commit: CommitRequest): Promise<D9CommitUSDT> {
   console.log("creating d9 commit")
   let newCommit: D9CommitUSDT;
   if (commit.fromChain !== "D9") {
      throw new Error("Attempting to create D9 commit from Tron commit request")
   }
   try {
      newCommit = {
         ...commit,
         toAddress: await convertTronAddressToHex(commit.toAddress),
      };
      return newCommit;
   }
   catch (err) {
      console.error("Error in address conversion:", err);
      throw err; // Re-throw the error for the caller to handle
   }
}

async function createTronCommit(commitRequest: CommitRequest): Promise<TronCommitUSDT> {
   let newCommit: TronCommitUSDT;
   if (commitRequest.fromChain !== "TRON") {
      throw new Error("Attempting to create Tron commit from D9 commit request")
   }
   try {
      const addressBytes: AddressBytesForTron = {
         toAddressBytes: convertD9AdressToHex(commitRequest.toAddress),
         fromAddressBytes: '0x' + (await convertTronAddressToHex(commitRequest.toAddress)),
      }
      newCommit = {
         ...commitRequest,
         transactionId: '0x' + commitRequest.transactionId,
         ...addressBytes
      };
      return newCommit;
   }
   catch (err) {
      console.error("Error in address conversion:", err);
      throw err; // Re-throw the error for the caller to handle
   }

}
