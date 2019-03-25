"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.developerInfo = {
    email: 'theycallmedonut@gmail.com',
    name: 'donut',
};
const basicUrl = 'https://uxcandy.com/~shapoval/test-task-backend';
exports.routes = {
    getList: `${basicUrl}`,
    addTodo: `${basicUrl}/create/?developer=${exports.developerInfo.email}`,
    editTodo: `${basicUrl}/edit/`,
};
//# sourceMappingURL=routes.js.map