import state from '../module-template/state';
import * as actions from '../module-template/actions';
import * as mutations from '../module-template/mutations';
import * as getters from '../module-template/getters';


const moduleStore = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};


export default moduleStore;