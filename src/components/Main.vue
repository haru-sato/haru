<template>
  <div id = "mainSection">
    <div id= "userName">Haru Sato</div>
    <div id= "companyName">Seattle Consulting</div>
    <img id= "profilePicture" src="../assets/profilePicture.jpeg">
  </div >
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
  #mainSection{
      background: linear-gradient(180deg,#80E1F7, #06C1E6);
      width: 100%;
      height: auto;
      padding-bottom: 30px;
      text-align: center;
  }
  #userName,#companyName{
      color :#FFFFFF;
      font-family: Noto Sans;
      font-weight: bold;
      font-size: 18pt;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  }
  #profilePicture{
      border-radius: 50%;
      width: 64px;
      height: 64px;
  }
  div#mainSection {
  margin-top: 60px;
  min-height: 200px;
  border-bottom: solid 1px #cbcbcb;
}

</style>