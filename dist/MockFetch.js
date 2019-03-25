"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.timeout = (ms) => tslib_1.__awaiter(this, void 0, void 0, function* () { return new Promise(resolve => setTimeout(resolve, ms)); });
function mockFetchData(data = {}) {
    const fetch = (url) => {
        fetch.calledUrl = url;
        return Promise.resolve({ json: () => data });
    };
    fetch.calledUrl = '';
    return fetch;
}
exports.mockFetchData = mockFetchData;
function mockFailingFetch() {
    const fetch = (url) => {
        return Promise.reject();
    };
    fetch.calledUrl = '';
    return fetch;
}
exports.mockFailingFetch = mockFailingFetch;
//# sourceMappingURL=MockFetch.js.map