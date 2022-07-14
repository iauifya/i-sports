<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/list">List</router-link> |
      <!-- <router-link to="/details/:id">Details</router-link> | -->
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  name: 'ISportsApp',
  mounted() {
    // const facebookAppId = process.env.VUE_APP_FACEBOOK_APP_ID;
    window.fbAsyncInit = function () {
        FB.init({
            appId: 295146415113585,
            cookie: true,
            xfbml: true,
            version: 'v14.0'
        });
    };
  },
};
</script>