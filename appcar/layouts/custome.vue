<template>
  <div>
    <div id="header">
      <nuxt-link to="/">
        <Button id="header-button" type="primary">Home</Button>
      </nuxt-link>
      <p id="header-title">Nuxt Practice App</p>
      <Avatar id="header-avatar" icon="ios-person" size="large" />
    </div>
    <div id="main">
      <nuxt />
    </div>

    <div id="footer">
      <p id="footer-title">Developed using Nuxt & iView</p>
      <p id="footer-copyright">All Rigths Reserved</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped>
#header-button {
  position: absolute;
  left: 10px;
  top: 20px;
  height: 40px;
  width: 80px;
}

#header-title {
  font-family: impact;
  color: white;
  line-height: 80px;
  font-size: 26px;
}

#main {
  padding-top: 80px;
  padding-bottom: 70px;
  width: 80%;
  margin: 0 auto;
}

#header-avatar {
  position: absolute;
  right: 10px;
  top: 20px;
}

#header {
  height: 80px;
  background: #e74c3c;
  text-align: center;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9999;
}
#footer {
  height: 70px;
  background: #e74c3c;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  color: white;
}
#footer-title {
  line-height: 40px;
  font-size: center;
  font-weight: bold;
}

#footer-copyright {
  line-height: 20px;
  font-size: 14px;
}
</style>
