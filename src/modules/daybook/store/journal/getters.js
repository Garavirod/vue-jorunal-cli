export const getEntryByTerm = ( state ) => ( term = '' ) => {
    if( term === '' ) return state.entries
    return state.entries.filter( 
        entry => entry.text.toLowerCase().includes( 
            term.toLowerCase() 
        ) 
    )
}

export const getEntryById = ( state ) => {
    return state
}