<template>
  <v-app>
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/">Preview</router-link>
    </div>
    <main class="pa-6">
      <router-view/>
    </main>
  </v-app>

</template>

<style lang="sass">
#app
  font-family: 'Open Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background: #f6f8f9
  line-height: 1.75

#nav
  padding: 30px
  background: #fff
  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983


main
  max-width: 1200px
  margin: 0 auto
  width: 100%
</style>
