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


import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import csharp from '../assets/csharp.png'
import python from '../assets/python.png'
import ocaml from '../assets/ocaml.png'
import git from '../assets/git.png'
import unix from '../assets/unix.png'
import electron from '../assets/electron.png'
import docker from '../assets/docker.png'

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import vue3 from '../assets/vue3.png'


import mariadb from '../assets/mariadb.png'
import mysql from '../assets/mysql.png'
import nodejs from '../assets/nodejs.jpg'
import php from '../assets/php.png'


export default {
  name : "Circle",
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
        else if(this.Textid == "c"){
          return c;
        }
        else if(this.Textid == "cpp"){
          return cpp;
        }
        else if(this.Textid == "csharp"){
          return csharp;
        }
        else if(this.Textid == "python"){
          return python;
        }
        else if(this.Textid == "ocaml"){
          return ocaml;
        }
        else if(this.Textid == "git"){
          return git;
        }
        else if(this.Textid == "unix"){
          return unix;
        }
        else if(this.Textid == "electron"){
          return electron;
        }
        else if(this.Textid == "html"){
          return html;
        }
        else if(this.Textid == "css"){
          return css;
        }
        else if(this.Textid == "js"){
          return js;
        }
        else if(this.Textid == "bootstrap"){
          return bootstrap;
        }
        else if(this.Textid == "vue3"){
          return vue3;
        }
        else if(this.Textid == "mariadb"){
          return mariadb;
        }
        else if(this.Textid == "mysql"){
          return mysql;
        }
        else if(this.Textid == "nodejs"){
          return nodejs;
        }
        else if(this.Textid == "php"){
          return php;
        }
        else if(this.Textid == "docker"){
          return docker;
        }
      }
    }
  },
  mounted() {



const canvas = this.$refs.canvas;
const container = canvas.parentNode;
const width = container.clientWidth - 10;
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
// Création du cercle avec une texture personnalisée


const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load(this.getTexture())


const geometry = new THREE.CircleGeometry( 3, 128 );
const material = new THREE.MeshBasicMaterial( { map: texture , alphaTest : 1} );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );




const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);


// Animation de la scène
let angle = 0; // Angle initial
const duration = 5; // Durée de l'animation en secondes
// Animation de la scène
var startTime = Date.now(); // Ajouter cette ligne avant la fonction animate

const animate = function () {
  requestAnimationFrame(animate);

  const elapsedTime = Date.now() - startTime;
  const angle = (elapsedTime / 8000) * Math.PI * 2;
  
  circle.rotation.y = angle;
  circle.rotation.x = 0;
  circle.rotation.z = 0;
  

  renderer.render(scene, camera);
};



animate();
}

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
background: rgba(0,0,0,0.000000000000000000001);
}

</style>
