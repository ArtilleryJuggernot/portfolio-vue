<template>
    <h1>Liste des projets personnels :</h1>


    <Project
        ProjectName="Portfolio"
        ProjectDescription="Mon Portfolio réalisé en Vue JS 3 avec un système de routing et de composant. 
        <br> Le portfolio utilise le framework 3D Three JS pour la partie 3D et illustrer des catégories
        <br> Le portfolio représente mes expériences , mes stages , mes projets , mes compétences."
        ProjectImg="vue3.png"
        ProjectDate="(Avril 2022)"
        ProjectTech="Vue 3, Three JS, HTML, CSS, JS"
    />


    <Project 
        ProjectName="RES-Appli"
        ProjectDescription="Application (client lourd/léger Electron JS) de <b>gestion de réservations en ligne </b> selon des contraintes 
        <br> avec des options de personalisation et un système de permission. 
        <br><br> L'objectif étant de créer une application <b> très flexible </b> selon <b> les besoins </b> d'une entreprise en réalisant une <b> maquette </b> et en prenant compte de <b> design adaptatif </b>. 
        <br><br> Le projet fut soutenu par des <b> présentations commerciales </b> ainsi qu'un 
        <br> <b> webinar </b> (présentation technique de l'application et des fonctionnalité)
        <br><br> 1er projet réalisé en groupe de 4 personnes en 4 mois pour entamer la spécialité SLAM en BTS SIO 1"
        ProjectLink="https://github.com/MrHugojuggernot/RESAPPLI-SLAM"
        ProjectImg="resappli.png"
        ProjectDate="(Janvier - Avril 2023)"
        ProjectTech="Figma , HTML, CSS, JS, Electron JS, Node JS (avec intégration SQL possible)"
    />

</template>

<script>

import Project from '../object/Project.vue';

export default ({
    setup() {
        
    },
    components: { Project }
})
</script>


<style scoped>

h1{
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
}

h2{
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

</style>