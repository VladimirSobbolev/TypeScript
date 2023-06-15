import './news.css';
import { IData } from './IData';
import {isHTMLElem} from "../../isHTML";

class News {
    draw(data: IData[]): void {
        const news: IData[] = data.length >= 10 ? data.filter((_item: IData, idx: number) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        news.forEach((item: IData, idx: number): void => {
            const newsClone = newsItemTemp?.content.cloneNode(true);
            if (!isHTMLElem(newsClone)) throw new Error(`This is not HTMLElement`);
            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
            let newsPhoto: HTMLDivElement | null = newsClone.querySelector('.news__meta-photo');
            if (typeof newsPhoto === null) throw new Error(`This is not HTMLElement`);
            newsPhoto!.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title')!.textContent = item.title;
            newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
            newsClone.querySelector('.news__description-content')!.textContent = item.description;
            newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;

