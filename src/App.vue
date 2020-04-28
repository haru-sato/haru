<template>
  <div id="app">
    <Header />
    <Main />
    <!-- <div>{this.skills}</div> -->
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

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .title {
    color: #040c1b;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18pt;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
    white-space: pre-wrap;
    width: 40%;
    margin: 0 auto;
    margin-top: 30px;
  }

  .explain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-size: 12pt;
    width: 75%;
    text-align: left;
    height: 20px;
    word-break: break-all;
    line-height: 1.2;
    margin: 0 auto;
    margin-top: 20px;
    white-space: pre-wrap;
  }

  .whiteText {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  }

</style>
