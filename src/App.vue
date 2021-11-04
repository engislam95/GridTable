<template>
  <div id="app">
    <div class="container is-fluid" id="nav">
      <router-link to="/">Test</router-link>
      <b-icon class="iconQuestion" pack="fa" icon="question-circle"></b-icon>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
  text-align: left;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .iconQuestion {
    color: #80808075;
    font-size: 1.3rem;
  }
}
@media only screen and (max-width: 600px) {
  th {
    font-size: 0.8rem;
  }
  .dropFile .upload {
    margin-top: 20px !important;
  }
  .dropFile {
    display: block !important;
  }
  .iconAction.mr-5 {
    margin-right: 0rem !important;
  }
}
</style>
