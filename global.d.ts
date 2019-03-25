declare namespace NodeJS {

    export interface Global {
        fetch: MockFetch;
    }
}

interface MockFetch {
    calledUrl: string;
    (url: string): Promise<object>;
}
