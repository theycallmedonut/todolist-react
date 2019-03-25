"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_transition_group_1 = require("react-transition-group");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const messages_1 = require("./../messages");
const store_1 = tslib_1.__importDefault(require("./../store/store"));
exports.showMessage = (message, timeout = 2000) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    store_1.default.dispatch({ type: "SHOW_MESSAGE", message });
    yield setTimeout(() => store_1.default.dispatch({ type: 'SHOW_MESSAGE', message: '' }), timeout);
});
class TodoMessage extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            message: '',
            isErrorMessage: false,
        };
    }
    componentDidMount() {
        const { message } = this.props;
        const isErrorMessage = Object.values(messages_1.errorMessages).indexOf(message) >= 0;
        this.setState({
            message: this.props.message,
            isErrorMessage: isErrorMessage
        });
    }
    render() {
        const { message, isErrorMessage } = this.state;
        const errorClassName = isErrorMessage
            ? 'todo__message--warning'
            : 'todo__message--info';
        const icon = isErrorMessage
            ? react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationCircle })
            : react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faInfoCircle });
        return (react_1.default.createElement(react_transition_group_1.CSSTransition, { in: message.length > 0, unmountOnExit: true, timeout: 500, classNames: "slide" },
            react_1.default.createElement("div", { className: "todo__message-wrap" },
                react_1.default.createElement("div", { className: 'todo__message ' + errorClassName },
                    react_1.default.createElement("div", { className: "todo__message-icon" }, icon),
                    message))));
    }
}
;
exports.default = TodoMessage;
//# sourceMappingURL=TodoMessage.js.map