import daybookService from "../../services/daybook-service"


export const loadEntries = async ( /* {commit}  */) => {
    const entries = await daybookService.getEntries();
    console.log(entries.data);
}

export const updateEntry = async ( /* {commit}  */) => {

}

export const createEntry = async ( /* {commit}  */) => {

}