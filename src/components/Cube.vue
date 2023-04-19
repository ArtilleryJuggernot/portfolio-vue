<template>
    <div>
        <div class="canvas-container">
      <canvas ref="canvas"></canvas>
    </div>
    <br>
    <br>
    <br>
    </div>
  </template>
  
  
  <script>
  import * as THREE from 'three';
  import { Vue3D, THREEObject } from 'vue3d';
 
  import chartreux from '../assets/cursus/chartreux.jpeg';
  import epita from '../assets/cursus/Epita.jpg';
  import school42 from '../assets/cursus/42.jpg'
  import rouviere from '../assets/cursus/paca.jpg'
  export default {
    name : "Cube",
    components: {
      Vue3D,
      THREEObject,
    },
    props : {
        Textid : {
            type : String,
            required : true
        }

    },
    data(){
      return {
        getTexture(){
          if(this.Textid == "chartreux"){
            return chartreux;
          }
          else if(this.Textid == "epita"){
            return epita;
          }
          else if(this.Textid == "school42"){
            return school42;
          }
          else if(this.Textid == "rouviere"){
            return rouviere;
          }
        }
      }
    },
    mounted() {



const canvas = this.$refs.canvas;
  const container = canvas.parentNode;
  const width = container.clientWidth;
  const height = container.clientHeight;
  // Création de la scène
// Création de la scène
const scene = new THREE.Scene();


  // Création de la caméra
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5

  // Création du rendu
  const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas , alpha: true})
  renderer.setSize(width, height);
  //renderer.setClearColor(0x000000)
  //scene.background.alpha = 0;
  // Création du cube avec une texture personnalisée
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(this.getTexture())
  
  const geometry = new THREE.BoxGeometry(2, 2, 2 )
  const material = new THREE.MeshBasicMaterial({ map: texture , alphaTest : 1})
  material.alphaTest = 1;
  const cube = new THREE.Mesh(geometry, material)
  cube.rotation.x = Math.PI / 4;
  cube.rotation.y = Math.PI / 4;
  scene.add(cube)
  
  
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 1).normalize();
  scene.add(light);


  // Ajout d'un gestionnaire d'événement pour la rotation du cube à la souris
  let mouseX = 0, mouseY = 0
  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX - window.innerWidth / 2
    mouseY = event.clientY - window.innerHeight / 2
  })

  // Animation de la scène
  const animate = function () {
    requestAnimationFrame(animate)

    // Mise à jour de la rotation du cube en fonction des mouvements de la souris
    cube.rotation.x = mouseY * 0.005
    cube.rotation.y = mouseX * 0.005

    renderer.render(scene, camera)
    
  }

  animate()
}

,
  };
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
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(141,141,193,1) 0%, rgba(120,144,217,1) 32%, rgba(95,193,225,1) 66%, rgba(50,65,239,1) 100%, rgba(0,212,255,1) 100%); 

}

  </style>
  