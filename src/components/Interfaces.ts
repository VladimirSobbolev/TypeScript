import {dataSources} from "./view/ISourcesApp";
import {IData} from "./view/news/IData";

export interface IOptions {
    apiKey: string;
}

export interface IGetSourcesData {
    sources: dataSources[];
    status?: string;
}

export interface  IGetNewsData {
    articles: INewsArticlesData[];
    status: string;
    totalResults: number;
}

export interface INewsArticlesData extends IData {
    content: string;
    source: { id: string, name: string };
}

// export interface IRes {
//     json(): void;
//
//     ok: boolean;
//     status: number;
//     statusText: string | undefined;
// }