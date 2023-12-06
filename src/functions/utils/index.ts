import { hexToBn, u8aToHex } from "@polkadot/util";
import { decodeAddress } from "@polkadot/util-crypto";
import { getTronWeb } from "../../connections";

export function convertD9AdressToHex(address: string) {
   const decoded = decodeAddress(address);
   const hex = u8aToHex(decoded);
   return hex;
}

export async function convertTronAddressToHex(address: string) {
   const tronWeb = await getTronWeb();
   const hex = tronWeb.address.toHex(address);
   return hex;
}

export function toUSDTUnits(usdt: number) {
   return usdt * 100;
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