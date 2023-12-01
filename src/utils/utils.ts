import { AxiosRequestHeaders } from "axios";
import { APIPATHENV } from "./env";

const APIPATH = APIPATHENV;
export interface GetheaderType {
  Accept: string;
  "Content-Type": string;
  Authorization?: string;
}

type CustomHeaders = AxiosRequestHeaders & {
  "x-access-token"?: string;
};

const getHeader = (tokn?: string | null): CustomHeaders => {
  let token =
    localStorage.getItem("access_token") != null
      ? localStorage.getItem("access_token")
      : tokn;

  if (token !== null && token !== undefined) {
    let header = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "x-access-token": token,
    };
    return header as CustomHeaders;
  } else {
    return {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    } as CustomHeaders;
  }
};

const ACTION = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const commorReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ACTION.ERROR: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        statusCode: action.statusCode,
        error: true,
      };
    }
    case ACTION.SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
        totalRecords: action.total,
        statusCode: action.statusCode,
      };
    }
    default: {
      return {
        ...state,
        error: true,
      };
    }
  }
};


export {
  APIPATH,
  ACTION,
  getHeader,
  commorReducer,
};
