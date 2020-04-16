<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain">
      現在のスキルをまとめています。
      フロント側はこのポートフォリオの作成で少し力をつけることができました。
      今後はWebアプリケーションのバックエンドの開発業務に積極的に携わらせていただき、
      少しずつ専門性を高めていきたいと考えています。
      下記のスコアの基準はおおよそ以下の通りとなります。
    </div>
    <label for="gitHubLabel">GitHub</label>
    <a
      id="gitHubLink"
      href="https://github.com/haru-sato/portfolio"
    >https://github.com/haru-sato/portfolio</a>
    <div id="skillCategories">
      <ul>
        <li>
          <button
            id="Front"
            @click="setCurrentChart('FrontChart')"
          >
            Front-end
          </button>
        </li>
        <li>
          <button
            id="Back"
            @click="setCurrentChart('BackChart')"
          >
            Back-end
          </button>
        </li>
        <li>
          <button
            id="Dev"
            @click="setCurrentChart('DevChart')"
          >
            DevOps
          </button>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="btn-Front"
        :class="{'Frontchange': isFrontActive}"
      >
        <li class="btn-F">
          HTML
        </li>
        <li class="btn-F">
          CSS
        </li>
        <li class="btn-F">
          JavaScript
        </li>
        <li class="btn-F">
          scss
        </li>
        <li class="btn-F">
          Vue
        </li>
      </ul>
      <ul
        id="btn-Back"
        :class="{'Backchange': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>C</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="btn-Dev"
        :class="{'Devchange': isDevActive}"
      >
        <li>Lenux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div id="skillGraph">
      <div v-if="isFrontActive">
        <FrontChart />
      </div>
      <div v-if="isBackActive">
        <BackChart />
      </div>
      <div v-if="isDevActive">
        <DevChart />
      </div>
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
      currentChart: 'FrontChart'
    }
  },
  computed: {
    isFrontActive() {
      return this.currentChart=='FrontChart';
    },
    isBackActive() {
      return this.currentChart=='BackChart';
    },
    isDevActive() {
      return this.currentChart=='DevChart';
    }
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

#skillSection {
  width: 100%;
  height: auto;
  white-space: pre-wrap;
}

#skillTitle {
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18pt;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  white-space: pre-wrap;
}

#skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  white-space: pre-wrap;
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
  text-align: center;
}

#Front {
  color: #b51a1a;
  background-color: rgba(181, 26, 26, 0.25);
}

#Back {
  color: #0f8839;
  background-color: rgba(15, 136, 57, 0.25);
}

#Dev {
  color: #571083;
  background-color: rgba(87, 16, 131, 0.25);
}

li {
  font-size: 18px;
  box-shadow: 2px 2px 4px gray;
  margin: 10px;
  padding: 3px 5px;
  border-style: none;
  font-weight: bold;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  display: inline-block;
}

#Front,
#Back,
#Dev {
  box-shadow: 2px 2px 4px gray;
  width: 120px;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  text-align: center;
}

.Frontchange li {
  background-color: rgba(181, 26, 26, 0.25);
}

.Backchange li {
  background-color: rgba(15, 136, 57, 0.25);
}

.Devchange li {
  background-color: rgba(87, 16, 131, 0.25);
}

#btn-Front li {
  color: #b51a1a;
}

#btn-Back li {
  color: #0f8839;
}

#btn-Dev li {
  color: #571083;
}

#skillGraph {
  width: 30%;
  height: 30%;
  margin: 0 auto;
}
</style>
