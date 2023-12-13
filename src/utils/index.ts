import { hexToBn, u8aToHex } from "@polkadot/util";
import { decodeAddress } from "@polkadot/util-crypto";
import { getTronWeb } from "../connections";
// import { ChainEnum, DispatchRequest } from "../types";

export function convertD9AdressToHex(address: string) {
   try {
      const decoded = decodeAddress(address);
      const hex = u8aToHex(decoded);
      return hex;
   } catch (error) {
      throw new Error(`Error converting D9 address to hex: ${error}`);
   }
}

export async function convertTronAddressToHex(address: string) {
   try {
      const tronWeb = await getTronWeb();
      const hex = '0x' + tronWeb.address.toHex(address);
      return hex;
   }
   catch (error) {
      throw new Error(`Error converting Tron address to hex: ${error}`);
   }
}

export function toUSDTUnits(usdt: number) {
   const usdtUnits = usdt * 100;
   console.log(`usdt units ${usdtUnits}`)
   return usdtUnits;
}

export function formatNumber(number: number | string): number {
   if (typeof number === 'string' && !number.startsWith('0x')) {
      number = parseFloat(number);
      return number;
   }
   else if (typeof number === 'string' && number.startsWith('0x')) {
      return hexToBn(number).toNumber();
   }
   else {
      return number as number;
   }
}


// export async function formatTransferForContracts(transfer: CommitUSDT, transactionType: TransactionType): Promise<CommitUSDT> {
//    let newTransfer: CommitUSDT = {
//       ...transfer,
//    }
//    async function convertAddress(chain: ChainEnum, address: string): Promise<string> {
//       return chain === 'D9' ? convertD9AdressToHex(address) : await convertTronAddressToHex(address);
//    }

//    try {
//       if (transactionType === TransactionType.Commit) {
//          newTransfer.toAddress = await convertAddress(transfer.toChain, transfer.toAddress);
//       }
//       else {
//          newTransfer.fromAddress = await convertAddress(transfer.fromChain, transfer.fromAddress);
//       }
//    } catch (error) {
//       console.error("Error in address conversion:", error);
//       throw error; // Re-throw the error for the caller to handle
//    }
//    return newTransfer;
// }

export enum TransactionType {
   Commit = 'Commit',
   Dispatch = 'Dispatch'
}