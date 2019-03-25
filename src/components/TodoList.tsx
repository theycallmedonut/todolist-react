import React from 'react';

import TodoListItem from './TodoListItem';
import {errorMessages} from './../messages';
import {LoadingSpinner} from './../features';
import { defaultUserInfo } from '../store/userInfo';
import { iPagination } from '../interfaces';
import { initStringData } from '../helpers';
import { routes } from '../routes';
import store from '../store/store';
import { showMessage } from './TodoMessage';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export const getTasksList = async (
    page: number = 1,
    sort_field: string = 'id',
    sort_direction: string = 'desc'
) => {

    const { email } = defaultUserInfo;
    const pagination: iPagination = {
        page: page,
        sort_field: sort_field,
        sort_direction: sort_direction,
    }
    const config = initStringData(pagination);

    await fetch(`${routes.getList}/?developer=${email + config}`)
        .then(response => response.json())
        .then(result => {
            const { tasks, total_task_count } = result.message;

            store.dispatch({ type: 'SET_TASKS_LIST', tasks: tasks })
            store.dispatch({ type: 'SET_PAGINATION', pagination })
            store.dispatch({
                type: 'SET_TOTAL_TASKS',
                totalTasks: total_task_count
            })
        })
        .catch(err => {
            console.error(err)
            showMessage(errorMessages.serverError);
        });
}

  
class TodoList extends React.Component<{},{}> {

    async componentWillMount(){
        await getTasksList();
    }

    render() {

        const {tasks, totalTasks} = store.getState();

        return (
            totalTasks > 0 ? (
            <div className="todo-list">
                    {tasks.length <= 0 &&
                        <b>{errorMessages.emptyList}</b> 
                    }

                    <TransitionGroup>
                        {tasks.map((task) => (
                            <CSSTransition
                                key={task.id}
                                appear={true}
                                exit={false}
                                timeout={500}
                                classNames="list-anim"
                            >
                                <TodoListItem {...task} refreshList={getTasksList} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    </div> 
            ) : (
                <LoadingSpinner />
            )
        )
    }
}

export default TodoList;