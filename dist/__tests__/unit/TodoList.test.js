"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
// import Redux from 'redux';
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoList_1 = tslib_1.__importDefault(require("./../../components/TodoList"));
const TodoListItem_1 = tslib_1.__importDefault(require("./../../components/TodoListItem"));
describe.skip('Todo List', () => {
    let todoList;
    let { tasks, total_task_count } = testsHelper_1.testSuccessRequest.message;
    beforeEach(() => {
        todoList = enzyme_1.shallow(react_1.default.createElement(TodoList_1.default, { tasks: tasks, onEditTodo: () => { } }));
    });
    it('loads blocks properly', () => {
        expect(todoList.hasClass('todo-list')).toBe(true);
    });
    it('renders right count from props', () => {
        expect(todoList.find(TodoListItem_1.default)).toHaveLength(tasks.length);
    });
});
//# sourceMappingURL=TodoList.test.js.map