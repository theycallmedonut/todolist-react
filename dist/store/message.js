"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = (state = '', action) => {
    switch (action.type) {
        case "SHOW_MESSAGE":
            return action.message;
        default:
            return state;
    }
};
//# sourceMappingURL=message.js.map