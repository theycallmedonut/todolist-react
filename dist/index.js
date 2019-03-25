"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_dom_1 = tslib_1.__importDefault(require("react-dom"));
const TodoApp_1 = tslib_1.__importDefault(require("./components/TodoApp"));
const store_1 = tslib_1.__importDefault(require("./store/store"));
const render = () => {
    react_dom_1.default.render(react_1.default.createElement(TodoApp_1.default, null), document.getElementById('todo-app'));
};
store_1.default.subscribe(render);
render();
//# sourceMappingURL=index.js.map