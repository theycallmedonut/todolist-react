"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
// import Redux from 'redux';
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoMessage_1 = tslib_1.__importDefault(require("./../../components/TodoMessage"));
const messages_1 = require("./../../messages");
describe('Todo Message', () => {
    let todoMessage;
    beforeEach(() => {
        todoMessage = enzyme_1.shallow(react_1.default.createElement(TodoMessage_1.default, { message: testsHelper_1.testText }));
    });
    it('loads blocks properly', () => {
        expect(todoMessage.find('.todo__message')).toHaveLength(1);
        expect(todoMessage.find('.todo__message-icon')).toHaveLength(1);
    });
    it('renders correct message from props', () => {
        expect(todoMessage.find('.todo__message').text()).toContain(testsHelper_1.testText);
    });
    it('filters a message type', () => {
        expect(todoMessage.find('.todo__message--info')).toHaveLength(1);
        todoMessage = enzyme_1.shallow(react_1.default.createElement(TodoMessage_1.default, { message: messages_1.errorMessages.defaultError }));
        expect(todoMessage.find('.todo__message--warning')).toHaveLength(1);
    });
});
//# sourceMappingURL=TodoMessage.test.js.map