<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center">There is nothing selected</h1>
      <Fab @on:click="goToNewEntry" />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    },
    methods:{
        goToNewEntry: function (){
            this.$router.push({name:'entry', params:{id:'new'}})
        },
    },
}
</script>
<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>