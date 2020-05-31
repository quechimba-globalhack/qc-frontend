import { gql } from "apollo-boost";

export interface Auction {
  actn_id: number;
  exp_id: number;
  start_date: "2020-10-28T17:01:20";
  duration: number;
  start_value: "5000.0000 LKS";
  highest_bid: number;
  bkn: string;
  req_cancel: number;
  created_at: Date;
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
        created_at
      }
    }
  }
`;
