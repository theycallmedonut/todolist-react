"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const store_1 = tslib_1.__importDefault(require("./../store/store"));
const TodoList_1 = require("./TodoList");
const TodoPagination = () => {
    const { totalTasks, pagination } = store_1.default.getState();
    const currentPage = pagination.page;
    const totalPages = Math.ceil(totalTasks / 3);
    const createPaginationItems = () => {
        let paginationItems = [];
        const printFrom = currentPage === 1
            ? currentPage : currentPage - 1;
        const printTo = currentPage === totalPages
            ? totalPages : currentPage + 1;
        for (let i = printFrom; i <= printTo; i++) {
            const classname = `todo-pagination__item 
                ${currentPage === i && 'todo-pagination__item--current'}`;
            paginationItems.push(react_1.default.createElement("div", { key: i, className: classname, onClick: () => TodoList_1.getTasksList(i) }, i));
        }
        return paginationItems;
    };
    return (react_1.default.createElement("div", { className: "todo-pagination" }, createPaginationItems()));
};
exports.default = TodoPagination;
//# sourceMappingURL=TodoPagination.js.map