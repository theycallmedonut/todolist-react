"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
// import Redux from 'redux';
const enzyme_1 = require("enzyme");
const TodoCounter_1 = tslib_1.__importDefault(require("./../../components/TodoCounter"));
describe('Todo Counterer', () => {
    let todoCounter;
    let count = 3;
    beforeEach(() => {
        todoCounter = enzyme_1.shallow(react_1.default.createElement(TodoCounter_1.default, { count: count }));
    });
    it('loads blocks properly', () => {
        expect(todoCounter.hasClass('todo-counter')).toBe(true);
        expect(todoCounter.find('.todo-counter__qty')).toHaveLength(1);
    });
    it('renders right count from props', () => {
        expect(todoCounter.find('.todo-counter__qty').text()).toBe(count.toString());
    });
});
//# sourceMappingURL=TodoCounter.test.js.map