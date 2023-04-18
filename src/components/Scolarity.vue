<template>






    <h1>Scolarité</h1>
    <div class="content-sco">
    <Cursus 
    cursusName="BTS SIO 1" 
    institutionName="Institution des Chartreux"
    date="Septembre 2022 - Aujourd'hui | Croix Rousse, Lyon 69001" 
    />

    <p>Initiation et pratique de la <b>gestion de base de donnée</b>, de <b>l'administration système et réseaux</b>.
        <br>
        <br>
        <b>Spécialité SLAM (Solutions Logicielles et Applications Métiers)</b> : Développement d'applications web et de logiciels.
        <br>
        <br>
        Technologies utilisées : <b>C# , Python, PHP , HTML, CSS , Javascript</b>
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

    <Cube 
    Textid="epita" />

    <Cursus
    Textid="rouviere"
    cursusName="Baccalauréat Scientifique"
    institutionName="Lycée Polyvalent Rouvière"
    date="Septembre 2018 - Juin 2021 | Toulon 83000"
    />

    <Cube 
    Textid="rouviere" />
    
    



    </div>
</template>


<script>
import Cursus from './Cursus.vue';
import Cube from './Cube.vue';
import Cone from './Cone.vue';

export default ({
    components : {
    Cursus,
    Cube,
    Cone,
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