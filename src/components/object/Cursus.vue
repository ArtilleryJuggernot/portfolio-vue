<template>
    <div>
        <div class="canvas-container"></div>
        <h2> {{ cursusName }}</h2>
        <h3> {{ institutionName }}</h3>
        <h4> {{ date }}</h4>

    </div>
  </template>
  
  
  <script>
 

  export default {
    components: {
    },
    props : {
        
        cursusName : {
            type : String,
            required : true
        },
        institutionName : {
          type : String,
          required : true
        },
        date : {
          type : String,
          required : true
        }

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
  