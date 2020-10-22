<template>
  <div>
    <h2>Post</h2>
    <Button type="primary" @click="getPost">Load Data</Button>
    <Button type="primary" @click="$store.commit('EMPTY_LIST')"> Empty</Button>
    <pre> {{ $store.state.listPost }}</pre>
  </div>
</template>
<script>
export default {

  data() {
    return {};
  },
 
  methods: {
    async getPost() {
      await this.$store.dispatch({ type: "getPost" });
    }
  }
};
</script>
<style scoped></style>
