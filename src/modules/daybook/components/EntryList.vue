<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text"
            class="form-control"
            placeholder="Shearch entries"
            >
        </div>

        <div class="entry-scrollarea">
            <Entry v-for="item in [1,2,3,4,5,6,7,9,10,11,12,12,12,1,2,12,12,12,12]" :key="item"/>
                
            
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name:'EntryList',
    components:{
        Entry:defineAsyncComponent( () => import('./Entry.vue') 
        )
    },
    data() {
        return {
            
        }
    },
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