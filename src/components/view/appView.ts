import News from './news/news';
import Sources from './sources/sources';
import {IData} from "./news/IData";
import {IArticles} from "./IArticles";
import {ISourcesApp, dataSources} from "./ISourcesApp";

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IArticles): void {
        const values: IData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourcesApp): void {
        const values: dataSources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
