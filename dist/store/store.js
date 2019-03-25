"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const tasks_1 = require("./tasks");
const message_1 = require("./message");
const userInfo_1 = require("./userInfo");
const pagination_1 = require("./pagination");
const isLoggedIn_1 = require("./isLoggedIn");
const totalTasks_1 = require("./totalTasks");
const todoApp = redux_1.combineReducers({
    tasks: tasks_1.tasks, message: message_1.message, userInfo: userInfo_1.userInfo, pagination: pagination_1.pagination, isLoggedIn: isLoggedIn_1.isLoggedIn, totalTasks: totalTasks_1.totalTasks
});
const store = redux_1.createStore(todoApp);
exports.default = store;
//# sourceMappingURL=store.js.map