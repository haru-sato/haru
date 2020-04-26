<template>
  <div id="mainSection">
    <div id="userName">
      Haru Sato
    </div>
    <div id="companyName">
      Seattle Consulting
    </div>
    <img
      id="profilePicture"
      src="../assets/profilePicture.jpeg"
    >
  </div>
</template>

<script>
  export default {
    name : 'Main' ,
    props:{
    msg: String
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP&display=swap');

#mainSection {
  background: linear-gradient(180deg, #151a61, #040c1b);
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  text-align: center;
  margin-top: -60px;
  min-height: 200px;
  border-bottom: solid 1px #cbcbcb;
}

#userName,
#companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
}

#profilePicture {
  border-radius: 50%;
  width: 128px;
  height: 128px;
}

</style>
