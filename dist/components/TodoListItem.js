"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const TodoListItemTitle_1 = tslib_1.__importDefault(require("./TodoListItemTitle"));
const store_1 = tslib_1.__importDefault(require("./../store/store"));
const userInfo_1 = require("./../store/userInfo");
const helpers_1 = require("../helpers");
const routes_1 = require("../routes");
const TodoMessage_1 = require("./TodoMessage");
const messages_1 = require("../messages");
class TodoListItem extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: decodeURIComponent(this.props.text),
        };
        this.onCheckboxClick = () => {
            const { id, status } = this.props;
            const { text } = this.state;
            const reversedStatus = status == '0' ? '10' : '0';
            this.onEditTodo(id, reversedStatus, text);
        };
        this.onChangeTitle = (text) => {
            const { id, status } = this.props;
            this.onEditTodo(id, String(status), text);
        };
        this.onEditTodo = (id, status, text) => {
            const { pagination, isLoggedIn } = store_1.default.getState();
            const { page, sort_field, sort_direction } = pagination;
            const token = 'beejee';
            const url = routes_1.routes.editTodo +
                `${id}?developer=${userInfo_1.defaultUserInfo.email}`;
            const data = helpers_1.initFormData({ status, text, token });
            if (!isLoggedIn) {
                TodoMessage_1.showMessage(messages_1.errorMessages.notLoggedIn);
                return;
            }
            fetch(url, { method: "POST", body: data,
            }).then(response => {
                TodoMessage_1.showMessage(messages_1.successMessages.todoEdited);
                this.props.refreshList(page, sort_field, sort_direction);
            }).catch(error => {
                console.log(error.message);
                TodoMessage_1.showMessage(messages_1.errorMessages.serverError);
            });
        };
    }
    render() {
        const { email, username, status } = this.props;
        const { text } = this.state;
        const isDone = status == '10';
        return (react_1.default.createElement("div", { className: "todo-list__item" },
            react_1.default.createElement("div", { className: "todo-list__username" }, username),
            react_1.default.createElement("div", { className: "todo-list__email" }, email),
            react_1.default.createElement("div", { className: "todo-list__desc" },
                react_1.default.createElement("div", { className: "todo-list__checkbox", onClick: this.onCheckboxClick }, isDone &&
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCheck })),
                react_1.default.createElement(TodoListItemTitle_1.default, { onChangeTitle: this.onChangeTitle, title: text, isDone: isDone }))));
    }
}
exports.default = TodoListItem;
//# sourceMappingURL=TodoListItem.js.map