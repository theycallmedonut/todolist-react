import {iTodoListItem} from './../interfaces';

interface iAction {
    type: string;
    tasks: iTodoListItem[];
}

const defaultTasks: any = {
    tasks: []
}

export const tasks = (state = defaultTasks, action: iAction) => {
    switch (action.type) {
        
        case 'SET_TASKS_LIST':
            return action.tasks;
        
        default:
            return state;
    }
};
