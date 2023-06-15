import {IOptions} from "../Interfaces";
import {TCallBack, TGetResp} from "../Types";

class Loader {
    baseLink: string;
    options: IOptions;
    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options }: {endpoint: string, options?: TGetResp},
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: TGetResp | undefined, endpoint: string): string {
        const urlOptions: IOptions = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${(urlOptions[key as keyof typeof urlOptions])}&`;
        });

        return url.slice(0, -1);
    }

    load(method: "GET", endpoint: string, callback: TCallBack<Response>, options: TGetResp | undefined): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data as unknown as Response))
            .catch((err) => console.error(err));
    }
}

export default Loader;
