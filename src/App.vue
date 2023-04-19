<template>
  <div> 

    <div id="bandeau">
		<h1 id="texte">Hugo Jacquel</h1>
	  </div>

    <NavVue/>
 

</div>

</template>



<script>

import NavVue from './components/NavVue.vue';
export default ({
  components : {
    NavVue,
    
  },
  
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;

  
}


body{
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(141,141,193,1) 0%, rgba(120,144,217,1) 32%, rgba(95,193,225,1) 66%, rgba(50,65,239,1) 100%, rgba(0,212,255,1) 100%); 
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #d54017;
}

#bandeau {
			color: #fff; /* couleur de texte */
			height: 50px; /* hauteur du bandeau */
			overflow: hidden; /* cacher le texte qui dépasse */
			position: relative; /* positionnement relatif pour le texte qui défile */
		}
		
		/* Définir les styles pour le texte */
		#texte {
			font-size: 24px; /* taille du texte */
			position: absolute; /* positionnement absolu pour le texte qui défile */
			top: 0; /* position verticale du texte */
			left: 100%; /* position horizontale initiale du texte */
			animation: defilement 10s linear infinite; /* animation de défilement */
		}
		
		/* Définir l'animation de défilement */
		@keyframes defilement {
			0% {
				left: 100%; /* position horizontale initiale */
			}
			100% {
				left: -100%; /* position horizontale finale */
			}
		}


</style>
