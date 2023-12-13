import { Request, Response } from 'express';
import { DispatchSchema } from '../../schemas';
import { D9DispatchUSDT, DispatchRequest, TronDispatchUSDT } from '../../types';
import { executeD9UsdtDispatch } from '../../d9/contracts/crossChainTransfer.ts';
// import { executeTronUsdtDispatch } from '../../tron/contracts/crossChainTransfer';
import { validateDispatchRequest } from '../../validation';
import { convertTronAddressToHex } from '../../utils';
import { tronSendUserUSDT } from '../../tron/contracts/SimpleTransfer';
import { markTransactionComplete } from '../../storage';

export async function dispatchUSDTRoute(req: Request, res: Response): Promise<void> {
   let transactionId: string;
   DispatchSchema.safeParseAsync(req.body)
      .then(parseResult => {
         if (!parseResult.success) {
            res.status(400);
            throw parseResult.error;
         }
         return parseResult.data as DispatchRequest;
      })
      .then(dispatchRequest => {
         return validateDispatchRequest(dispatchRequest).then(() => dispatchRequest)
            .catch((e) => { throw e })
      })
      .then((dispatchRequest) => {
         transactionId = dispatchRequest.transactionId;
         return dispatchRequest.fromChain === "TRON"
            ? createD9Dispatch(dispatchRequest)
            : createTronDispatch(dispatchRequest);
      })
      .then((dispatch: D9DispatchUSDT | TronDispatchUSDT) => {
         return dispatch.fromChain === "TRON"
            ? executeD9UsdtDispatch(dispatch as D9DispatchUSDT)
            : tronSendUserUSDT(dispatch.toAddress, dispatch.amount);
      })
      .then(() => {
         return markTransactionComplete(transactionId)
      })
      .then(() => res.send({ success: true }))
      .catch(error => {
         console.error("Error in cross-chain transfer route", error);
         if (error.message) {
            res.status(500).send({ success: false, error: error.message });
         } else {
            res.status(500).send({ success: false, error: error });
         }
      });
}

async function createD9Dispatch(dispatchRequest: DispatchRequest): Promise<D9DispatchUSDT> {
   let dispatch: D9DispatchUSDT;
   if (dispatchRequest.fromChain !== "TRON") {
      throw new Error("Attempting to create D9 dispatch from Tron dispatch request")
   }
   try {
      dispatch = {
         ...dispatchRequest,
         fromAddress: await convertTronAddressToHex(dispatchRequest.fromAddress),
      };
   }
   catch (err) {
      console.error("Error in address conversion:", err);
      throw err; // Re-throw the error for the caller to handle
   }
   return dispatch;
}

async function createTronDispatch(dispatchRequest: DispatchRequest): Promise<DispatchRequest> {
   let dispatch: DispatchRequest;
   if (dispatchRequest.fromChain !== "D9") {
      throw new Error("Attempting to create Tron dispatch from D9 dispatch request")
   }
   try {
      // const addressBytes: AddressBytesForTron = {
      //    fromAddressBytes: convertD9AdressToHex(dispatchRequest.fromAddress),
      //    toAddressBytes: '0x' + (await convertTronAddressToHex(dispatchRequest.toAddress)),
      // }
      dispatch = {
         ...dispatchRequest,
         transactionId: '0x' + dispatchRequest.transactionId,
         // ...addressBytes
      };
   }
   catch (err) {
      console.error("Error in address conversion:", err);
      throw err; // Re-throw the error for the caller to handle
   }

   return dispatch;
}
