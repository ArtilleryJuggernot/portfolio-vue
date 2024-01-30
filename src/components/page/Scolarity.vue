<template>

    <h1>Scolarité</h1>
    <div class="content-sco">
    <Cursus 
    cursusName="BTS SIO 2" 
    institutionName="Institution des Chartreux"
    date="Septembre 2022 - Aujourd'hui | Croix Rousse, Lyon 69001" 
    />

    <p>Initiation et pratique de la <b>gestion de base de donnée</b>, de <b>l'administration système et réseaux</b>.
        <br>
        <br>
        <b>Spécialité SLAM (Solutions Logicielles et Applications Métiers)</b> : Développement d'applications web et de logiciels.
        <br>
        <br>
        Technologies utilisées : <b>C# , Python, PHP , HTML, CSS , Javascript, Laravel, Java, SonarQube, Framework de TDD, Cisco Packet Tracer, Laravel</b>
    </p>
    
    <Cube 
    Textid="chartreux" />
    
    


    <Cursus
    Textid="school42"
    cursusName="Piscine de C & Shell"
    institutionName="42 Lyon Auvergne Rhône Alpes"
    date="Aout 2022 (1 mois) | Charbonnières-les-Bains, 69400"
    />


    <p>
        Participation à la Piscine (marathon de programmation) de C et Shell sur 1 mois.
        <br>
        <br>
        <b>Objectif :</b> Apprendre à coder en C et Shell, gagner en <b> autonomie </b>
        <br>
        et <b>rapidité</b> pour programmer & sur la recherche dans les documentations.
        <br>
        <br>
        <b>Technologies utilisées :</b> <b>C, Shell</b>

    </p>

    <Cube 
    Textid="school42" />


    


    <Cursus 
    Textid="epita" 
    cursusName="Prepa Math & Informatique"
    institutionName="EPITA LYON"
    date="Septembre 2021 - Juin 2022 | Lyon 69003"
    />


    <p>
      Préparation aux écoles d'ingénieurs avec une initiation à la programmation avec la <b>pédagogie par projet</b> 
      pour étudier l'algorithmie et la programmation orientée objet. 
      <br><br>
      Le tout accompagné avec un <b>apprentissage appronfondie en Mathématique , Physique et Electronique</b>
      <br><br>
      <b>Technologies utilisées :</b> <b>C#, Ocaml, LaTeX, Python, HTML, CSS, Javascript (+ React)</b>
    </p>



    <Cube 
    Textid="epita" />





    <Cursus
    Textid="rouviere"
    cursusName="Baccalauréat Scientifique"
    institutionName="Lycée Polyvalent Rouvière"
    date="Septembre 2018 - Juin 2021 | Toulon 83000"
    />


    <p>
      Cursus de terminal avec spécialités <b>Mathématique, Numérique Sciences Informatique et l'option Mathématique Expert</b>.
      <br><br>
      Aprentissage et consolidation de Python, SQL et des bases en algorithmie et en structure de données
      <br><br>
      <b>Technologies utilisées :</b> <b>Python, SQL, HTML, CSS, Javascript</b>
    </p>

    <Cube 
    Textid="rouviere" />
    
    



    </div>
</template>


<script>
import Cursus from '../object/Cursus.vue';
import Cube from '../object/Cube.vue';
import Cylindre from '../object/Cylindre.vue';
export default ({
    components : {
    Cursus,
    Cube,
    Cylindre
},
})
</script>


<style scoped>
/*
.content-sco {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.content-sco > * {
  flex-basis: calc(33.33% - 1rem);
  margin-bottom: 1rem;
}
*/
</style>