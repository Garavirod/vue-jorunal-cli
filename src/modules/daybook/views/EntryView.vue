<template>
    <div class="entry-title d-lfex justify-content-between p-2">
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
    <Fab/>

    <img src="https://picsum.photos/200/300" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
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