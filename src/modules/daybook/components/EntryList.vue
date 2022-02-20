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
        border-right: 1px solid #2c2c2c;
        height: calc(100vh - 56px);
    }
    .entry-scrollarea{
        height: calc( 100vh - 120px);
        overflow: scroll;
    }
</style>