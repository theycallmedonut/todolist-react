"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const md5_1 = tslib_1.__importDefault(require("md5"));
exports.initFormData = (args, encode = true) => {
    let data = new FormData();
    Object.keys(args).forEach(key => {
        const value = encode
            ? encodeURIComponent(args[key])
            : args[key];
        data.set(key, value);
    });
    const paramsString = new URLSearchParams(data).toString();
    data.set('signature', md5_1.default(paramsString));
    return data;
};
exports.initStringData = (args) => {
    let result = '';
    Object.keys(args).forEach(key => {
        result += `&${key}=${args[key]}`;
    });
    return result;
};
exports.regexes = {
    url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
};
exports.deepFreeze = obj => {
    let props = Object.getOwnPropertyNames(obj);
    props.forEach(name => {
        let prop = obj[name];
        if (typeof prop === 'object' && prop !== null)
            exports.deepFreeze(prop);
    });
    return Object.freeze(obj);
};
//# sourceMappingURL=helpers.js.map