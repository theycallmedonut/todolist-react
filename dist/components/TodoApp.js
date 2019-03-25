"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
require("./../scss/todoApp.scss");
const TodoAdd_1 = tslib_1.__importDefault(require("./TodoAdd"));
const TodoList_1 = tslib_1.__importDefault(require("./TodoList"));
const TodoCounter_1 = tslib_1.__importDefault(require("./TodoCounter"));
const TodoMessage_1 = tslib_1.__importDefault(require("./TodoMessage"));
const TodoPagination_1 = tslib_1.__importDefault(require("./TodoPagination"));
const TodoLogin_1 = tslib_1.__importDefault(require("./TodoLogin"));
const TodoSorter_1 = tslib_1.__importDefault(require("./TodoSorter"));
const store_1 = tslib_1.__importDefault(require("./../store/store"));
class TodoApp extends react_1.default.Component {
    render() {
        const { message, tasks } = store_1.default.getState();
        return (react_1.default.createElement("div", { className: "todo-app" },
            react_1.default.createElement("h1", null, "Todo App"),
            react_1.default.createElement(TodoLogin_1.default, null),
            message.length > 0 &&
                react_1.default.createElement(TodoMessage_1.default, { message: message }),
            react_1.default.createElement(TodoAdd_1.default, null),
            react_1.default.createElement("div", { className: "todo-content" },
                react_1.default.createElement(TodoSorter_1.default, null),
                react_1.default.createElement(TodoList_1.default, null),
                react_1.default.createElement(TodoPagination_1.default, null),
                react_1.default.createElement(TodoCounter_1.default, null))));
    }
}
exports.default = TodoApp;
//# sourceMappingURL=TodoApp.js.map