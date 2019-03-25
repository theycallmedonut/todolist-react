export const developerInfo = {
    email: 'theycallmedonut@gmail.com',
    name: 'donut',
}


const basicUrl = 'https://uxcandy.com/~shapoval/test-task-backend';

export const routes = {
    getList: `${basicUrl}`,
    addTodo: `${basicUrl}/create/?developer=${developerInfo.email}`,
    editTodo: `${basicUrl}/edit/`,
}