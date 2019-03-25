"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultTasks = {
    tasks: []
};
exports.tasks = (state = defaultTasks, action) => {
    switch (action.type) {
        case 'SET_TASKS_LIST':
            return action.tasks;
        default:
            return state;
    }
};
//# sourceMappingURL=tasks.js.map