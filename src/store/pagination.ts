interface iAction {
    type: string;
    pagination: {
        page: number;
        sort_field: string;
        sort_direction: string;
    }
}

const defaultPagination = {
    page: 1,
    sort_field: 'id',
    sort_direction: 'desc',
}

export const pagination = (state = defaultPagination, action:iAction) => {
    switch (action.type) {
        case "SET_PAGINATION":
            return action.pagination;
        default:
            return state;
    }
};
