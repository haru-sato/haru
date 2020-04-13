<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
  background: white;
  width: 100%;
  height: auto;
}

#aboutTitle {
  background: #20879f;
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
