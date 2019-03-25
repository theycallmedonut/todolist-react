"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
// import Redux from 'redux';
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoListItem_1 = tslib_1.__importDefault(require("./../../components/TodoListItem"));
const TodoListItemTitle_1 = tslib_1.__importDefault(require("./../../components/TodoListItemTitle"));
describe('Todo List', () => {
    let todoListItem;
    let task = testsHelper_1.testSuccessRequest.message.tasks[0];
    beforeEach(() => {
        todoListItem = enzyme_1.shallow(react_1.default.createElement(TodoListItem_1.default, Object.assign({}, task, { onEditTodo: () => { } })));
    });
    it('loads blocks properly', () => {
        expect(todoListItem.hasClass('todo-list__item')).toBe(true);
        expect(todoListItem.find(TodoListItemTitle_1.default)).toHaveLength(1);
    });
    it('renders right count from props', () => {
        expect(todoListItem.find('.todo-list__email').text()).toBe(task.email);
        expect(todoListItem.find('.todo-list__username').text()).toBe(task.username);
    });
    it.skip('moves task to done by click', () => {
        let count = 0;
        todoListItem = enzyme_1.shallow(react_1.default.createElement(TodoListItem_1.default, Object.assign({}, task, { onEditTodo: () => { count++; } })));
        todoListItem.find('.todo-list__title').simulate('click');
        expect(count).toBe(1);
    });
});
//# sourceMappingURL=TodoListItem.test.js.map