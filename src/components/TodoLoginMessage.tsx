import React from 'react';

import { errorMessages } from './../messages';
import { LoadingSpinner } from './../features';
import { TodoLoginState} from './TodoLogin';

const TodoLoginMessage = ({
    isWrongCredentials,
    loading,
    isEmptyInputs,
}: TodoLoginState) => (
    <div className="todo-login__message">
        {loading ? 
            <LoadingSpinner />
        :
            <React.Fragment>
                <div>{isEmptyInputs && errorMessages.notFilledInputs}</div>

                <div>{isWrongCredentials && errorMessages.wrongPassword}</div>
            </React.Fragment>
        }
    </div>
);

export default TodoLoginMessage;