<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        firstsection
      </h1>
      <h2 class="subtitle">
        My prime Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <div>
      <transition name="fade">
        <p v-if="show" key="o">Now you see me!</p>
        <p v-else key="p">Now you don't!</p>
      </transition>
      <button @click="show = !show">click me</button>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  layout: "custome",
  components: {
    Logo
  },

  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
.face-enter-active,
.face-leave-active {
  transition: opacity 0.5s;
}

.face-enter,
.face-leave-active {
  opacity: 0;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
