<template>
    <HeaderPage></HeaderPage>
    <h1>Welcome on Home page {{ user }}</h1>
    <table>
        <tr>
            <td>ID</td>
            <td> Name</td>
            <td>Addres</td>
            <td>Update</td>
        </tr>
        <tr v-for="item in restro" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td> <router-link :to = "'./update-restro/'+item.id"> Update restro </router-link></td>
        </tr>
    </table>
</template>
<script>
import axios from "axios";
import HeaderPage from "./Header";

export default {
    name: "HomePage",
    components: {
        HeaderPage
    },
    data() {
        return {
            user: "",
            restro: []
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({ name: "SingUp" })
        }
        let data = JSON.parse(user)
        this.user = data.name
        let result = await axios.get("http://localhost:3000/restro");
        this.restro = result.data

    }
}
</script>
