"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
class TodoListItemTitle extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: this.props.title,
            oldText: this.props.title,
            isEditing: false
        };
        this.onChangeInput = (event) => {
            const text = event.target['value'];
            this.setState({ text: text });
        };
        this.onDetectPressedkey = (event) => {
            event.keyCode === 13
                ? this.onSubmit()
                : event.keyCode === 27
                    ? this.onCancel()
                    : '';
        };
        this.onToggleEditing = (event) => {
            this.setState({ isEditing: !this.state.isEditing });
        };
        this.onCancel = () => {
            this.setState({
                isEditing: false,
                text: this.state.oldText
            });
        };
        this.onSubmit = () => {
            const { text } = this.state;
            this.setState({ isEditing: false, oldText: text });
            this.props.onChangeTitle(text);
        };
    }
    render() {
        const { isEditing, text } = this.state;
        const { isDone, title } = this.props;
        return (react_1.default.createElement("div", { className: "todo-title-changer" },
            isEditing &&
                react_1.default.createElement("div", { className: "todo-title-changer__edit" },
                    react_1.default.createElement("input", { type: "text", className: "todo__input", onKeyUp: (e) => this.onDetectPressedkey(e), onChange: this.onChangeInput, defaultValue: this.state.text }),
                    react_1.default.createElement("div", { className: "todo-title-changer__actions" },
                        react_1.default.createElement("div", { className: "submit", onClick: this.onSubmit },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCheck })),
                        react_1.default.createElement("div", { className: "cancel", onClick: this.onCancel },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })))),
            react_1.default.createElement("div", { className: "todo-list__title", onClick: this.onToggleEditing }, isDone ? react_1.default.createElement("s", null, text) : text)));
    }
}
exports.default = TodoListItemTitle;
//# sourceMappingURL=TodoListItemTitle.js.map