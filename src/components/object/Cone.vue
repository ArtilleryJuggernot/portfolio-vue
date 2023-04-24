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


import c from '../../assets/skills/c.png'
import cpp from '../../assets/skills/cpp.png'
import csharp from '../../assets/skills/csharp.png'
import python from '../../assets/skills/python.png'
import ocaml from '../../assets/skills/ocaml.png'
import git from '../../assets/skills/git.png'
import unix from '../../assets/skills/unix.png'
import electron from '../../assets/skills/electron.png'
import docker from '../../assets/skills/docker.png'

import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import vue3 from '../../assets/skills/vue3.png'


import mariadb from '../../assets/skills/mariadb.png'
import mysql from '../../assets/skills/mysql.png'
import nodejs from '../../assets/skills/nodejs.jpg'
import php from '../../assets/skills/php.png'


import virtualbox from '../../assets/skills/virtualbox.png'
import vmware from '../../assets/skills/vmware.jpg'
import oraclecloud from '../../assets/skills/oraclecloud.jpg'


import latex from '../../assets/skills/latex.png'
import markdown from '../../assets/skills/markdown.png'
import obsidian from '../../assets/skills/obsidian.png'
import notion from '../../assets/skills/notion.png'

import blender from '../../assets/skills/blender.png'
import photoshop from '../../assets/skills/photoshop.jpg'
import unity from '../../assets/skills/unity.jpg'

import numpy from '../../assets/skills/numpy.png'
import vs from '../../assets/skills/vs.jpg'

import wordpress from '../../assets/skills/wordpress.jpg'
import office from '../../assets/skills/office.png'
import threejs from '../../assets/skills/threejs.png'
import uml from '../../assets/skills/uml.png'
// blender
export default {
  name : "Circle",
  components: {
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
        else if(this.Textid == "virtualbox"){
          return virtualbox;
        }
        else if(this.Textid == "vmware"){
          return vmware;
        }
        else if(this.Textid == "oraclecloud"){
          return oraclecloud;
        }
        else if(this.Textid == "latex"){
          return latex;
        }
        else if(this.Textid == "markdown"){
          return markdown;
        }
        else if(this.Textid == "obsidian"){
          return obsidian;
        }
        else if(this.Textid == "notion"){
          return notion;
        }
        else if(this.Textid == "blender"){
          return blender;
        }
        else if(this.Textid == "photoshop"){
          return photoshop;
        }
        else if(this.Textid == "unity"){
          return unity;
        }
        else if(this.Textid == "numpy"){
          return numpy;
        }
        else if(this.Textid == "vs"){
          return vs;
        }
        else if(this.Textid == "wordpress"){
          return wordpress;
        }
        else if(this.Textid == "office"){
          return office;
        }
        else if(this.Textid == "threejs"){
          return threejs;
        }
        else if(this.Textid == "uml"){
          return uml;
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
var startTime = Date.now(); // Ajouter cette ligne avant la fonction animate

const animate = function () {
  requestAnimationFrame(animate);

  const elapsedTime = Date.now() - startTime;
  let angle;

  if (elapsedTime < 1500) {
    angle = (elapsedTime / 12000) * Math.PI * 2;
  } else if (elapsedTime < 6000) {
    angle = ((elapsedTime - 1500) / 2000) * Math.PI * 1.25 + Math.PI * 0.5;
  } else {
    angle = ((elapsedTime - 4200) / 4200) * Math.PI * 2.5 + Math.PI * 1.75;
  }

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
opacity: 1;
}

</style>
