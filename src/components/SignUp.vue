<template>
    <img class="logo" src="../assets/images.png" />
    <div class="register">
        <h3>Sign Up</h3>
        <input type="text" placeholder="Enter Name" v-model="name" />
        <input type="text" placeholder="Enter Email" v-model="email" />
        <input type="text" placeholder="Enter Password" v-model="password" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="Login">Click here for log in</router-link>
             </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password: this.password
            })
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({ name: "Home" })
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if(user){
            this.$router.push({ name: "Home" })
        }
    }
} 
</script>
<style>

</style>