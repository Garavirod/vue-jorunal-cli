<template>
    <div
        @click="$router.push({name:'entry', params:{id:11}})" 
        class="entry-container pointer p-2 pointer mb-3">
        <!-- title -->
        <div class="entry-title d-flex">
            <span class="fw-bold fs-5 text-success">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
            <div class="entry-description">
                {{ shortText }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Entry',
    props:{
        entry:{
            type:Object,
            required:true, 
        }
    },
    computed:{
        shortText: function() {
            return ( 
                this.entry.text.length > 130 ? 
                this.entry.text.substring(0,130) + '...' :
                this.entry.text
            )
        }
    }
}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2e3e50;

        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
        }
    }
</style>