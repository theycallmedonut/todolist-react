"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
exports.total = (state = store_1.defaultStore.total, action) => {
    switch (action.type) {
        case 'SET_TOTAL':
            return action.total;
        default:
            return state;
    }
};
//# sourceMappingURL=total.js.map