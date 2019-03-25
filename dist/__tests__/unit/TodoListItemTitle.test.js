"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoListItemTitle_1 = tslib_1.__importDefault(require("./../../components/TodoListItemTitle"));
describe('Todo List Item Title', () => {
    let todoListItemTitle;
    beforeEach(() => {
        todoListItemTitle = enzyme_1.shallow(react_1.default.createElement(TodoListItemTitle_1.default, { onChangeTitle: () => { }, title: testsHelper_1.testText, isDone: false }));
    });
    it('loads blocks properly', () => {
        expect(todoListItemTitle.hasClass('todo-title-changer')).toBe(true);
    });
    it('toggles editing by click', () => {
        todoListItemTitle.find('.todo-list__title').simulate('click');
        expect(todoListItemTitle.find('.todo-title-changer__edit')).toHaveLength(1);
        todoListItemTitle.find('.todo-title-changer__actions').find('.submit').simulate('click');
        expect(todoListItemTitle.find('.todo__input')).toHaveLength(0);
        expect(todoListItemTitle.find('.todo-title-changer__actions').find('.submit')).toHaveLength(0);
    });
    it('adds event target to state', () => {
        todoListItemTitle.find('.todo-list__title').simulate('click');
        todoListItemTitle.find('.todo__input').simulate('change', { target: { value: testsHelper_1.testText + '1' } });
        todoListItemTitle.find('.submit').simulate('click');
        expect(todoListItemTitle.state()['text']).toBe(testsHelper_1.testText + '1');
    });
});
//# sourceMappingURL=TodoListItemTitle.test.js.map