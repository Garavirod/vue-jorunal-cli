<template>
  <button @click="$emit('on:click')" class="btn btn-primary"> <b>{{ wordButton }}</b> </button>
</template>

<script>
export default {
    name:'Fab',
    props:{
        wordButton:{
            type: String,
            default: "New"
        }
    },
}
</script>

<style lang="scss" scoped>
    button{
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }
</style>