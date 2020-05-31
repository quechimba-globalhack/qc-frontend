import { EosioTransactionService } from "../../components/shared/resolvers/eosioTransaction";

const service: EosioTransactionService = new EosioTransactionService();

export interface AtnStartTxData {
  owner: string;
  expid: number;
  start_date: Date;
}

export interface AtnBidTxData {
  bkn: string;
  bidprice: number;
  actnid: number;
}

export interface AtnCancelTxData {
  owner: string;
  actnid: number;
}

/*
const data = await createAuctionStartTransaction("agency1", {
              owner: 'agency1',
              expid: 3,
              start_date: new Date('2020-07-28T17:01:20')
            });
             */
export async function createAuctionStartTransaction(
  actor: string,
  data: AtnStartTxData
) {
  return await service.getEosioTransacData<AtnStartTxData>(
    "atnstart",
    actor,
    data
  );
}

/**
 * This will bid => 5100.0000 LKS
 * const data = await createAuctionBid("maluma", {
              actnid: 0,
              bidprice: 51000000,
              bkn: "maluma",
            });F
 */
export async function createAuctionBid(actor: string, data: AtnBidTxData) {
  return await service.getEosioTransacData<AtnBidTxData>("atnbid", actor, data);
}

/**
 * const data = await createAuctionCancel("agency1", {
              actnid: 0,
              owner: 'agency1'
            });
 */
export async function createAuctionCancel(
  actor: string,
  data: AtnCancelTxData
) {
  return await service.getEosioTransacData<AtnCancelTxData>(
    "atnrqcancel",
    actor,
    data
  );
}
