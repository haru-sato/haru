<template>
  <div id ="skillSection">
    <div id ="skillTitle">Title</div>
    <div id ="skillExplain">Explain</div>
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
  #skillSection{
    color :#FFFFFF;
    width: 100%;
    height: auto;
  }
  #skillTitle{
    color :#FFFFFF;
    font-family: Noto Sans;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  }
  #skillExplain{
    color :#707070;
    font-family: Noto Sans;
    font-weight: bold;
    font-size: 12pt;
    word-break: break-all;
    line-height: 1.2;
  }
</style>