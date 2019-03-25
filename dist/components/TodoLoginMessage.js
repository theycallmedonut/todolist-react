"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const messages_1 = require("./../messages");
const features_1 = require("./../features");
const TodoLoginMessage = ({ isWrongCredentials, loading, isEmptyInputs, }) => (react_1.default.createElement("div", { className: "todo-login__message" }, loading ?
    react_1.default.createElement(features_1.LoadingSpinner, null)
    :
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", null, isEmptyInputs && messages_1.errorMessages.notFilledInputs),
            react_1.default.createElement("div", null, isWrongCredentials && messages_1.errorMessages.wrongPassword))));
exports.default = TodoLoginMessage;
//# sourceMappingURL=TodoLoginMessage.js.map