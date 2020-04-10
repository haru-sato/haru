<template>
  <div id="headerSection">
    <button
      class="headerButton"
      @click="toggle"
    >
      <img src="スクリーンショット 2020-04-08 17.27.12">ドロワー開閉
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open" />
    </Drawer>
    <ul>
      <li />
      <li />
      <li />
    </ul>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer"
 
export default {
  name: "App",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style>
#headerSection {
  background: #f3f3f3;
  width: 100%;
  height: auto;
}

</style>

