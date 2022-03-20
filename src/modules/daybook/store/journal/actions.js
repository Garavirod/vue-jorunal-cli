import daybookService from "../../services/daybook-service"


export const loadEntries = async ( {commit} ) => {
    const { data } = await daybookService.getEntries()
    let entries = []
    if( data ){
        for(const id of Object.keys(data)){
            entries.push({
                id,
                ...data[id]
            })
        }
    }    
    commit('setEntries', entries)    
}

export const updateEntry = async ({commit}, entry) => {
    const dataUpdated = { 'text':entry.text, 'date':entry.date, 'picture':entry.picture }
    await daybookService.updateEntryText(entry.id,dataUpdated);
    commit('updateEntry',{...entry})
}

export const createEntry = async ( {commit}, entry ) => {
    const dataEntry = { 'text':entry.text, 'date':entry.date, 'picture':entry.picture }
    const idSaved = await daybookService.createEntryText( dataEntry )    
    dataEntry.id = idSaved.data.name
    commit('addEntry',dataEntry)
    return dataEntry.id
}


export const deleteEntry = async ( {commit}, entry ) => {
    const { id:idEntryDelete } = entry
    await daybookService.deleteEntry(idEntryDelete)
    commit('removeEntry',idEntryDelete)
}