"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const store_1 = tslib_1.__importDefault(require("./../store/store"));
const TodoCounter = () => {
    const count = store_1.default.getState().totalTasks;
    return (react_1.default.createElement("div", { className: "todo-counter" },
        "Total tasks is:\u00A0",
        react_1.default.createElement("b", { className: "todo-counter__qty" }, count)));
};
exports.default = TodoCounter;
//# sourceMappingURL=TodoCounter.js.map