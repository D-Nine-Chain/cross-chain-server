
import { Request, Response } from "express";
import { AccountRequestSchema } from "../../schemas";
import { AccountRequest } from "../../types";
import { getTronUSDTAllowance, getTronUSDTBalance } from "../../tron/contracts/usdt";
import { getD9USDTAllowance, getD9USDTBalance } from "../../d9/contracts/usdt/d9Usdt";

export async function getAccountDataRoute(req: Request, res: Response): Promise<void> {
   AccountRequestSchema.safeParseAsync(req.body)
      .then(parseResult => {
         if (!parseResult.success) {
            res.status(400);
            throw parseResult.error;
         }
         return parseResult.data as AccountRequest;
      })
      .then((accountRequest: AccountRequest) => {
         const tronAllowancePromise = getTronUSDTAllowance(accountRequest.tronAddress);
         const tronBalancePromise = getTronUSDTBalance(accountRequest.tronAddress);
         const d9AllowancePromise = getD9USDTAllowance(accountRequest.d9Address);
         const d9BalancePromise = getD9USDTBalance(accountRequest.d9Address);

         return Promise.all([tronAllowancePromise, tronBalancePromise, d9AllowancePromise, d9BalancePromise])
      })
      .then(([tronAllowance, tronBalance, d9Allowance, d9Balance]) => {
         res.status(200).send({
            success: true,
            data: {
               tron: {
                  address: req.body.tronAddress,
                  balance: tronBalance.toNumber(),
                  allowance: tronAllowance.toNumber()
               },
               d9: {
                  address: req.body.d9Address,
                  balance: d9Balance,
                  allowance: d9Allowance
               }
            }
         })
         return;
      })
      .catch((e) => {
         console.error("Error in get account data route", e);
         res.send({ success: false, error: e });
      })
}


