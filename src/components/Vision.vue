<template>
  <div id="visionSection">
    <div id="visionTitle">
      Vision
    </div>
    <div id="visionExplain">
      将来的にはディレクションや経営に関わっていきたいと考えています。
      その中でまずは、ユーザの目線で考え、提案もできるエンジニアになることを一つ目標としています。
      そのため、toCの開発を中心に様々な案件に携わり経験を積んで行きたく思っています。
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Vision' ,
    props:{
    msg: String
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

#visionSection {
  background: linear-gradient(180deg, #f5f5f5, #cbcbcb);
  width: 100%;
  height: auto;
  margin-top: 0;
  min-height: 150px;
  white-space: pre-wrap;
}

#visionTitle {
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

#visionExplain {
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
