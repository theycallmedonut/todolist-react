"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const messages_1 = require("./../messages");
const helpers_1 = require("./../helpers");
const store_1 = tslib_1.__importDefault(require("./../store/store"));
const routes_1 = require("./../routes");
const messages_2 = require("../messages");
const TodoMessage_1 = require("./TodoMessage");
const TodoList_1 = require("./TodoList");
class TodoAdd extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            email: '',
            isWrongEmail: false,
            isWrongName: false,
        };
        this.isWrongName = () => {
            const { name } = this.state;
            const isWrongName = name.length === 0;
            isWrongName && TodoMessage_1.showMessage(messages_1.errorMessages.emptyTitle);
            this.setState({ isWrongName });
            return isWrongName;
        };
        this.isWrongEmail = () => {
            const { email } = this.state;
            const isWrongEmail = !helpers_1.regexes.email.test(email);
            isWrongEmail && TodoMessage_1.showMessage(messages_1.errorMessages.wrongEmail);
            this.setState({ isWrongEmail });
            return isWrongEmail;
        };
        this.onChangeInput = (event) => {
            this.setState({ name: event.target['value'] });
        };
        this.onChangeEmail = (event) => {
            this.setState({ email: event.target['value'].toLowerCase() });
        };
        this.onSetEmail = () => {
            const { userInfo } = store_1.default.getState();
            userInfo.email = this.state.email;
            store_1.default.dispatch({ type: 'SET_USER_INFO', userInfo });
        };
        this.onSubmitNewTodo = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { name, email } = this.state;
            const { isLoggedIn } = store_1.default.getState();
            if (this.isWrongEmail() || this.isWrongName())
                return;
            if (!isLoggedIn) {
                TodoMessage_1.showMessage(messages_1.errorMessages.notLoggedIn);
                return;
            }
            yield this.onSetEmail();
            yield this.onAddTodo(name, email);
            this.setState({ name: '' });
        });
        this.onAddTodo = (title, email) => {
            const { userInfo, pagination } = store_1.default.getState();
            const config = {
                method: 'POST',
                body: helpers_1.initFormData({
                    username: userInfo.name,
                    email: email,
                    text: encodeURIComponent(title),
                }, false)
            };
            fetch(routes_1.routes.addTodo, config)
                .then(response => { return response.json(); })
                .then(result => {
                TodoList_1.getTasksList(pagination.page);
                TodoMessage_1.showMessage(messages_2.successMessages.todoAdded);
            })
                .catch(err => {
                console.error(err);
                TodoMessage_1.showMessage(messages_1.errorMessages.serverError);
            });
        };
    }
    componentDidMount() {
        const { email } = store_1.default.getState().userInfo;
        this.setState({ email });
    }
    render() {
        let { name, email, isWrongEmail, isWrongName } = this.state;
        return (react_1.default.createElement("div", { className: "todo-add" },
            react_1.default.createElement("input", { type: "text", className: `todo__input todo-add__input ${isWrongEmail && 'todo__input--error'}`, placeholder: "Your email", defaultValue: email, onChange: this.onChangeEmail }),
            react_1.default.createElement("input", { type: "text", className: `todo__input todo-add__input ${isWrongName && 'todo__input--error'}`, placeholder: "New todo name..", value: name, onChange: this.onChangeInput }),
            react_1.default.createElement("button", { className: "todo-add__button", onClick: this.onSubmitNewTodo },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlus }))));
    }
}
;
exports.default = TodoAdd;
//# sourceMappingURL=TodoAdd.js.map