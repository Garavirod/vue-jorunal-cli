<template>
    <nav class="navbar bg-primary text-white">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png" 
            alt="Vue logo" 
            height="24"
            class="d-inline-block align-text-top mx-2">
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-danger rounded-pill">Log out <i class="bi bi-box-arrow-in-right"></i></button>
        </div>
    </nav>
</template>

<script>
export default {
    name:'Navbar'
}
</script>