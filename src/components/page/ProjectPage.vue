<template>
    
<h1>Listes des projets :</h1>

<!--

<h2><router-link to="/schoolproject">Projets scolaires</router-link></h2>


<h2></h2>

-->

<div class="container">
  <a class="button">
    <img src="" alt="">
    <router-link class="button" to="/schoolproject"><h2>Projets scolaires</h2></router-link>
  </a>
  <a class="button">
    <img src="" alt="">
    <router-link class="button" to="/personalproject"><h2>Projets personnels</h2></router-link>
  </a>
</div>



</template>


<script>

export default ({
    setup() {
        
    },
})
</script>


<style scoped>


.container {
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 600px;
  
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
}

.button img {
  width: 100%;
  height: auto;
  max-height: 100%;
  
}

.button h2 {
  margin-top: 20px;
}



</style>