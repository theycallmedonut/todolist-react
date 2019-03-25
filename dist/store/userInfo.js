"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserInfo = {
    email: 'theycallmedonut@gmail.com',
    name: 'Guest user',
};
exports.userInfo = (state = Object.assign({}, exports.defaultUserInfo, { email: '' }), action) => {
    switch (action.type) {
        case "SET_USER_INFO":
            return action.userInfo;
        case "SET_DEFAULT_USER_INFO":
            return Object.assign({}, exports.defaultUserInfo, { email: '' });
        default:
            return state;
    }
};
//# sourceMappingURL=userInfo.js.map