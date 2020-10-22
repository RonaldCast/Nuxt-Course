<template>
    <div class="detailsPost">
        <nuxt-link :to="`post/${id}`">
            <h1>{{title}}</h1>
        </nuxt-link>
        <p>{{body}}</p>
    </div>
</template>
<script>
export default {
    props:["id","title", "body"],
    data() {
        return {
        
        };
    },
};
</script>
<style scoped>
    .detailsPost{
        padding: 15px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom:15px;

    }
    .detailsPost p{
        margin-top:10px ;
        font-size: .8rem;
    }
</style>