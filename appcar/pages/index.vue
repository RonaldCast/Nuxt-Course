<template>
  <div id="index_root">
    <div id="main">
      <transition name="fade">
      <p v-if="show">Now you see me!</p>
      <p v-else>Now you don't!</p>
    </transition>
    <button @click="show = !show">click me</button>
      <transition name="fade">
      
      <div>
        <DetailsPost
          v-for="post in $store.state.list_post"
          :title="post.title"
          :key="post.id"
          :body="post.body"
          :id="post.id"
        />
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import DetailsPost from "@/components/DetailsPost.vue";
export default {
  head(){
    return{
      title:"auto",
      meta:[
        {hid:"description", name:"description", content:"introduction"}
      ]
    }
  },
  //  transition:{name:"face"},
  layout: "custome",
  components: {
    DetailsPost,
  },
  data(){
    return{
      show:false
    }
  }
};
</script>

<style scoped>
#main {
  /* width: 80%;
  margin: 0 auto; */
  margin-top: 20px;
}
  .face-enter-active, .face-leave-active{
    transition: opacity .5s;
}

.face-enter, .face-leave-active{
   opacity: 0;
}
</style>
