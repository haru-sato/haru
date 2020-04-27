<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      福岡市出身。同志社大学卒。専攻は数学。ITの力で新しいものを生み出し、
      様々な価値を提供できる人になりたいと思い、IT業界を志望しました。
      また、学生時代は弊社の大阪支社にてインターン生として
      営業、人事、広報と様々な経験をさせていただいたため、浅くではありますが、幅広い知見があります。
    </div>
  </div>
</template>

<script>
  export default {
    name : 'About' ,
    props:{
    msg: String
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

#aboutSection {
  background: linear-gradient(180deg, #f5f5f5, #cbcbcb);
  width: 100%;
  height: auto;
  margin-top: 0;
  min-height: 150px;
  white-space: pre-wrap;
}

#aboutTitle {
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

#aboutExplain {
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

</style>
