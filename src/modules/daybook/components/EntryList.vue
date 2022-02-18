<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text"
            class="form-control"
            placeholder="Shearch entries"
            >
        </div>

        <div class="entry-scrollarea">
            <h2 v-for="item in [1,2,3,4,5,6,7,9,10]" :key="item">Entry</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:'EntryList',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .entry-list-container{

    }
    .entry-scrollarea{
        
    }
</style>