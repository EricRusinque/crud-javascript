import { renderTable } from "./presentation/render-table";
import usersStore from "./store/users-store";

export const UsersApp = async( element ) => {

    element.innerHTML = 'Loading...';

    await usersStore.loadNextPage();
    element.innerHTML = ''

    renderTable( element )

} 