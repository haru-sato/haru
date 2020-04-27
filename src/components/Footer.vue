<template>
  <div id="footerSection">
    <a
      href="#"
      class="footer-icon"
      @click="clickSmoothScroll()"
    >
      <img
        id="footerScroll"
        src="../assets/scrollButton.png"
      ></a>
    <div
      id="footerCopyright"
      class="whiteText"
    >
      ©Seattleconsulting
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

  #footerSection {
    background: linear-gradient(180deg, #151a61, #040c1b);
    color: white;
    width: 100%;
    height: auto;
    padding-bottom: 30px;
    text-align: center;
    margin-top: 30px;
  }

  #footerCopyright {
    font-size: 12pt;
    height: 40px;
  }

  #footerScroll {
    position: relative;
    top: 3px;
    width: 30px;
    height: 30px;
  }
</style>
