import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface TodoListItemTitleProps {
    onChangeTitle: (text: string) => void;
    title: string;
    isDone: boolean;
}
interface TodoListItemTitleState {
    text: string;
    oldText: string;
    isEditing: boolean;
}

class TodoListItemTitle extends React.Component<TodoListItemTitleProps, TodoListItemTitleState> {

    state = {
        text: this.props.title,
        oldText: this.props.title,
        isEditing: false 
    }

    onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target['value'];
        this.setState({text: text});
    }

    onDetectPressedkey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.keyCode === 13 
            ? this.onSubmit() 
            : event.keyCode === 27 
                ? this.onCancel() 
                : '';
    }

    onToggleEditing = (event: React.MouseEvent<HTMLDivElement>) => {
        this.setState({isEditing: !this.state.isEditing});  
    }

    onCancel = () => {
        this.setState({
            isEditing: false, 
            text: this.state.oldText
        });
    }

    onSubmit = () => { 
        const {text} = this.state; 
 
        this.setState({isEditing: false, oldText: text});  
        this.props.onChangeTitle(text); 
    }

    render () {
        const {isEditing, text} = this.state;
        const {isDone, title} = this.props;  
        
        return (
            <div className="todo-title-changer">
                {isEditing &&
                    <div className="todo-title-changer__edit">
                        <input type="text" className="todo__input" 
                            onKeyUp={(e) => this.onDetectPressedkey(e)}
                            onChange={this.onChangeInput} 
                            defaultValue={this.state.text} 
                        />
                        <div className="todo-title-changer__actions">
                            <div className="submit" onClick={this.onSubmit}>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div className="cancel" onClick={this.onCancel}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </div>
                        </div>
                    </div>
                }

                <div className="todo-list__title" 
                    onClick={this.onToggleEditing}>
                        {isDone ? <s>{text}</s> : text }
                </div>

            </div>
        )
    }
}

export default TodoListItemTitle;