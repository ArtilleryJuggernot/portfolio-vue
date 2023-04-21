<template>
    <div>
        <div class="canvas-container"></div>
        <h2> {{ Skillname }}</h2>

    </div>
  </template>
  
  
  <script>

  export default {
    components: {
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

h2{
  opacity : 1;
}

  </style>
  