import { getTronWeb } from "../connections";
import { ChainEnum } from "../types";
const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
const { isHex } = require('@polkadot/util');


export async function validateAddress(chain: ChainEnum, address: string) {
   if (chain === "TRON") {
      return validateTronAddress(address);
   } else {
      return validateD9Address(address);
   }
}

async function validateTronAddress(address: string) {
   return getTronWeb()
      .then((tronWeb) => {
         const isAddress = tronWeb.isAddress(address);
         if (isAddress) {
            return Promise.resolve();
         }
         else {
            throw new Error("Invalid Tron Address")
         }
      })
}

function validateD9Address(address: string): boolean {
   if (address.length === 47 || address.length === 48) {
      return validate(address);
   } else if (address.length === 51 && address.startsWith('D9x')) {
      return validate(address.slice(3))
   }
   else {
      return false;
   }

   function validate(address: string) {
      try {
         encodeAddress(isHex(address) ? decodeAddress(address) : decodeAddress(address, 42));
         return true;
      } catch (error) {
         return false;
      }
   }
}