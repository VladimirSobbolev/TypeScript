import './sources.css';
import {IDataSources} from './IDataSources';

class Sources {
    draw(data: IDataSources[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: IDataSources) => {
            if (sourceItemTemp) {
                const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
                if (sourceClone instanceof DocumentFragment) {
                    const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                    if (sourceItemName) {
                        sourceItemName.textContent = item.name;
                    }
                    const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
                    if (sourceItem) {
                        sourceItem.setAttribute('data-source-id', item.id);
                    }
                }

                fragment.append(sourceClone);
            }
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
