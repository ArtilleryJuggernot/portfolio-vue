<template>
  <div class="about-me">
  <img src="../assets/img/Me.jpg" alt="Hugo Jacquel">
  <div class="text">
    <h2>À propos de moi</h2>
    <h3>Développeur Fullstack Vue 3</h3>
    <h3>Étudiant en BTS SIO 2 option SLAM (Développement) à l'Institution des Chartreux, Croix-Rousse (Lyon)</h3>
    <p>
      Principalement intéressé dans le développement low-level (C , C++), 
      et les différents aspects sécurités qui sont lié à chaque sous domaine de l'informatique 
      (notamment les concepts de reverse-engineering, analyse de CVE, exploitation de payload sur 
      différents axe que ce soit injection SQL ou XSS, élévation de privilège , RCE , etc.) , 
      je consacre désormais une partie de mon domaine d'étude aux réseaux informatiques, 
      au développement web (notamment avec l'apprentissage des framework JavaScript adapté en fonction des besoins) ,
      et à d'autres sous domaines lié à l'informatique (comme l'OSINT et la théorie du signal). 

    </p>
    <p>L'aspect cybersécurité est pour moi primordial dans l'utilisation de n'importe quelle technologie, c'est une valeur essentiel à mes yeux de réaliser de la veille cyber chaque jour. 
      À travers ce porfolio, vous pourrez découvrir une partie de mes projets publiques ainsi que mes compétences (langages de programmations, framework, outils , logiciels, etc.) 
      Vous pourrez retrouver à la fin de chaque page, des liens vers mes réseaux professionnels (Linkedin, Github , Mail).</p>
  
    <p>
      J'accorde personnellement une importance toute particulière à la parole et à la qualité 
      des relations humaines dans la vie de tous les jours que ce soit professionnellement et personnellement. 
    </p>


    <h4>Recherche de stage 2024 | Fin de cursus BTS SIO</h4>


    <p>
      Pour préparer la suite de mes études pour valider mon BTS SIO en 2ième année,
      je suis à la recherche d'un stage de 8 semaines dans l'informatique (principalement dans le développement 
      front/back end web/software, cybersécurité, base de donnée). 
      <br><br>

      <br><br>
      Les dates de ce stage sont suceptible de changer (basée sur celle de l'année 2023) : 26 février au 19 avril 2024 .
    </p>
  

    Par la suite, je poursuiverai avec le <b>cycle ingénieur informatique et cybersécurité (ICS)</b> à l'école <b>CPE Lyon</b>.


    <p>Ci-desous, retrouvez mon CV (réalisé à l'occasion pour mon stage de Juin 2023 que j'ai trouvé)</p>


<div class="pdf-link">
  <img src="../assets/img/pdf.png" alt="PDF">
  <a href="CV.pdf" download="CV Hugo Jacquel.pdf" target="_blank">CV Hugo Jacquel Septembre 2022</a>
</div>


    </div>
</div>

</template>


<script>


export default ({
  setup() {
    
  },
})
</script>


<style scoped>
.about-me {
  display: flex;
  align-items: center;
}

.about-me img {
  width: 300px;
  height: auto;
  margin-right: 30px;
}

.about-me .text {
  flex: 1;
}

.about-me h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-me p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.pdf-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #007acc;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.pdf-link img {
  width: 20px;
  height: 20px;
}


</style>
