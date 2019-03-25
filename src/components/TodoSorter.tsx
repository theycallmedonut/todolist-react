import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

import {successMessages} from './../messages'; 

import {iPagination} from './../interfaces'

import {showMessage} from './TodoMessage';

import store from './../store/store';
import { getTasksList } from './TodoList';



const TodoSorter = () => {
    const {page, sort_field, sort_direction} = store.getState().pagination;
    const todoSorterTypes = ['id', 'username', 'email', 'status'];

    const onChangeDirection = () => {
        const direction = sort_direction === 'asc' ? 'desc' : 'asc';
        getTasksList(page, sort_field, direction);
        showMessage(successMessages.todoListSorted);
    }

    const onChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = event.target;
        getTasksList(page, value, sort_direction)
        showMessage(successMessages.todoListSorted);
    }

    return (
        <div className="todo-sorter">
            <label>Sort by:</label>
            <select className="todo-sorter__type" onChange={onChangeType}>
                <option>-- default --</option>
                {todoSorterTypes.map(type => 
                    <option key={type}>{type}</option>
                )}
            </select>
            <a className="todo-sorter__direction"
                onClick={onChangeDirection}
            >
            {sort_direction === 'asc'
                ? <FontAwesomeIcon icon={faSortAlphaDown} />
                : <FontAwesomeIcon icon={faSortAlphaUp} />
            }
            </a>
        </div>
    )
}

export default TodoSorter;