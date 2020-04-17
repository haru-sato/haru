<template>
  <div id="drawerSection">
    <span
      id="drawerButton"
      class="css-bar"
    />
    <ul id="drawerMenuSection">
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#app"
          @click="clickSmoothScroll()"
        >Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#aboutSection"
          @click="clickSmoothScroll()"
        >About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#skillSection"
          @click="clickSmoothScroll()"
        >Skill Sets</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#visionSection"
          @click="clickSmoothScroll()"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name : 'Menu' ,
    data(){
    return {
      isActive: true
    }
  },
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        'y'
      );
      this.$emit('sample')
    }
  }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

#drawerSection {
  background: #f3f3f3;
  width: 100%;
  max-width: 768px;
}

#drawerMenuSection {
  background: #fff;
  width: 100%;
  height: auto;
  margin-top: 60px;
  padding-left: 0;
}

#drawerMenuItem {
  background: #fff;
  width: 100%;
  height: 50px;
  border-bottom: 0.1px solid #707070;
}

#drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  text-decoration: none;
  display: block;
  position: relative;
  top: 10px;
}

#drawerButton {
  background-color: #f3f3f3;
  width: 100%;
  max-width: 768px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
}

li {
  display: block;
}
</style>
