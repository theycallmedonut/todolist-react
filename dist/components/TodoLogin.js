"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_transition_group_1 = require("react-transition-group");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const store_1 = tslib_1.__importDefault(require("./../store/store"));
const messages_1 = require("./../messages");
const TodoLoginMessage_1 = tslib_1.__importDefault(require("./TodoLoginMessage"));
const TodoMessage_1 = require("./TodoMessage");
const defaultState = {
    isDefaultState: true,
    isVisibleForm: false,
    isWrongCredentials: true,
    isEmptyInputs: false,
    loading: false,
    inputs: {
        username: '',
        password: '',
    },
};
const correctCredentials = {
    username: 'username',
    password: 'password',
};
class TodoLogin extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = defaultState;
        this.toggleLoginForm = () => {
            const { isVisibleForm } = this.state;
            this.setState({ isVisibleForm: !isVisibleForm });
        };
        this.setLoading = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.setState({ loading: true });
            yield setTimeout(() => this.setState({ loading: false }), 2500);
        });
        this.isCorrectCredentialsCheck = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { inputs } = this.state;
            const result = correctCredentials.password !== inputs.password;
            yield this.setState({ isWrongCredentials: result });
            return result;
        });
        this.isNotAllInputsFilledCheck = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { inputs } = this.state;
            const result = inputs.username.length === 0
                || inputs.password.length === 0;
            yield this.setState({ isEmptyInputs: result });
            return result;
        });
        this.onChangeInput = (event, type) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inputValue = event.target['value'];
            const { inputs } = this.state;
            const newInputs = Object.assign({}, inputs);
            newInputs[type] = inputValue;
            this.setState({ inputs: newInputs, isDefaultState: false });
            yield this.isNotAllInputsFilledCheck();
            yield this.setLoading();
            this.isCorrectCredentialsCheck();
        });
        this.onLogin = () => {
            const { inputs } = this.state;
            const { isLoggedIn, userInfo } = store_1.default.getState();
            userInfo['name'] = inputs.username;
            this.setState({
                isVisibleForm: false,
                inputs: defaultState.inputs
            });
            store_1.default.dispatch({ type: 'TOGGLE_LOGIN', isLoggedIn: !isLoggedIn });
            store_1.default.dispatch({ type: 'SET_USER_INFO', userInfo });
            TodoMessage_1.showMessage(messages_1.successMessages.userLoggedIn);
        };
        this.onLogout = () => {
            const { isLoggedIn, userInfo } = store_1.default.getState();
            store_1.default.dispatch({ type: 'TOGGLE_LOGIN', isLoggedIn: !isLoggedIn });
            store_1.default.dispatch({ type: 'SET_DEFAULT_USER_INFO', userInfo });
            TodoMessage_1.showMessage(messages_1.successMessages.userLoggedOut);
        };
    }
    render() {
        const { isVisibleForm, isWrongCredentials, isEmptyInputs, isDefaultState } = this.state;
        const { isLoggedIn, userInfo } = store_1.default.getState();
        const mainButtonClassName = isWrongCredentials || isEmptyInputs
            ? "todo__button--disabled" : "todo__button--primary";
        return (react_1.default.createElement("div", { className: "todo-login" },
            !isLoggedIn && isVisibleForm &&
                react_1.default.createElement(react_transition_group_1.CSSTransition, { appear: true, enter: true, timeout: 500, classNames: "fade" },
                    react_1.default.createElement("div", { className: "todo-login__form" },
                        react_1.default.createElement("button", { className: "todo-login__button--close", onClick: this.toggleLoginForm },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })),
                        Object.keys(correctCredentials).map(key => react_1.default.createElement("input", { type: "text", key: key, placeholder: key, defaultValue: key, className: `todo__input todo-login__${key}`, onChange: (event) => this.onChangeInput(event, key) })),
                        react_1.default.createElement("div", { className: "todo-login__footer" },
                            !isDefaultState &&
                                react_1.default.createElement(TodoLoginMessage_1.default, Object.assign({}, this.state)),
                            react_1.default.createElement("button", { className: `todo-login__button ${mainButtonClassName}`, disabled: isWrongCredentials || isEmptyInputs, onClick: this.onLogin }, "Login")))),
            react_1.default.createElement("div", { className: "todo-login__userinfo" },
                react_1.default.createElement("b", null, userInfo.name),
                react_1.default.createElement("p", null, userInfo.email)),
            react_1.default.createElement("button", { className: "todo-login__button todo-login__button--bald", onClick: isLoggedIn && !isVisibleForm ? this.onLogout : this.toggleLoginForm },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: isLoggedIn ? free_solid_svg_icons_1.faUnlockAlt : free_solid_svg_icons_1.faLock }))));
    }
}
;
exports.default = TodoLogin;
//# sourceMappingURL=TodoLogin.js.map