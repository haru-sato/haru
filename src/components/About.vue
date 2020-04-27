<template>
  <div
    id="aboutSection"
    class="section"
  >
    <div
      id="aboutTitle"
      class="title"
    >
      About Me
    </div>
    <div
      id="aboutExplain"
      class="explain"
    >
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

#aboutSection {
  background: linear-gradient(180deg, #f5f5f5, #cbcbcb);
  width: 100%;
  height: auto;
  margin-top: 0;
  min-height: 150px;
  white-space: pre-wrap;
}

</style>
