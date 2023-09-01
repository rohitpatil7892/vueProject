<template>
    <div class="header">
        <router-link to="/">Home </router-link>
        <router-link to="/add-restro">Add Restro</router-link>
        <!-- <router-link to="/update-restro">Update Restro</router-link> -->
        <a v-on:click="logout">Log-Out</a>
    </div>
</template>
<script>
export default {
    name: 'HeaderPage',
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({ name: "Login" })
        }
    }
}
</script>

<style>
.header {
    background-color: #333;
    overflow: hidden;
}
.header a {
    float: left;
    color: aliceblue;
    text-align: center;
    padding: 16px, 34px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 5px;
}
.header a:hover {
    background-color: antiquewhite;
    color: #222;
}
</style>