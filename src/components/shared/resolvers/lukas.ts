import { gql } from "apollo-boost";

export interface Lukas {
  balance: string | null;
}

export interface LukasData {
  getBalace: Lukas;
}

export interface GetBalanceVariables {
  user: string;
}

export const GET_BALANCE_QUERY = gql`
  query getBalance($user: String!) {
    getBalace(user: $user) {
      balance
    }
  }
`;
