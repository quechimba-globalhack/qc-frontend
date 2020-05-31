import { gql } from "apollo-boost";
import { JsonRpc, Api, Serialize } from "eosjs";
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig");
const { TextEncoder, TextDecoder } = require('text-encoding');

export interface EosioTransactionData {
  name: string;
  signatures: Array<string>;
  hexData: string;
}

export interface RpcProcessedResponse {
  hash: string;
  blockNumber: number;
  timestamp: Date;
}

export interface SendTransactionVariales {
  user: string;
  data: EosioTransactionData;
}

export const SEND_TRANSACTION_MUTATION = gql`
  mutation sendTransaction($user: String!, $data: EosioTransactionData!) {
    sendTransaction(user: $user, data: $data) {
      hash
      blockNumber
      timestamp
      error {
        code
        name
        message
      }
    }
  }
`;

export interface EosioAction<T> {
  account: string;
  name: string;
  authorization: { actor: string; permission: string }[];
  data?: T | T[];
}

export interface EosioTransaction<T> {
  actions: Array<EosioAction<T>>;
}
export class EosioTransactionService {
  public async signTransaction<TData>(
    transaction: EosioTransaction<TData>
  ): Promise<{ signatures: Array<string>; serializedTransaction: Uint8Array }> {
    /// TODO: Save private key in localstorage
    const userPrivateKey =
      "5J7LPEhbEURqAEQvfXQjbTuaXQPV76bMUhMmoSnv1mMS51mN9y1";
    if (!userPrivateKey) {
      throw new Error("no userPrivateKey");
    }

    const rpc = new JsonRpc("http://127.0.0.1:8888");
    const signatureProvider = new JsSignatureProvider([userPrivateKey]);

    const api = new Api({
      rpc,
      signatureProvider,
      textDecoder: new TextDecoder(),
      textEncoder: new TextEncoder(),
      chainId:
        "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
    });

    console.debug('Before API', transaction);
    return await api.transact(transaction, {
      blocksBehind: 3,
      expireSeconds: 30,
      broadcast: false,
      sign: true,
    });
  }

  public async getEosioTransacData<TData>(
    name: string,
    actor: string,
    data: TData
  ): Promise<EosioTransactionData> {
    try {
      const signedTransaction = await this.signTransaction<TData>({
        actions: [
          {
            account: "qccontract",
            name,
            authorization: [{ actor, permission: "active" }],
            data,
          },
        ],
      });
      console.debug('signedTx', signedTransaction)
      const hexTransaction = {
        ...signedTransaction,
        ...{
          serializedTransaction: Serialize.arrayToHex(
            signedTransaction.serializedTransaction
          ),
        },
      };

      return Promise.resolve({
        name,
        signatures: hexTransaction.signatures,
        hexData: hexTransaction.serializedTransaction,
      });
    } catch (err) {
      console.error("Transaction serialization failed", err);
    }
  }
}
