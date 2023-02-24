import { localhostPersonaToModel } from "../mappers/localhost-persona.mapper";
import { Person } from "../models/person";
/**
 * 
 * @param { Number } page 
 * @returns { Promise<Person[]>}
 */



export const loadUsers = async( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/v1/quotes`;
    const res = await fetch( url );
    const data = await res.json();

    const person = data.map( localhostPersonaToModel );

    return person
}