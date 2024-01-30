<template>
    <h1>Liste des projets personnels :</h1>

    <Project
    ProjectName="Zeus"
    ProjectDescription="Application SaaS de gestion de notes, dossier, tâches et projets 
    collaborative avec possibilité d'extensibilité sous forme de module. Système d'Organisation
    optimale sous forme de catégorie et de recherche rapide"
    ProjectImg="Zeus.jpeg"
    ProjectDate="(Novembre 2023)"
    ProjectLink="https://github.com/ArtilleryJuggernot/Zeus"
    ProjectTech="Laravel, Laravel Fortify, JS, Ajax, MariaDB, System File"
    />

    <Project
    ProjectName="Nebula Noodle"
    ProjectDescription="Initiation au framework Laravel, intranet pour un jeu 
    vidéo RPG fictif avec système de boutique, marché entre les joueurs , système de 
    sort et d'item et spécialisation"
    ProjectImg="NN_logo.png"
    ProjectDate="(Octobre 2023)"
    ProjectLink="https://github.com/ArtilleryJuggernot/nebula_noodle"
    ProjectTech="Laravel, Laravel Fortify, JS, Ajax, MariaDB"
    />


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


    <Project
    ProjectName="Libft"
    ProjectDescription="Réimplémentation des fonctions de la librairie standard en c, il s'agit d'un projet de l'école 42.
    <br> Le projet est réalisé en C et doit être optimisé au maximum et ne doit pas avoir de fuite de mémoire."
    ProjectLink="https://github.com/MrHugojuggernot/Libft"
    ProjectImg="42.jpg"
    ProjectDate="(Septembre 2022)"
    ProjectTech="C"
    />



    <Project
    ProjectName="BSQ (Biggest SQuare)"
    ProjectDescription="BSQ est un projet à faire en 24h top chrono en groupe de 2 (Projet final de piscine 42). L'objectif est de trouver le plus grande carrée de caractère dans un fichier passé en paramètre ou dans le stdin
    <br> Le projet est réalisé en C et doit être optimisé au maximum et ne doit pas avoir de fuite de mémoire. Pour ce projet, on utilise du parsing et du lexing ainsi que du backtracking pour la vérification du carée."
    ProjectLink="https://github.com/MrHugojuggernot/BSQ"
    ProjectImg="42.jpg"
    ProjectDate="(Aout 2022 (24h))"
    ProjectTech="C"
    />


    <Project
    ProjectName="Piscine 42 en C et Shell"
    ProjectDescription="La piscine est un marathon de programmation sur un mois, il s'agit de l'examen d'entrée pour l'école 42
    <br> La piscine est composé de plusieurs mini-projet pour étudier les notions en algorithmies,en structure de données ainsi que les notions avancées en programmation (pointeur , pointeur de fonction par exemple) en C et en Shell"
    ProjectLink="https://github.com/MrHugojuggernot/C-Pool"
    ProjectImg="42.jpg"
    ProjectDate="(Aout 2022)"
    ProjectTech="C, Shell"
    />

    <Project
    ProjectName="CalC"
    ProjectDescription="Calculatrice en C en ligne de commande, utilisation du parsing et du lexing pour la gestion des opérations et des priorités."
    ProjectLink="https://github.com/MrHugojuggernot/CalC"
    ProjectImg="CalC.jpg"
    ProjectDate="(Juillet 2022)"
    ProjectTech="C"
    />


    <Project
    ProjectName="Task Manager | Discord Bot"
    ProjectDescription="Bot discord permettant de gérer des tâches.
    <br> Les tâches sont sérialisés sur un fichier de données sur un serveur pour être conservé même si le bot est redémarré.
    <br> L'objectif de ce projet était d'apprendre le parsing de donnée grâce à la librairie Discord.py et Discord.js 
    <br> et de pouvoir sérialiser en utilisant JSON et numpy."
    ProjectLink=""
    ProjectImg="discord-js.png"
    ProjectDate="(Avant 2020)"
    ProjectTech="Python, Discord.py Numpy , Javascript , Discord JS, JSON"
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