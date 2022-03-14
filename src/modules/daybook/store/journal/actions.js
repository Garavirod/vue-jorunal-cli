import daybookService from "../../services/daybook-service"


export const loadEntries = async ( {commit} ) => {
    const { data } = await daybookService.getEntries()
    let entries = []
    for(const id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)    
}

export const updateEntry = async ( /* {commit}  */) => {

}

export const createEntry = async ( /* {commit}  */) => {

}