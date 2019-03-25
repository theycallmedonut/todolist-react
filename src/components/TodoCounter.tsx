import React from 'react';

import store from './../store/store';

const TodoCounter = () => {
    const count = store.getState().totalTasks;

    return (
        <div className="todo-counter">
            Total tasks is:&nbsp;
            <b className="todo-counter__qty">{count}</b>
        </div>
    )
};

export default TodoCounter;