
import {
   mnemonicGenerate,
   mnemonicToMiniSecret,
   mnemonicValidate,
} from '@polkadot/util-crypto';
import { u8aToHex } from "@polkadot/util";
const TronWeb = require('tronweb')

let secretRecord: Record<string, string> | null = null;
export async function getSecret(string: string) {
   if (secretRecord) {
      return secretRecord[string];
   } else {
      await setHCPAToken();
      const res = await fetch(process.env.VAULT_SECRETS_ENDPOINT!, {
         method: 'GET',
         headers: {
            'Authorization': `Bearer ${process.env.VAULT_TOKEN}`,
         }
      })
      const response = await res.json();
      const secrets = response.secrets;
      secretRecord = makeSecretsRecord(secrets);
      return secretRecord[string];
   }
}

function makeSecretsRecord(secrets: any[]) {
   const secretsFormatted = secrets.map((secret: any) => {
      const formattedSecret = {
         name: secret.name,
         value: secret.version.value
      }

      return formattedSecret;
   })
   let secretsRecord: Record<string, string> = {}
   secretsFormatted.forEach((secret: any) => {

      if (secret.name == 'd9_testnet_cross_transfer_node_key') {
         secretsRecord['D9_NODE_KEY'] = secret.value;
      }
      else if (secret.name == 'tron_testnet_cross_transfer_node_key') {
         secretsRecord['TRON_NODE_KEY'] = secret.value;
      }
      else if (secret.name == 'TRON_API_KEY') {
         secretsRecord['TRON_API_KEY'] = secret.value;
      }

   })
   return secretsRecord
}

export async function setHCPAToken() {
   const clientId = process.env.HCP_CLIENT_ID;
   const clientSecret = process.env.HCP_CLIENT_SECRET;

   const response = await fetch(process.env.HASHI_CORP_ENDPOINT!, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         audience: 'https://api.hashicorp.cloud',
         grant_type: 'client_credentials',
         client_id: clientId,
         client_secret: clientSecret
      })
   });

   const data = await response.json();
   process.env.VAULT_TOKEN = data.access_token;
}

async function generateTronAccount() {
   const account = TronWeb.utils.accounts.generateAccount();
   console.log('Account Details:', account);
}

function generateD9Account() {
   let validMnemonic = false;
   let mnemonic = "";
   while (validMnemonic === false) {
      mnemonic = mnemonicGenerate();
      console.log(`trying mnemonic: ${mnemonic}`)
      validMnemonic = mnemonicValidate(mnemonic);
   }
   return u8aToHex(mnemonicToMiniSecret(mnemonic));
}

