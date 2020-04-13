<template>
  <div id="skillSection">
    <div id="skillTitle">
      Title
    </div>
    <div id="skillExplain">
      Explain
    </div>
  </div>
</template>

<script>
export default {
    name : 'Skill' ,
    props:{
        msg: String
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
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
}

#skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  font-size: 12pt;
  word-break: break-all;
  line-height: 1.2;
}
</style>