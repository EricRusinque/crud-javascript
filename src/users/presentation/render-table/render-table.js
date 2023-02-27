import usersStore from '../../store/users-store';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    
    tableHeaders.innerHTML = `
        <tr>
            <th>author</th>
            <th>quote</th>
        </tr>
    `

    const tableBody = document.createElement('tbody');
    table.append( tableHeaders, tableBody);
    
    return table;

}


/**
 * 
 * @param { HTMLDivElement } element 
 */
export const renderTable = ( element ) => {
    
    const user = usersStore.getUser();

    if( !table ) {
        table = createTable();
        element.append( table )
        // TODO: listeners a la tablas
    }

    let tableHTML = '';

    user.forEach( u => {
        tableHTML += `
            <tr>
                <td>${ u.author }</td>
                <td>${ u.quote }</td>
                <td>
                    <a href="#/" data-id="${ user }">Select</a>
                    |
                    <a href="#/" data-id="${ user }">Delete</a>
                </td>
            </tr>
        ` 
    });


    table.querySelector('tbody').innerHTML = tableHTML ;
}