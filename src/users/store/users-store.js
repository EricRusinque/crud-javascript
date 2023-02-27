import { loadUsers } from "../use-cases/load-users"

const state = {
    person: 0,
    user: [],
}

const loadNextPage = async() => {

    const user = await loadUsers( state.person + 1);
    if( user.length === 0 ) return;

    state.person += 1;
    state.user = user;
}

const loadPreviousPage = async() => {
    if( state.person === 1 ) return;
    const user = await loadUsers( state.person -1);

    state.user = user;
    state.person -= 1;
}


const onUserChanged = () => {
    throw new Error('Not implemented')
}

const reloadPage = async() => {
    throw new Error('Not implemented')
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.user],
    getCurrentPage: () => state.person,
}