"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
require("./scss/_features.scss");
exports.LoadingSpinner = () => (react_1.default.createElement("div", { className: "loading_spinner-wrap" },
    react_1.default.createElement("svg", { className: "loading_spinner", width: "60", height: "20", viewBox: "0 0 60 20", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "7", cy: "15", r: "4" }),
        react_1.default.createElement("circle", { cx: "30", cy: "15", r: "4" }),
        react_1.default.createElement("circle", { cx: "53", cy: "15", r: "4" }))));
//# sourceMappingURL=features.js.map