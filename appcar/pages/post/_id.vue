<template>
  <div>
    <h1>{{ $store.state.list_post[$route.params.id].title }}</h1>
    <p>{{ $store.state.list_post[$route.params.id].body }}</p>
    <nuxt-link :to="`/post/${$route.params.id}/comments`">
      <Button>Comments</Button>
    </nuxt-link>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: "ddd"
        }
      ]
    };
  },
  layout: "custome",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped></style>
