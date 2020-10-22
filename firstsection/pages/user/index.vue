<template>
    <div>
    <h2>Index user</h2>
    {{$store.state.blog.listUsers}}
    </div>
</template>
<script>
import axios from 'axios'
export default {
    async fetch(context){
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users/")
        context.store.commit("blog/SET_LIST_USER", resp.data)
    },
};
</script>
<style scoped>
    
</style>