<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/scolarity">Scolarité</router-link> |
    <router-link to="/experience">Stage & Expérience</router-link> |
    <router-link to="/skills">Skills</router-link> |
    
    <br>
    <br>
    <router-link to="/projects">Projets</router-link> |
    <router-link to="/distro">Distributions UNIX</router-link> | 
    <router-link to="/certification">Certification</router-link> |
    <router-link to="/contact">Contact</router-link>
    
</nav>
  <router-view/>
</template>

<script>
export default {
  name: 'NavVue'
}


// TODO : Citation thlr : https://www.youtube.com/watch?v=4rQqUkqkY8M

</script>

<style scoped>

</style>