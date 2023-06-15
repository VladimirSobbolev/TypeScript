import AppLoader from './appLoader';
import {TCallBack} from "../Types";
import {IGetNewsData, IGetSourcesData} from "../Interfaces";
import {isHTMLElem} from "../isHTML";

class AppController extends AppLoader {
    getSources(callback: TCallBack<IGetSourcesData>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: TCallBack<IGetNewsData>): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (!isHTMLElem(target) || !isHTMLElem(newsContainer)) throw new Error(`This is not HTMLElements`);
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId == null) throw new Error ('Can`t find Attribute "data-source');
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
