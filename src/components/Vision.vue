<template>
  <div
    id="visionSection"
    class="section"
  >
    <div
      id="visionTitle"
      class="title"
    >
      Vision
    </div>
    <div
      id="visionExplain"
      class="explain"
    >
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

#visionSection {
  background: linear-gradient(180deg, #f5f5f5, #cbcbcb);
  width: 100%;
  height: auto;
  margin-top: 0;
  min-height: 150px;
  white-space: pre-wrap;
}

</style>
