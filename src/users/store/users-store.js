import { loadUsers } from "../use-cases/load-users"

const state = {
    person: 0,
    users: [],
}

const loadNextPage = async() => {

    await loadUsers( state.person + 1);

}

const loadPreviousPage = async() => {
    throw new Error('Not implemented')
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

    getUser: () => [...state.users],
    getCurrentPage: () => state.person,
}