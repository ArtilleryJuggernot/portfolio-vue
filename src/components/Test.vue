<template>
    <Cylindre
    Textid="arch" />
    <Cube 
    Textid="chartreux" />
  </template>
  

<script>

import Cube from './Cube.vue';
import Cylindre from './Cylindre.vue';
export default ({
    components: { Cylindre , Cube}
})
</script>




<style>



.page-wrapper {
    display: flex;
    flex-direction: row;
  }
  
  .left, .right {
    flex: 1;
    height: 500vh;
    opacity: 70%;
    background-image: url("../assets/bg.jpg");
  }
  
  .content {
    flex: 3;
  }
  </style>
  