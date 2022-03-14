export const setEntries =  ( state, entries ) => {

    state.entries = [ ...state.entries,...entries];
    state.isLoading = false
}

export const updateEntry =  ( state,entry ) => {
    const idx = state.entries.findIndex( (e) => e.id === entry.id );
    state.entries[idx] = entry;
}

export const addEntry =  ( /* state */ ) => {

}