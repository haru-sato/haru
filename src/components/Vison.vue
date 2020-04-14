<template>
  <div id="visonSection">
    <div id="visonTitle">
      Vison
    </div>
    <div id="visonExplain">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Vison' ,
    props:{
    msg: String
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

#visonSection {
  background: linear-gradient(180deg, #f5f5f5, #a4a6a7);
  width: 100%;
  height: auto;
  text-align: center;
}

#visonTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18pt;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
}

#visonExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  line-height: 0.25em;
  margin-top: 20px;
}

</style>
