<template>
  <div id="app">
    <Header />
    <Main />
    <div>{this.skills}</div>
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import About from './components/About.vue'
  import Skill from './components/Skill.vue'
  import Vision from './components/Vision.vue'
  import Footer from './components/Footer.vue'
  // import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'App',
    components: {
      Header,
      Main,
      About,
      Skill,
      Vision,
      Footer
  },
     mounted () {
       this.$store.dispatch('getSkills');
  }
};

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
