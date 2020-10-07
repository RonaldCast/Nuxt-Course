<template>
  <div>
      {{error}}
    <div v-if="error.statusCode === 404">
      <h1>Page Not found</h1>
    </div>
    <div v-else>
      <h1>{{ error.message }}</h1>
    </div>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["error"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped></style>
