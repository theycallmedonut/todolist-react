interface iIsLoggedInType {
    type: string;
    isLoggedIn: boolean;
}

export const isLoggedIn = (
    state = false,
    action: iIsLoggedInType
) => {
    switch (action.type) {
        case "TOGGLE_LOGIN":
            return action.isLoggedIn;
        default:
            return state;
    }
}
