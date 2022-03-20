<template>
    <div
        @click="goTo()" 
        class="entry-container pointer p-2 pointer mb-3">
        <!-- title -->
        <div class="entry-title d-flex">
            <span class="fw-bold fs-5 text-success"> {{dateFormatEntry.day}} </span>
            <span class="mx-1 fs-5"> {{ dateFormatEntry.month }} </span>
            <span class="mx-2 fw-light"> {{ dateFormatEntry.yearDay }} </span>
            <div class="entry-description">
                {{ shortText }} 
            </div>
        </div>
    </div>
</template>

<script>
import getDayMonthYear from '../helper/getDayMonthYear';

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
        },
        dateFormatEntry(){
            return getDayMonthYear( this.entry.date );
        },
         
    },
    methods:{
        goTo: function (){
            this.$router.push({name:'entry', params:{id:this.entry.id}})
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