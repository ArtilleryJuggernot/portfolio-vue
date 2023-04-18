<template>
    <div>
    <Cone
    Textid="c" />
    </div>
  </template>
  

<script>

import Cone from '../components/Cone.vue';
export default ({
    components: { Cone }
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
  