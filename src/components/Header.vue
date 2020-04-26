<template>
  <div id="headerSection">
    <!-- <div class = "iconMenu" style = "transform-origin 0px 0px 0px;
    transform: matrix(1,0,0,1,0,0);"> -->
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
  background: none;
  width: 100%;
  height: auto;
  padding: 10px;
  position: fixed;
  top: 0;
}

nav {
  max-width: 768px;
  width: 200px;
  height: 200px;
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

button .bar {
  display: inline-blockblock;
  position: relative;
}

/* ハンバーガーボタン3本線 */
button span.bar {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 4px;
}

button span.bar::after {
  position: absolute;
  top: 100%;
  left: 100%;
  display: block;
  content: '';
  width: 40px;
  height: 40px;
  margin: -26px 0 0 -38px;
  border-radius: 50%;
  border: 4px solid transparent;
  transition: all 0.4s;
}

/* メニューアクティブ時 */
button.active span.bar {
  width: 30px;
  background-color: black;
}

button.active .bar1 {
  -webkit-transform: translateY(10px) rotate(-45deg);
  transform: translateY(10px) rotate(-45deg);
  z-index: 1001;
}

button.active .bar2 {
  left: 60%;
  opacity: 0;
  -webkit-animation: active-menu-bar02 0.8s forwards;
  animation: active-menu-bar02 0.8s forwards;
}

@-webkit-keyframes active-menu-bar02 {
  100% {
    height: 0;
  }
}

@keyframes active-menu-bar02 {
  100% {
    height: 0;
  }
}

button.active .bar3 {
  -webkit-transform: translateY(-15px) rotate(45deg);
  transform: translateY(-15px) rotate(45deg);
  z-index: 1001;
}

button.active span.bar::after {
  -webkit-animation: circle 0.4s 0.4s forwards;
  animation: circle 0.4s 0.25s forwards;
}

@-webkit-keyframes circle {
  0% {
    border-color: transparent;
    -webkit-transform: rotate(0);
  }

  25% {
    border-color: transparent black transparent transparent;
  }

  50% {
    border-color: transparent black black transparent;
  }

  75% {
    border-color: transparent black black black;
  }

  100% {
    border-color: black;
    -webkit-transform: rotate(-680deg);
  }
}

@keyframes circle {
  0% {
    border-color: transparent;
    transform: rotate(0);
  }

  25% {
    border-color: transparent black transparent transparent;
  }

  50% {
    border-color: transparent black black transparent;
  }

  75% {
    border-color: transparent black black black;
  }

  100% {
    border-color: black;
    transform: rotate(-680deg);
  }
}
</style>
