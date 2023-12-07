import { hexToBn, u8aToHex } from "@polkadot/util";
import { decodeAddress } from "@polkadot/util-crypto";
import { getTronWeb } from "../connections";
import { ChainEnum, CryptoTransfer } from "../types";

export function convertD9AdressToHex(address: string) {
   const decoded = decodeAddress(address);
   const hex = u8aToHex(decoded);
   return hex;
}

export async function convertTronAddressToHex(address: string) {
   const tronWeb = await getTronWeb();
   const hex = tronWeb.address.toHex(address);
   return "0x" + hex;
}

export function toUSDTUnits(usdt: number) {
   const usdtUnits = usdt * 100;
   return usdtUnits.toString();
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

export async function formatTransferForContracts(transfer: CryptoTransfer): Promise<CryptoTransfer> {
   async function convertAddress(chain: ChainEnum, address: string): Promise<string> {
      return chain === 'D9' ? convertD9AdressToHex(address) : await convertTronAddressToHex(address);
   }

   try {
      transfer.fromAddress = await convertAddress(transfer.fromChain, transfer.fromAddress);
      transfer.toAddress = await convertAddress(transfer.toChain, transfer.toAddress);
   } catch (error) {
      console.error("Error in address conversion:", error);
      throw error; // Re-throw the error for the caller to handle
   }
   return transfer;
}