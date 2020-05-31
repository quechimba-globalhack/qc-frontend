import { gql } from "apollo-boost";
export interface QueChimba {
  quechimba: string;
}

export interface QueChimbaData {
  queChimba: Array<QueChimba>;
}

export interface GetQueChimbaVariables {
  count: number;
}

export const QUE_CHIMBA_QUERY = gql`
  query getQueChimba($count: Int!) {
    queChimba(count: $count) {
      quechimba
    }
  }
`;
