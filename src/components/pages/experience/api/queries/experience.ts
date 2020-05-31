import { gql } from "apollo-boost";

export interface Auction {
  actn_id: number;
  exp_id: number;
  start_date: Date;
  duration: number;
  start_value: number;
  highest_bid: number;
  bkn: string;
  req_cancel: number;
  created_at: Date;
  counter: number;
}

export interface Experience {
  exp_id: number;
  bkn_id: string;
  content: string;
  start_date: string;
  places: number;
  base_val: string;
  maxactntdate: Date;
  engagement: number;
  pub_price: number;
  sealed: number;
  actn: Auction;
}

export interface ExperienceData {
  getExperience: Experience;
}

export interface GetExperienceVariables {
  expid: number;
}

export const GET_EXPERIENCE_QUERY = gql`
  query getExperience($expid: Int!) {
    getExperience(expid: $expid) {
      exp_id
      bkn_id
      content
      start_date
      places
      base_val
      maxactntdate
      engagement
      pub_price
      sealed
      actn {
        actn_id
        exp_id
        start_date
        duration
        start_value
        highest_bid
        bkn
        req_cancel
        counter
        created_at
      }
    }
  }
`;
