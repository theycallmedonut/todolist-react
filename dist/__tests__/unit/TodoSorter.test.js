"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoSorter_1 = tslib_1.__importDefault(require("./../../components/TodoSorter"));
describe('Todo Sorter', () => {
    let todoSorter;
    const onSort = (page, sort_field, sort_direction) => { };
    const pagination = {
        page: 1,
        sort_field: 'id',
        sort_direction: 'asc',
    };
    beforeEach(() => {
        todoSorter = enzyme_1.shallow(react_1.default.createElement(TodoSorter_1.default, { onSort: onSort, pagination: pagination, showMessage: (testText) => { } }));
    });
    it('loads blocks properly', () => {
        expect(todoSorter.hasClass('todo-sorter')).toBe(true);
        expect(todoSorter.find('.todo-sorter__type')).toHaveLength(1);
        expect(todoSorter.find('.todo-sorter__direction')).toHaveLength(1);
    });
    it.skip('renders right count from props', () => {
        expect(todoSorter.find('.todo-sorter').text()).toBe(testsHelper_1.testText);
    });
});
//# sourceMappingURL=TodoSorter.test.js.map