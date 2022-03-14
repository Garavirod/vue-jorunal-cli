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
}


export default new DayBookService;