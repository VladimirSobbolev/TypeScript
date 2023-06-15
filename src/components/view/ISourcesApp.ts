export interface ISourcesApp {
    sources: dataSources[];
}


export type dataSources = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}