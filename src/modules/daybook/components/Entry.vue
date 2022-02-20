<template>
    <div class="entry-container pointer p-2 pointer mb-3">
        <!-- title -->
        <div class="entry-title d-flex">
            <span class="fw-bold fs-5 text-success">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
            <div class="entry-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos itaque ex sequi ratione, dolor rem alias. Voluptatum quod est voluptatem amet recusandae obcaecati, a neque dolor ipsa beatae? Odio?
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Entry'
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