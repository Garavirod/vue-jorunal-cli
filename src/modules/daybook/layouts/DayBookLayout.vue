<template>
    <Navbar/>    

    <!-- Loading data progress -->
    <div v-if="isLoading" class="row justify-content-md-center">
        <div class="col alert-info text-center mt-5 p-5">
            Wait please...            
        </div>
    </div>
    <!-- Data already loaded -->
    <div v-else class="d-flex">
        <div class="col-4">
            <entry-list/>
        </div>
        <!--  -->
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        Navbar: defineAsyncComponent( () => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent( () => import('../components/EntryList.vue'))
    },
    methods:{
        ...mapActions('journal',['loadEntries'])
    },
    computed:{
        ...mapState('journal',['isLoading']),
    },
    created(){
        this.loadEntries();
    }
}
</script>