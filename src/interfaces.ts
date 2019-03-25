import { ReactText } from 'react';

export interface iPagination {
    page: number,
    sort_field: string,
    sort_direction: string,
}

export interface iUserInfo {
    email: string;
    name: string;
}

export interface iTodoListItem {
    id: number,
    username: string,
    email: string,
    text: string,
    status: string | number
}