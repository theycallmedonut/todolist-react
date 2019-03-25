import React from 'react';

import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import {errorMessages} from './../messages'; 

import store from './../store/store';

interface TodoMessageProps {
    message: string;
}

interface TodoMessageState {
    message: string;
    isErrorMessage: boolean;
}

export const showMessage = async (message: string, timeout: number = 2000) => {
    store.dispatch({type: "SHOW_MESSAGE", message})

    await setTimeout( () => 
        store.dispatch({type:'SHOW_MESSAGE', message: ''})
    , timeout);
}

 
class TodoMessage extends React.Component <TodoMessageProps, TodoMessageState> {

    state = {
        message: '',
        isErrorMessage: false,
    }

    componentDidMount(){ 
        const {message} = this.props;
        const isErrorMessage = Object.values(errorMessages).indexOf(message) >= 0;

        this.setState({
            message: this.props.message, 
            isErrorMessage: isErrorMessage
        }) 
    }

    render () {

        const {message, isErrorMessage} = this.state;

        const errorClassName = isErrorMessage 
            ? 'todo__message--warning' 
            : 'todo__message--info';

        const icon = isErrorMessage 
            ? <FontAwesomeIcon icon={faExclamationCircle} />
            : <FontAwesomeIcon icon={faInfoCircle} />
                        

        return(
            <CSSTransition
                in={message.length > 0}
                unmountOnExit
                timeout={500}
                classNames="slide"
                >
                <div className="todo__message-wrap">
                    <div className={'todo__message ' + errorClassName}>
                        <div className="todo__message-icon">{icon}</div>
                        {message} 
                    </div>
                </div>
            </CSSTransition>
        )
    }
};

export default TodoMessage;