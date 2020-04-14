<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      福岡市出身。同志社大学卒。専攻は主に数学。学生時代は弊社の大阪支社にてインターン生として
      営業、人事、広報と幅広く経験させていただきました。aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
  background: #f5f5f5;
  width: 100%;
  height: auto;
}

#aboutTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18pt;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  margin-top: 0;
}

#aboutExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  line-height: 1.2;
  margin-top: 20px;
}

div#aboutSection {
  margin-top: 0;
  min-height: 200px;
  border-bottom: solid 1px #cbcbcb;
}
</style>
