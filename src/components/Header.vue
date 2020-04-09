<template>
  <div id ="headerSection">
    <button @click="toggle" class="headerButton"><img src="スクリーンショット 2020-04-08 17.27.12">ドロワー開閉</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open"></div>
    </Drawer>
    <ul>
       <li></li>
       <li></li>
      <li></li>
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
#headerSection{
  background: #F3F3F3;
  width: 100%;
  height: auto;
 }

</style>

