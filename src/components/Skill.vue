<template>
  <div id="skillSection">
    <div id="skillTitle">
      Title
    </div>
    <div id="skillExplain">
      Explain
    </div>
    <label for="gitHubLabel">GitHubラベル</label>
    <a
      id="gitHubLink"
      href="https://github.com/haru-sato/portfolio"
    >GitHubリンク</a>
    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="Front"
            @click="FrontChange"
          > Front-end</span>
        </li>
        <li>
          <span
            id="Back"
            @click="BackChange"
          >Back-end</span>
        </li>
        <li>
          <span
            id="DevOps"
            @click="DevChange"
          >DevOps</span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="Front-end"
        :class="{'active': Frontclicked}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="Back-end"
        :class="{'active': Backclicked}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>C</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="DevOps"
        :class="{'active': Devclicked}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div
      v-if="Frontclicked"
      id="skillGraph"
    >
      <FrontChart />
    </div>
    <div v-if="Backclicked">
      <BackChart />
    </div>
    <div v-if="Devclicked">
      <DevChart />
    </div>
  </div>
</template>

<script>
  import FrontChart from './FrontChart.vue';
  import BackChart from './BackChart.vue';
  import DevChart from './DevChart.vue';

  export default {
    name : 'Skill' ,
    components: {
    FrontChart,
    BackChart,
    DevChart
    },
  data() {
    return{
      Frontclicked:true,
      Backclicked:false,
      Devcliced:false
    }
  },
    methods:{
      Frontchange(){
        this.Frontclicked=true;
        this.Backclicked=false;
        this.Devclicked=false;
      },
      Backchange(){
        this.Frontclicked=false;
        this.Backclicked=true;
        this.Devclicked=false;
      },
      Devchange(){
        this.Backclicked=false;
        this.Frontclicked=false;
        this.Devclicked=true;
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

  #skillSection {
    color: #fff;
    width: 100%;
    height: auto;
  }

  #skillTitle {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18pt;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  }

  #skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-size: 12pt;
    word-break: break-all;
    line-height: 1.2;
  }

  #gitHubLabel {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-size: 12pt;
  }

  #gitHubLink {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-size: 12pt;
  }

  #skillCategories {
    width: auto;
  }

  #skillList {
    height: 30px;
  }

  #Front {
    color: #b51a1a;
  }

  #Back {
    color: #0f8839;
  }

  #DevOps {
    color: #571083;
  }
</style>
