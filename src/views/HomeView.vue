<template>
  <div class="container">
    <h1>Bienvenue sur mon portfolio</h1>
    <p>Je m'appelle <b>Hugo Jacquel</b>, je suis étudiant en informatique en <b>BTS SIO 2 </b> à <b> l'Institution des Chartreux</b></p>
    <p> À travers ce site web , vous pourrez explorer mes <router-link to="/projects"> projets</router-link> et découvrir mes <router-link to="skills"> compétences</router-link></p>
    <p>Par la suite, je poursuiverai avec le <b>cycle ingénieur informatique et cybersécurité (ICS)</b> à l'école <b>CPE Lyon</b>.</p>

    
    <p> Vous pourrez plus de détail dans la section <router-link to="/about">About</router-link></p>
  </div>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>


<style scoped>



</style>
