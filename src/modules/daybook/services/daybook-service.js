import { journalApi } from "../../../api/journalAPI";
import { Service } from "../../../services/service";


class DayBookService extends Service{
    constructor(){
     super();
    }

    getEntries(){
        return journalApi.get('/entries.json');
    }

    updateEntryText( updatedEntry ){
        return journalApi.put('/entries.josn',updatedEntry);
    }
}


export default new DayBookService;