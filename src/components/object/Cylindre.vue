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

import arch from '../../assets/distro/arch.png';
import debian from '../../assets/distro/debian.png';
import fedora from '../../assets/distro/fedora.png';
import kali from '../../assets/distro/kali.png';
import mageia from '../../assets/distro/mageia.png';
import manjaro from '../../assets/distro/manjaro.png';
import nixos from '../../assets/distro/nixos.png';
import popos from '../../assets/distro/popos.png';
import redhat from '../../assets/distro/redhat.png';
import ubuntu from '../../assets/distro/ubuntu.jpg';



export default {
  name : "Cylindre",
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
        if(this.Textid == "arch"){
          return arch;
        }
        else if(this.Textid == "debian"){
          return debian;
        }
        else if(this.Textid == "fedora"){
          return fedora;
        }
        else if(this.Textid == "kali"){
          return kali;
        }
        else if(this.Textid == "mageia"){
          return mageia;
        }
        else if(this.Textid == "manjaro"){
          return manjaro;
        }
        else if(this.Textid == "nixos"){
          return nixos;
        }
        else if(this.Textid == "popos"){
          return popos;
        }
        else if(this.Textid == "redhat"){
          return redhat;
        }
        else if(this.Textid == "ubuntu"){
          return ubuntu;
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
const camera = new THREE.PerspectiveCamera(75, (width) / height, 0.1, 1000);
camera.position.z = 5

// Création du rendu
const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas , alpha: true})
renderer.setSize(width, height);
//renderer.setClearColor(0x000000)
//scene.background.alpha = 0;
// Création du cube avec une texture personnalisée
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load(this.getTexture())

const geometry = new THREE.CylinderGeometry( 2, 2, 4, 32 );
//const geometry = new THREE.PlaneGeometry( 6, 6 );
const material = new THREE.MeshBasicMaterial({ map: texture , alphaTest : 1})
material.alphaTest = 1;
const cylindre = new THREE.Mesh(geometry, material)
scene.add(cylindre)


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);


// Animation de la scène
var startTime = Date.now(); // Ajouter cette ligne avant la fonction animate

const animate = function () {
  requestAnimationFrame(animate);

  const elapsedTime = Date.now() - startTime;
  let angle = ((elapsedTime - 8000) / 8000) * Math.PI * 2.5 + Math.PI * 1.75;
  

  cylindre.rotation.y = angle;
  cylindre.rotation.x = 0;
  cylindre.rotation.z = 0;

  renderer.render(scene, camera);
};




animate();
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
aspect-ratio: 1/-1;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(141,141,193,1) 0%, rgba(120,144,217,1) 32%, rgba(95,193,225,1) 66%, rgba(50,65,239,1) 100%, rgba(0,212,255,1) 100%); 

}

</style>
