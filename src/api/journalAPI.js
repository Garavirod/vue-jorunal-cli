import axios from 'axios';

export const journalApi = axios.create({
    baseURL:'https://vue-journal-cli-default-rtdb.firebaseio.com'
});
