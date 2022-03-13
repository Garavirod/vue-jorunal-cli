<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fa-3 fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">July</span>
            <span class="mx-2 fs-4 fw-light">2021, Thursday</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Delete
            </button>
            <button class="btn btn-primary mx-2">
                Upload photo
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="What happend today?"></textarea>
    </div>
    <Fab :wordButton="'Save'" />
    <img 
        src="https://picsum.photos/200/300" 
        alt="entry-picture"
        class="img-thumbnail"
    >
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'
export default {
    props:{
        id: {
            type: String,
            required: true,
        }
    },
    computed:{
        ...mapGetters('journal',['getEntryById'])
    },
    components:{
        Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
    },
    methods:{
        loadEntry(){
            console.log(this.getEntryById(this.id));
        }
    },
    created(){
        this.loadEntry();
    }
}
</script>

<style lang="scss">
    textarea{
        font-size: 20;
        border: none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>