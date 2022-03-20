import { journalApi } from "../../../api/journalAPI";
import { Service } from "../../../services/service";


class DayBookService extends Service{
    constructor(){
     super();
    }

    getEntries(){
        return journalApi.get('/entries.json');
    }

    updateEntryText( id,updatedEntry ){
        return journalApi.put(`/entries/${id}.json`,updatedEntry);
    }

    createEntryText( newEntry ){
        return journalApi.post('/entries.json', newEntry)
    }

    deleteEntry( id ){
        return journalApi.delete(`/entries/${id}.json`)
    }
}


export default new DayBookService;