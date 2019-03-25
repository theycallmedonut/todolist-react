import React from 'react';

import './../scss/todoApp.scss'; 

import TodoAdd from './TodoAdd';
import TodoList, { getTasksList } from './TodoList';
import TodoCounter from './TodoCounter';
import TodoMessage from './TodoMessage';
import TodoPagination from './TodoPagination';
import TodoLogin from './TodoLogin';
import TodoSorter from './TodoSorter';

import store from './../store/store';


class TodoApp extends React.Component<{}, {}> {


    render() {
        const { message, tasks} = store.getState();

        return (
            <div className="todo-app">
                <h1>Todo App</h1>
                <TodoLogin />
                {message.length > 0 &&
                    <TodoMessage message={message} />
                }
                <TodoAdd />
                <div className="todo-content">
                    <TodoSorter />
                    <TodoList /> 
                    <TodoPagination />
                    <TodoCounter />
                </div>
            </div>
        )
    }
}

export default TodoApp;