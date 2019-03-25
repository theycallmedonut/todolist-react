"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_LOGIN":
            return action.isLoggedIn;
        default:
            return state;
    }
};
//# sourceMappingURL=isLoggedIn.js.map