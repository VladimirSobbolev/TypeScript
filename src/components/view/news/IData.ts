export interface IData {
    author: string;
    publishedAt: string;
    title: string;
    source: ISource;
    description: string;
    url: string;
    urlToImage: string;
}

export interface ISource {
    name: string;
}
