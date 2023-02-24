import { Person } from "../models/person"

/**
 * 
 * @param {Like<Person>} localhostPerson 
 * @returns { Person } 
 */


export const localhostPersonaToModel = ( localhostPerson ) => {

    const { 
        quote,
        author
    } = localhostPerson

    return new Person({
        quote,
        author
    })

}

