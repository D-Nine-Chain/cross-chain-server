import { Keyring } from '@polkadot/api';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { KeyringPair, KeyringPair$Json, KeyringPair$Meta } from '@polkadot/keyring/types';
import { getSecret } from '../../secrets';
export async function signTranaction(tx: SubmittableExtrinsic<"promise">): Promise<SubmittableExtrinsic<"promise">> {
   const keyPair = await getNodeD9KeyPair();
   return tx.signAsync(keyPair, { nonce: -1 });
}

export async function getNodeD9Address(): Promise<string> {
   console.info(`getting node d9 address`)
   const keyPair = await getNodeD9KeyPair();
   return keyPair.address;
}

const keyRing: Keyring | null = null;
export async function getNodeD9KeyPair(): Promise<KeyringPair> {
   if (!keyRing) {
      const privateKey = await getSecret('D9_NODE_KEY')
      let keyring: Keyring = new Keyring({ type: 'sr25519' });
      const pair = keyring.addFromUri(privateKey);
      return pair
   } else {
      const privateKey = await getSecret('D9_NODE_KEY')
      return keyRing.addFromUri(privateKey)
   }

}



