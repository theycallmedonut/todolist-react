"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoPagination_1 = tslib_1.__importDefault(require("./../../components/TodoPagination"));
describe('Todo Pagination', () => {
    let todoPagination;
    const { tasks } = testsHelper_1.testSuccessRequest.message;
    const totalPages = Math.ceil(tasks.length / 2);
    beforeEach(() => {
        todoPagination = enzyme_1.shallow(react_1.default.createElement(TodoPagination_1.default, { totalTasks: tasks.length, currentPage: 1, onPaginationClick: () => { } }));
    });
    it('loads blocks properly', () => {
        expect(todoPagination.hasClass('todo-pagination')).toBe(true);
        expect(todoPagination.find('.todo-pagination__item--current')).toHaveLength(1);
    });
    it('renders right count from props', () => {
        expect(todoPagination.find('.todo-pagination__item')).toHaveLength(totalPages - 1);
    });
    it('actions by click on page', () => {
        let count = 0;
        const onPaginationClick = () => count++;
        todoPagination = enzyme_1.shallow(react_1.default.createElement(TodoPagination_1.default, { totalTasks: tasks.length, currentPage: 1, onPaginationClick: () => count++ }));
        todoPagination.find('.todo-pagination__item').at(1).simulate('click');
        expect(count).toBe(1);
    });
});
//# sourceMappingURL=TodoPagination.test.js.map