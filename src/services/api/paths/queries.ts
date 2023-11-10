import { client } from "../clients";

export interface QueryParameters {
  datasets: string[];
  filters?: Array<QueryFilter>;
  filterCombination: "AND" | "OR";
  calculations?: QueryCalculation[];
  groupBys?: QueryGroupBy[];
  orderBy?: {
    value: string;
    order?: "ASC" | "DESC";
  };
  limit?: number;
  needle?: SearchNeedle;
}

export interface QueryFilter {
  key: string;
  operation: QueryOperation;
  value?: string | number | boolean;
  type: string;
}

export interface QueryGroupBy {
  type: "string" | "number" | "boolean";
  value: string;
}

export interface QueryCalculation {
  key?: string;
  operator: QueryOperator;
  alias?: string;
}

export enum QueryOperator {
  COUNT = "COUNT",
  COUNT_DISTINCT = "COUNT_DISTINCT",
  MAX = "MAX",
  MIN = "MIN",
  SUM = "SUM",
  AVG = "AVG",
  MEDIAN = "MEDIAN",
  P001 = "P001",
  P01 = "P01",
  P05 = "P05",
  P10 = "P10",
  P25 = "P25",
  P75 = "P75",
  P90 = "P90",
  P95 = "P95",
  P99 = "P99",
  P999 = "P999",
  STDDEV = "STDDEV",
  VARIANCE = "VARIANCE",
}

export enum QueryOperation {
  EQUAL = "=",
  DIFFERENT = "!=",
  GREATER_THAN = ">",
  GREATER_THAN_EQUAL = ">=",
  LOWER_THAN = "<",
  LOWER_THAN_EQUAL = "<=",
  LIKE = "LIKE",
  NOT_LIKE = "NOT_LIKE",
  INCLUDES = "INCLUDES",
  DOES_NOT_INCLUDE = "DOES_NOT_INCLUDE",
  EXISTS = "EXISTS",
  MATCH_REGEX = "MATCH_REGEX",
  DOES_NOT_EXIST = "DOES_NOT_EXIST",
  IN = "IN",
  NOT_IN = "NOT_IN",
  STARTS_WITH = "STARTS_WITH",
}

export interface Query {
  parameters: QueryParameters;
  id: string;
  name: string;
  description: string;
  workspaceId: string;
  environmentId: string;
  userId: string;
  created?: string;
  updated?: string;
}

export interface SearchNeedle {
  item: string;
  isRegex?: boolean;
  matchCase?: boolean;
}

async function queriesList(): Promise<Query[]> {
  const res = (await client.get("/queries")).data;
  return res.queries;
}

export default {
  queriesList,
};
