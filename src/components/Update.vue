<template>
    <HeaderPage></HeaderPage>
    <h1>Update Page</h1>
    <form class="update-restro">
        <input type="text" placeholder="Enter restro name" v-model="name">
        <input type="text" placeholder="Enter address" v-model="address">
        <button type="button" v-on:click="updateRestro">Update restro </button>

    </form>
</template>
<script>
import axios from "axios";
import HeaderPage from "./Header";

export default {
    name: "UpdateRestro",
    components: {
        HeaderPage
    },
    data() {
        return {
            id: "",
            name: "",
            address: ""
        }
    },
    methods: {
        async updateRestro() {
            let result = await axios.put("http://localhost:3000/restro/" + this.$route.params.id, {
                name: this.name,
                address: this.address
            })
            if (result.status == 200) {
                this.$router.push({ name: "Home" })
            }

        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({ name: "SingUp" })
        }
        let id = this.$route.params.id
        if (id) {
            let result = await axios.get("http://localhost:3000/restro/" + id)
            if (result.data) {
                console.log(result);
                this.name = result.data.name
                this.address = result.data.address
            }
        }
    }
}
</script>
