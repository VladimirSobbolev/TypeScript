import AppController from '../controller/controller';
import {AppView} from '../view/appView';
import {IGetNewsData, IGetSourcesData} from '../Interfaces'

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            ?.querySelector('.sources')
            ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as IGetNewsData)));
        this.controller.getSources((data) => this.view.drawSources(data as IGetSourcesData));
    }
}

export default App;
