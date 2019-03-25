"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalTasks = (state = 0, action) => {
    switch (action.type) {
        case 'SET_TOTAL_TASKS':
            return action.totalTasks;
        default:
            return state;
    }
};
//# sourceMappingURL=totalTasks.js.map