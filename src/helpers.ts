import md5 from 'md5';

import {iPagination} from './interfaces'; 

export const initFormData = (args: Object, encode = true) => {
    let data:any = new FormData();
    Object.keys(args).forEach(key => {
        const value = encode 
            ? encodeURIComponent(args[key]) 
            : args[key];

        data.set(key, value)
    });

    const paramsString = new URLSearchParams(data).toString();
    data.set('signature', md5(paramsString));

    return data;
}

export const initStringData = (args: iPagination) => {
    let result = '';
    
    Object.keys(args).forEach(key => {
        result += `&${key}=${args[key]}`;
    });

    return result;
}

export const regexes = {
    url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
}



export const deepFreeze = obj => {
    let props = Object.getOwnPropertyNames(obj);

    props.forEach(name => {
        let prop = obj[name];

        if (typeof prop === 'object' && prop !== null) deepFreeze(prop);
    });

    return Object.freeze(obj);
};