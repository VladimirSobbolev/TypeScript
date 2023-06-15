import  {ISource}  from "./news/IData";

export interface IArticles {
articles: dataArticles[];
}


type dataArticles = {
    author: string;
    publishedAt: string;
    title: string;
    source: ISource;
    description: string;
    url: string;
    urlToImage: string;
}

