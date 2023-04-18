<template>
    <div>
        <div class="canvas-container"></div>
        <h2> {{ Skillname }}</h2>

    </div>
  </template>
  
  
  <script>
  import { Vue3D, THREEObject } from 'vue3d';
 

  export default {
    components: {
      Vue3D,
      THREEObject,
    },
    props : {
        
        Skillname : {
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
}

  </style>
  