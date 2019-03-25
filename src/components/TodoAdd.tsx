import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {errorMessages} from './../messages';

import { initFormData, regexes } from './../helpers';

import store from './../store/store';
import { routes } from './../routes';
import { successMessages } from '../messages';

import { showMessage } from './TodoMessage';
import { getTasksList } from './TodoList';


interface TodoAddProps {}

interface TodoAddState {
    name: string;
    email: string;
    isWrongEmail: boolean;
    isWrongName: boolean; 
}

class TodoAdd extends React.Component<TodoAddProps, TodoAddState> {

    state = {
        name: '',
        email: '',
        isWrongEmail: false,
        isWrongName: false,
    }

    componentDidMount(){
        const {email} = store.getState().userInfo;
        this.setState({email});
    }

    isWrongName = () => {
        const {name} = this.state;
        const isWrongName = name.length === 0;
        
        isWrongName && showMessage(errorMessages.emptyTitle);

        this.setState({isWrongName})

        return isWrongName;
    }

    isWrongEmail = () => {
        const { email } = this.state;
        const isWrongEmail = !regexes.email.test(email);

        isWrongEmail && showMessage(errorMessages.wrongEmail);
        
        this.setState({ isWrongEmail })

        return isWrongEmail;
    }

    onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: event.target['value']});
    }

    onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target['value'].toLowerCase()});
    }

    onSetEmail = () => {
        const {userInfo} = store.getState();
        userInfo.email = this.state.email;

        store.dispatch({ type: 'SET_USER_INFO', userInfo })
    }

    onSubmitNewTodo = async () => {
        const {name, email} = this.state;
        const {isLoggedIn} = store.getState();
    
        if(this.isWrongEmail() || this.isWrongName()) return;
        if(!isLoggedIn) { 
            showMessage(errorMessages.notLoggedIn);
            return;
        }

        await this.onSetEmail()
        await this.onAddTodo(name, email)
        this.setState({name: ''});
    }

    onAddTodo = (title: string, email: string) => {
        const { userInfo, pagination } = store.getState();
        const config = {
            method: 'POST',
            body: initFormData({
                username: userInfo.name,
                email: email,
                text: encodeURIComponent(title),
            }, false)
        }

        fetch(routes.addTodo, config)
            .then(response => { return response.json() })
            .then(result => {
                getTasksList(pagination.page);
                showMessage(successMessages.todoAdded);
            })
            .catch(err => {
                console.error(err)
                showMessage(errorMessages.serverError)
            });
    }

    render() {
        let {name, email, isWrongEmail, isWrongName} = this.state;

        return (
            <div className="todo-add">
                <input type="text" 
                    className={`todo__input todo-add__input ${isWrongEmail && 'todo__input--error'}`} 
                    placeholder="Your email"
                    defaultValue={email}
                    onChange={this.onChangeEmail}
                />
                <input type="text" 
                    className={`todo__input todo-add__input ${isWrongName && 'todo__input--error'}`} 
                    placeholder="New todo name.."
                    value={name}
                    onChange={this.onChangeInput}
                />
                <button className="todo-add__button" 
                    onClick={this.onSubmitNewTodo}
                ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        )
    }
};

export default TodoAdd;