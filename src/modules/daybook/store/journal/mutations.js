export const setEntries =  ( state, entries ) => {

    state.entries = [ ...state.entries,...entries];
    state.isLoading = false
}

export const updateEntry =  ( state, entry ) => {
    const idx = state.entries.findIndex( (e) => e.id === entry.id );
    state.entries[idx] = entry;
}

export const addEntry =  ( state, entry) => {
    state.entries = [ entry, ...state.entries ];
}


export const removeEntry = ( state, id) => {
    /* const idx = state.entries.findIndex( (e) => e.id === id )
    state.entries.splice(idx, 1) */

    state.entries = state.entries.filter( e => e.id !== id )
}