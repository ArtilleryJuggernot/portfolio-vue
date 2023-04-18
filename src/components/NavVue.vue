<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/scolarity">Scolarité</router-link> |
    <router-link to="/skills">Skills</router-link> |
</nav>
  <router-view/>
</template>

<script>
export default {
  name: 'NavVue'
}

</script>

<style scoped>

</style>