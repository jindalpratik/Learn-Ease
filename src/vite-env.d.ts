/// <reference types="vite/client" />


type LangType="ja" |"hi" |"fr" |"es";


type WordType={
    word:string,
    meaning:string,
    options:string[],
}

type StateType={
    loading:boolean,
    result:string[],
    words:WordType[],
    error?:string,
}

type FetchDataType = {
  translations:{
    text:string;
  }[];
};