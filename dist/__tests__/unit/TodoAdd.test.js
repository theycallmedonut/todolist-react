"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
// import Redux from 'redux';
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoAdd_1 = tslib_1.__importDefault(require("./../../components/TodoAdd"));
describe('Todo Add form', () => {
    let todoAdd;
    let dummyFunction = (testText) => { };
    beforeEach(() => {
        todoAdd = enzyme_1.shallow(react_1.default.createElement(TodoAdd_1.default, { onAddTodo: dummyFunction, email: testsHelper_1.testText, onSetEmail: () => { }, showMessage: () => { } }));
    });
    it('loads blocks properly', () => {
        expect(todoAdd.hasClass('todo-add')).toBe(true);
        expect(todoAdd.find('.todo-add__input')).toHaveLength(1);
        expect(todoAdd.find('.todo-add__button')).toHaveLength(1);
    });
    it('renders right count from props', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        let count = 0;
        todoAdd = enzyme_1.shallow(react_1.default.createElement(TodoAdd_1.default, { onAddTodo: (testText) => { count++; }, email: testsHelper_1.testText, onSetEmail: () => { }, showMessage: () => { } }));
        todoAdd.find('.todo-add__input').simulate('change', { target: { value: testsHelper_1.testText } });
        todoAdd.find('.todo-add__button').simulate('click');
        expect(todoAdd.find('.todo-add__input').text()).toHaveLength(0);
        expect(todoAdd.state('name')).toHaveLength(0);
        expect(count).toBe(1);
    }));
});
//# sourceMappingURL=TodoAdd.test.js.map