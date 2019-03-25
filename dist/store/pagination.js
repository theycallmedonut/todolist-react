"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultPagination = {
    page: 1,
    sort_field: 'id',
    sort_direction: 'desc',
};
exports.pagination = (state = defaultPagination, action) => {
    switch (action.type) {
        case "SET_PAGINATION":
            return action.pagination;
        default:
            return state;
    }
};
//# sourceMappingURL=pagination.js.map