"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const testsHelper_1 = require("./../../testsHelper");
const TodoLogin_1 = tslib_1.__importDefault(require("./../../components/TodoLogin"));
describe('Todo Login', () => {
    let todoLogin;
    const loginProps = {
        username: 'username',
        password: 'password',
    };
    const userInfo = { email: 'email', name: 'name' };
    beforeEach(() => {
        todoLogin = enzyme_1.shallow(react_1.default.createElement(TodoLogin_1.default, { credentials: loginProps, onLogin: () => { }, isLoggedIn: false, userInfo: userInfo }));
    });
    it('loads blocks properly', () => {
        expect(todoLogin.hasClass('todo-login')).toBe(true);
        expect(todoLogin.find('.todo-login__button')).toHaveLength(1);
    });
    it('show form by click on the button', () => {
        todoLogin.find('.todo-login__button').simulate('click');
        expect(todoLogin.find('.todo-login__form')).toHaveLength(1);
    });
    it('shows errors message if login/pass are wrong', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        todoLogin.find('.todo-login__button').simulate('click');
        todoLogin.find('.todo-login__username').simulate('change', { target: { value: testsHelper_1.testText } });
        todoLogin.find('.todo-login__password').simulate('change', { target: { value: testsHelper_1.testText } });
        expect(todoLogin.find('.todo-login__message')).toHaveLength(1);
    }));
});
//# sourceMappingURL=TodoLogin.test.js.map