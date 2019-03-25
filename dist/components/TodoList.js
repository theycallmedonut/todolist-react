"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const TodoListItem_1 = tslib_1.__importDefault(require("./TodoListItem"));
const messages_1 = require("./../messages");
const features_1 = require("./../features");
const userInfo_1 = require("../store/userInfo");
const helpers_1 = require("../helpers");
const routes_1 = require("../routes");
const store_1 = tslib_1.__importDefault(require("../store/store"));
const TodoMessage_1 = require("./TodoMessage");
const react_transition_group_1 = require("react-transition-group");
exports.getTasksList = (page = 1, sort_field = 'id', sort_direction = 'desc') => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const { email } = userInfo_1.defaultUserInfo;
    const pagination = {
        page: page,
        sort_field: sort_field,
        sort_direction: sort_direction,
    };
    const config = helpers_1.initStringData(pagination);
    yield fetch(`${routes_1.routes.getList}/?developer=${email + config}`)
        .then(response => response.json())
        .then(result => {
        const { tasks, total_task_count } = result.message;
        store_1.default.dispatch({ type: 'SET_TASKS_LIST', tasks: tasks });
        store_1.default.dispatch({ type: 'SET_PAGINATION', pagination });
        store_1.default.dispatch({
            type: 'SET_TOTAL_TASKS',
            totalTasks: total_task_count
        });
    })
        .catch(err => {
        console.error(err);
        TodoMessage_1.showMessage(messages_1.errorMessages.serverError);
    });
});
class TodoList extends react_1.default.Component {
    componentWillMount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield exports.getTasksList();
        });
    }
    render() {
        const { tasks, totalTasks } = store_1.default.getState();
        return (totalTasks > 0 ? (react_1.default.createElement("div", { className: "todo-list" },
            tasks.length <= 0 &&
                react_1.default.createElement("b", null, messages_1.errorMessages.emptyList),
            react_1.default.createElement(react_transition_group_1.TransitionGroup, null, tasks.map((task) => (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: task.id, appear: true, exit: false, timeout: 500, classNames: "list-anim" },
                react_1.default.createElement(TodoListItem_1.default, Object.assign({}, task, { refreshList: exports.getTasksList })))))))) : (react_1.default.createElement(features_1.LoadingSpinner, null)));
    }
}
exports.default = TodoList;
//# sourceMappingURL=TodoList.js.map