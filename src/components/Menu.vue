<template>
  <div id="drawerSection">
    <span
      id="drawerButton"
      class="css-bar"
    ><img src="#"></span>
    <ul id="drawerMenuSection">
      <li
        id="drawerMenuItem"
        style="list-style: disc;"
      >
        <a
          id="drawerMenuItemLink"
          href="#"
        >Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#"
        >About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#"
        >Skill Sets</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name : 'Menu' ,
    props:{
    msg: String
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

#drawerSection {
  background: #f3f3f3;
  width: 100%;
  height: auto;
}

#drawerMenuSection {
  background: #fff;
  width: 100%;
  height: auto;
}

#drawerMenuItem {
  background: #fff;
  width: 100%;
  height: 50px;
}

#drawerMenuItemLink {
  background: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
}

</style>
