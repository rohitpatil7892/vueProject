<template>
    <HeaderPage></HeaderPage>
    <h1>Add restro</h1>
    <form class="restro">
        <input type="text" name="name" placeholder="Enter restro name" v-model="name" />
        <input type="text" name="address" placeholder="Enter address" v-model="address">
        <button type="button" v-on:click="addRestro">Add new restro</button>
    </form>
</template>
<script>
import axios from "axios";
import HeaderPage from "./Header";

export default {
    name: "AddRestro",
    components: {
        HeaderPage
    },
    data() {
        return {
            name: "",
            address: ""
        }
    },
    methods: {
        async addRestro() {
            let result = await axios.post("http://localhost:3000/restro", {
                name: this.name,
                address: this.address
            })
            if (result.status == 201) {
                alert('Restro added successfully');
                this.name = ""
                this.address = ""
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({ name: "SingUp" })
        }
    }
}
</script>
