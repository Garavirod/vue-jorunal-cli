<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text"
            class="form-control"
            placeholder="Shearch entries"
            v-model="term"
            >
        </div>

        <div class="mt-2 flex-column d-flex">
            <button @click="$router.push({name:'entry', params:{ id:'new'}})" class="btn btn-primary mx-3">New entry</button>
        </div>

        <div class="entry-scrollarea">
            <Entry 
                v-for="entry in getEntriesByTerm" 
                :key="entry.id"
                :entry="entry"
            />                            
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
export default {
    name:'EntryList',
    components:{
        Entry:defineAsyncComponent( () => import('./Entry.vue') 
        )
    },
    data() {
        return {
            term:'',
        }
    },

    computed:{
        /* VUEX */
        ...mapGetters('journal',['getEntryByTerm']),
        /*  Component */
        getEntriesByTerm:function(){
            return this.getEntryByTerm(this.term);
        }
    }
}
</script>

<style lang="scss" scoped>

    
    .entry-list-container{
        border-right: 1px solid #2c2c2c;
        height: calc(100vh - 56px);
    }
    .entry-scrollarea{
        height: calc( 100vh - 115px);
        overflow: scroll;
    }
</style>