<template>
  <div id="mainSection">
    <div
      id="userName"
      class="whiteText"
    >
      Haru Sato
    </div>
    <div
      id="companyName"
      class="whiteText"
    >
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

#mainSection {
  background: linear-gradient(180deg, #151a61, #040c1b);
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  margin-top: -5px;
  min-height: 200px;
  border-bottom: solid 1px #cbcbcb;
}

#userName,
#companyName {
  font-size: 18pt;
}

#profilePicture {
  border-radius: 50%;
  width: 128px;
  height: 128px;
}

</style>
