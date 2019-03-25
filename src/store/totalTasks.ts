interface iTotalTasks {
    type: string;
    totalTasks: number;
}

export const totalTasks = (state = 0, action: iTotalTasks) => {
    switch (action.type) {

        case 'SET_TOTAL_TASKS':
            return action.totalTasks;
        default:
            return state;
    }
}