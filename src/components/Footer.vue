<template>
  <div id="footerSection">
    <a
      href="#app"
      @click="clickSmoothScroll()"
    >戻る</a>
    <div id="footerCopyright">
      コピーライト
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll(){
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

  #fotterSection {
    background: linear-gradient(180deg, #80e1f7, #06c1e6);
    width: 100%;
    height: auto;
    padding-bottom: 30px;
    text-align: center;
  }

  #footerCopyright {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-size: 12pt;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  }
</style>
