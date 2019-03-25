import {iUserInfo} from '../interfaces';

interface iUserInfoType {
    type: string;
    userInfo: iUserInfo;
}

export const defaultUserInfo = {
    email: 'theycallmedonut@gmail.com',
    name: 'Guest user',
}

export const userInfo = (state = { ...defaultUserInfo, email: '' }, action:iUserInfoType) => {
    switch (action.type) {
        case "SET_USER_INFO":
            return action.userInfo;
        case "SET_DEFAULT_USER_INFO":
            return {...defaultUserInfo, email: ''};
        default:
            return state;
    }
};


