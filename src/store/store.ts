import { createStore, combineReducers } from "redux";

import {tasks} from "./tasks";
import {message} from "./message";
import {userInfo} from "./userInfo";
import {pagination} from "./pagination";
import {isLoggedIn} from "./isLoggedIn";
import {totalTasks} from "./totalTasks";

import { iTodoListItem } from 'src/interfaces';
import { iPagination, iUserInfo } from '../interfaces';
import { deepFreeze } from './../helpers';


interface iStore {
    tasks: iTodoListItem[];
    totalTasks: number;
    message: string;
    pagination: iPagination;
    isLoggedIn: boolean;
    userInfo: iUserInfo;
}



const todoApp = combineReducers({
    tasks, message, userInfo, pagination, isLoggedIn, totalTasks
});
 
const store = createStore(todoApp); 

export default store;

