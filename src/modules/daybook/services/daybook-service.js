import { journalApi } from "../../../api/journalAPI";
import { Service } from "../../../services/service";


class DayBookService extends Service{
    constructor(){
     super();
    }

    getEntries(){
        return journalApi.get('/entries.json');
    }
}


export default new DayBookService;