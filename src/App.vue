<template>
  <div id="app">
    <Header/>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
