import { EosioTransactionService } from "../../components/shared/resolvers/eosioTransaction";

export interface ExpPublishTxData {
  owner: string;
  content: string;
  start_exp: Date; //number;
  places: number;
  baseprice: number;
}

export interface ExpSubscribeTxData {
  bkn: string;
  expid: BigInt;
}

const service: EosioTransactionService = new EosioTransactionService();

/*
Example of how to use this 👇🏾
const data = await createExpPublishTransaction("agency1", {
              owner: 'agency1',
              places: 10,
              content: '96ad17940e347866dc7463f291132d313d6778d60f0e47fb3a369d1f0a743c9d',
              start_exp: (new Date('2020-10-28T17:01:20')),
              baseprice: 10000000
            });
*/
export async function createExpPublishTransaction(
  actor: string,
  data: ExpPublishTxData
) {
  return await service.getEosioTransacData<ExpPublishTxData>(
    "exppublish",
    actor,
    data
  );
}

export async function createExpSubscribeTransaction(
  actor: string,
  data: ExpSubscribeTxData
) {
  return await service.getEosioTransacData<ExpSubscribeTxData>(
    "expsubscribe",
    actor,
    data
  );
}
