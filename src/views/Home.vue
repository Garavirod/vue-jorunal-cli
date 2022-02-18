<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Daybook</h1>
    <button class="btn btn-primary" @click="goToDayBook()">Daybook</button>
  </div>
</template>
<script>
export default {
  methods:{
     goToDayBook: function (){
      this.$router.push({name:'daybook'});
    }
  }
}
</script>