<template>
  <div id="headerSection">
    <button
      type="button"
      class="btn_menu"
      :class="{'active': isActive}"
      @click="menu"
    >
      <span class="bar bar1" />
      <span class="bar bar2" />
      <span class="bar bar3" />
    </button>
    <nav :class="{'open':isActive}">
      <Menu @closeMenu="closeMenu" />
    </nav>
  </div>
</template>

<script>
  import Menu from "./Menu.vue"

  export default {
    name : 'Header' ,
    components: {
    Menu
    },
    data(){
    return {
      isActive: false
    }
  },
  methods: {
    menu(){
      this.isActive=!this.isActive
    },
    closeMenu(){
      this.isActive=false
      this.$emit('closeMenu')
    }
  }
}


</script>

<style>

#headerSection {
  background: #f3f3f3;
  width: 100%;
  height: auto;
  padding: 10px;
  position: fixed;
  top: 0;
}

nav {
  max-width: 768px;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  transform: translate(-100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: #fff;
}

nav.open {
  transform: translateX(0);
  position: fixed;
  z-index: 10;
}

/* ボタンタグ設定 */
button {
  display: block;
  background: none;
  border: none;
  padding: 0;
  width: 30px;
  color: #333;
  font-size: 8px;
  letter-spacing: 0.1em;
  cursor: pointer;
  text-align: left;
  outline: none;
}

/* ハンバーガーボタン3本線 */
button span.bar {
  display: block;
  height: 2px;
  background-color: #333;
  margin: 10px 0;
  transition: all 0.2s;
  transform-origin: 0 0;
}

/* メニューアクティブ時 */
button.active span.bar {
  width: 49px;
}

button.active .bar1 {
  transform: rotate(40deg);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1001;
}

button.active .bar2 {
  opacity: 0;
}

button.active .bar3 {
  transform: rotate(-40deg);
  position: fixed;
  right: 0;
  z-index: 1001;
}

</style>
