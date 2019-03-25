import React from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlockAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import store from './../store/store';
import {successMessages} from './../messages';

import TodoLoginMessage from './TodoLoginMessage';
import {showMessage} from './TodoMessage';

interface TodoLoginProps {
    
}
export interface TodoLoginState {
    isDefaultState: boolean;
    isVisibleForm: boolean;
    isWrongCredentials: boolean;
    loading: boolean;
    inputs: {
        username: string;
        password: string;
    },
    isEmptyInputs: boolean;
}

const defaultState:TodoLoginState = {
    isDefaultState: true,
    isVisibleForm: false,
    isWrongCredentials: true,
    isEmptyInputs: false,
    loading: false,
    inputs: {
        username: '',
        password: '',
    },
}


const correctCredentials = {
    username: 'username',
    password: 'password',
}

class TodoLogin extends React.Component<TodoLoginProps, TodoLoginState> {

    state = defaultState;

    toggleLoginForm = () => {
        const {isVisibleForm} = this.state;
        this.setState({isVisibleForm: !isVisibleForm}); 
    }

    setLoading = async () => {
        await this.setState({loading: true});
        await setTimeout(() => this.setState({loading: false}), 2500);
    }

    isCorrectCredentialsCheck = async () => {
        const {inputs} = this.state;
        const result = 
            correctCredentials.password !== inputs.password;

        await this.setState({ isWrongCredentials: result });
        return result;
    }

    isNotAllInputsFilledCheck = async () => {
        const {inputs} = this.state;
        const result = 
            inputs.username.length === 0 
            || inputs.password.length === 0;

        await this.setState({isEmptyInputs: result});
        return result;
    }

    onChangeInput = async (event: React.ChangeEvent<HTMLInputElement>, type: string)  => {
        const inputValue = event.target['value'];
        const {inputs} = this.state;
        const newInputs = Object.assign({}, inputs);

        newInputs[type] = inputValue;
        this.setState({inputs: newInputs, isDefaultState: false});

        await this.isNotAllInputsFilledCheck();
        await this.setLoading();
        this.isCorrectCredentialsCheck();
    }

    onLogin = () => {
        const {inputs} = this.state;
        const { isLoggedIn, userInfo } = store.getState();
        
        userInfo['name'] = inputs.username;

        this.setState({ 
            isVisibleForm: false, 
            inputs: defaultState.inputs
        });
        store.dispatch({ type: 'TOGGLE_LOGIN', isLoggedIn: !isLoggedIn });
        store.dispatch({ type: 'SET_USER_INFO', userInfo });

        showMessage(successMessages.userLoggedIn);
    }

    onLogout = () => {
        const { isLoggedIn, userInfo } = store.getState();

        store.dispatch({ type: 'TOGGLE_LOGIN', isLoggedIn: !isLoggedIn });
        store.dispatch({ type: 'SET_DEFAULT_USER_INFO', userInfo });
        
        showMessage(successMessages.userLoggedOut);
    }



    render() {
        const {
            isVisibleForm, isWrongCredentials, 
            isEmptyInputs, isDefaultState
        } = this.state;
        const {isLoggedIn, userInfo} = store.getState();

        const mainButtonClassName = isWrongCredentials || isEmptyInputs 
            ? "todo__button--disabled" : "todo__button--primary";

        return (
            <div className="todo-login">
                {!isLoggedIn && isVisibleForm &&
                    <CSSTransition
                        appear={true}
                        enter={true}
                        timeout={500}
                        classNames="fade"
                    >
                    <div className="todo-login__form">

                        <button className="todo-login__button--close" 
                            onClick={this.toggleLoginForm}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        {Object.keys(correctCredentials).map(key => 
                            <input type="text" key={key} 
                                placeholder={key}
                                defaultValue={key}
                                className={`todo__input todo-login__${key}`}
                                onChange={ (event) => this.onChangeInput(event, key) } 
                            />
                        )}

                        <div className="todo-login__footer">
                            {!isDefaultState && 
                                <TodoLoginMessage {...this.state} />
                            }

                            <button className={`todo-login__button ${mainButtonClassName}`}
                                disabled={isWrongCredentials || isEmptyInputs}
                                onClick={this.onLogin}
                            >Login</button>
                        </div>

                    </div>
                    </CSSTransition>
                }
                
                <div className="todo-login__userinfo">
                    <b>{userInfo.name}</b> 
                    <p>{userInfo.email}</p>
                </div>

                <button className="todo-login__button todo-login__button--bald" onClick={isLoggedIn && !isVisibleForm ? this.onLogout : this.toggleLoginForm} >
                    <FontAwesomeIcon icon={isLoggedIn ? faUnlockAlt: faLock} />
                </button>
            </div>
        )
    }
};

export default TodoLogin;