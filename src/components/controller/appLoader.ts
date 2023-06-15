import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2f6afd51c4b3404a84c99e0403735ee1',
        });
    }
}

export default AppLoader;
