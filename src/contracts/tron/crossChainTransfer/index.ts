import { getTronWeb } from "../../../connections";
import { crossChainTronContract } from "./crossChainTronAbi";


export async function assetCommitTron(transactionId: string, fromAddress: string, toAddress: string): Promise<any> {
   const contract = await getTronCrossChainTransfer();
   const assetCommit = await contract.assetCommit(transactionId, fromAddress, toAddress).send();
   return assetCommit;
}

export async function assetDispatchTron(transactionId: string, fromAddress: string, toAddress: string): Promise<any> {
   const contract = await getTronCrossChainTransfer();
   const assetDispatch = await contract.assetDispatch(transactionId, fromAddress, toAddress).send();
   return assetDispatch;
}

export async function getCurrentNonceTron(userAddress: string): Promise<number> {
   const contract = await getTronCrossChainTransfer();
   const nonce = await contract.getCurrentNonce(userAddress).call();
   return nonce;
}

export async function getTronCrossChainTransfer(): Promise<any> {
   const tronWeb = await getTronWeb();
   return tronWeb.contract(crossChainTronContract.abi, process.env.TRON_TRANSFER_CONTRACT_ADDRESS!)
} 