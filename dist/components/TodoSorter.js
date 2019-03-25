"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const messages_1 = require("./../messages");
const TodoMessage_1 = require("./TodoMessage");
const store_1 = tslib_1.__importDefault(require("./../store/store"));
const TodoList_1 = require("./TodoList");
const TodoSorter = () => {
    const { page, sort_field, sort_direction } = store_1.default.getState().pagination;
    const todoSorterTypes = ['id', 'username', 'email', 'status'];
    const onChangeDirection = () => {
        const direction = sort_direction === 'asc' ? 'desc' : 'asc';
        TodoList_1.getTasksList(page, sort_field, direction);
        TodoMessage_1.showMessage(messages_1.successMessages.todoListSorted);
    };
    const onChangeType = (event) => {
        const { value } = event.target;
        TodoList_1.getTasksList(page, value, sort_direction);
        TodoMessage_1.showMessage(messages_1.successMessages.todoListSorted);
    };
    return (react_1.default.createElement("div", { className: "todo-sorter" },
        react_1.default.createElement("label", null, "Sort by:"),
        react_1.default.createElement("select", { className: "todo-sorter__type", onChange: onChangeType },
            react_1.default.createElement("option", null, "-- default --"),
            todoSorterTypes.map(type => react_1.default.createElement("option", { key: type }, type))),
        react_1.default.createElement("a", { className: "todo-sorter__direction", onClick: onChangeDirection }, sort_direction === 'asc'
            ? react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSortAlphaDown })
            : react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSortAlphaUp }))));
};
exports.default = TodoSorter;
//# sourceMappingURL=TodoSorter.js.map