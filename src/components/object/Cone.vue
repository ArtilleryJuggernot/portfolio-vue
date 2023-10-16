<template>
  <div>
    <img :src="require(`@/assets/skills/${Textid}`)" class="rotate360">
  </div>
  
</template>
<script>

// blender
export default {
  name : "Circle",
  components: {
  },
  props : {
      Textid : {
          type : String,
          required : true
      },

  },
}


</script>

<style>
  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  .canvas-container {
flex: 1;
width: 100%;
aspect-ratio: 1/-1;
padding-bottom: -70%; 
background: rgba(0,0,0,0.000000000000000000001);
opacity: 1;
}

.rotate360 {
  transform: rotate(360deg);
  transition: transform 2s; /* Pour ajouter une animation de rotation */
  max-width: 100px;
  max-height: 100px;
  margin: 2cm;
}


</style>
