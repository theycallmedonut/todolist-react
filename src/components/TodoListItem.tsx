import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import TodoListItemTitle from './TodoListItemTitle';

import {iPagination, iTodoListItem} from './../interfaces';

import store from './../store/store';
import {defaultUserInfo} from './../store/userInfo'; 
import { initFormData } from '../helpers';
import { routes } from '../routes';
import { showMessage } from './TodoMessage';
import { errorMessages, successMessages } from '../messages';


interface TodoListItemProps {
    id: number,
    username: string,
    email: string,
    text: string,
    status: string | number,
    refreshList: (
        page: number, 
        sort_field: string, 
        sort_direction: string
    ) => void;
}

interface TodoListItemState {
    text: string;
}

class TodoListItem extends React.Component <TodoListItemProps, TodoListItemState> {

    state = {
        text: decodeURIComponent(this.props.text),
    }


    onCheckboxClick = () => {
        const {id, status} = this.props;
        const {text} = this.state;
        const reversedStatus = status == '0' ? '10' : '0';

        this.onEditTodo(id, reversedStatus, text);
    }

    onChangeTitle = (text: string) => {
        const {id, status} = this.props;
        this.onEditTodo(id, String(status), text);
    }


    onEditTodo = (id:number, status: string, text: string) => {
        const {pagination, isLoggedIn} = store.getState(); 
        const {page, sort_field, sort_direction} = pagination; 
        const token = 'beejee';
        const url = routes.editTodo + 
            `${id}?developer=${defaultUserInfo.email}`;

        const data = initFormData({status, text, token});

        if(!isLoggedIn) {
            showMessage(errorMessages.notLoggedIn);
            return;
        }

        fetch(url, { method: "POST", body: data,
            //   headers: {"Content-Type": "multipart/form-data"}
            }).then(response => { 
                showMessage(successMessages.todoEdited)
                this.props.refreshList(page, sort_field, sort_direction);
            }).catch(error => {
                console.log(error.message)
                showMessage(errorMessages.serverError);
        })
    }

    render () {

        const {email, username, status} = this.props;
        const {text} = this.state;

        const isDone = status == '10';

        return (
                <div className="todo-list__item">
                    <div className="todo-list__username">{username}</div>
                    <div className="todo-list__email">{email}</div>
                    
                    <div className="todo-list__desc">
                        <div className="todo-list__checkbox" 
                            onClick={this.onCheckboxClick}>
                            {isDone && 
                                <FontAwesomeIcon icon={faCheck} />
                            }
                        </div> 

                        <TodoListItemTitle 
                            onChangeTitle={this.onChangeTitle} 
                            title={text} 
                            isDone={isDone}
                        />

                    </div>
                </div>
        )
    }
}

export default TodoListItem;