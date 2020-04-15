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
    <a
      id="skillCategories"
      href="#"
    >カテゴリ</a>
    <div id="skillList">
      スキル
    </div>
    <div id="skillGraph">
      <FrontChart /><BackChart /><DevOpsChart />
    </div>
  </div>
</template>

<script>
  import FrontChart from './FrontChart.vue';
  import BackChart from './BackChart.vue';
  import DevOpsChart from './DevOpsChart.vue';

  export default {
    name : 'Skill' ,
    components: {
    FrontChart,
    BackChart,
    DevOpsChart
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

</style>
