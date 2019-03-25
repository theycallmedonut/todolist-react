export interface MockFetch {
    calledUrl: string;
    (url: string): Promise<object>;
}

export const timeout = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function mockFetchData(data = {}): MockFetch{

    const fetch: MockFetch =  (url: string) => {
        fetch.calledUrl = url;
        return Promise.resolve({json: () => data });
    };

    fetch.calledUrl = '';

    return fetch;
}

export function mockFailingFetch(): MockFetch{

    const fetch: MockFetch =  (url: string) => {
        return Promise.reject();
    };
    fetch.calledUrl = '';

    return fetch;
}