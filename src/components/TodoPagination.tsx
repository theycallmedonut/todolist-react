import React from 'react';

import store from './../store/store';
import { getTasksList } from './TodoList';


const TodoPagination = () => {

    const {totalTasks, pagination} = store.getState();
    const currentPage = pagination.page;
    const totalPages = Math.ceil(totalTasks/3);

    const createPaginationItems = () => {
        let paginationItems:any = [];

        const printFrom = currentPage === 1 
            ? currentPage : currentPage - 1; 
        const printTo = currentPage === totalPages 
            ? totalPages : currentPage + 1;

        for(let i = printFrom; i <= printTo; i++){
            const classname = `todo-pagination__item 
                ${currentPage === i && 'todo-pagination__item--current'}`;

            paginationItems.push(
                <div key={i} className={classname} 
                    onClick={() => getTasksList(i)}>
                    {i}
                </div>
            );
        }
        return paginationItems;
    }


    return (
        <div className="todo-pagination">
            {createPaginationItems()}
        </div>
    )
};

export default TodoPagination;