interface iAction {
    type: string;
    message: string;
}

export const message = (state = '', action:iAction) => {
    switch (action.type) { 
        case "SHOW_MESSAGE":
            return action.message;
        default :
            return state;
    }
};