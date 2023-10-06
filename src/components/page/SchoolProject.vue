<template>
    <h1>Liste des projets scolaires :</h1>


    <h2>Institution des Chartreux - BTS SIO 2</h2>
    
    <div id="fireman">
    <Project
        ProjectName="Fireman"
        ProjectDescription="Site web de gestion de casernes et de pompiers basé sur le modèle MVC (Modèle Vue Controller).
        <br> Conçu en PHP avec la réalisation d'un Renderer, Routeur protection contres les failles XSS , CSRF , injection SQL et autres.
        <br> L'objectif était de créer un site web de A-Z en utilisant Bootstrap et comprendre les différentes logiques métiers et applicatives."
        ProjectLink=""
        ProjectImg="fireman.jpg"
        ProjectDate="(Septembre 2024 - Décembre 2024)"
        ProjectTech="HTML, CSS, PHP, SQL , BootStrap"
    />
    </div>


    <h2>Institution des Chartreux - BTS SIO 1</h2>

    <div id="res-appli">
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
    </div>

    <Project 
        ProjectName="Prixy - Infrastructure & Modélisation de la base de donnée"
        ProjectDescription="Ce projet a pour but de découvrir les spécialité SLAM et SISR du BTS SIO en réalisant deux sous-projets simultanément : 
        <br><br> <b> - SISR / Infrastructure </b> : Installation et configuration d'un serveur Windows Serveur 2019 avec Active Directory et des GPO selon les contraintes / besoins de l'entreprise. Travail réalisé sur VMWare Workstation.
        <br><br> <b> - SLAM / Modélisation de la base de donnée </b> : Modélisation de la base de donnée d'une entreprise selon les besoins de l'entreprise.
        <br> Ainsi que le développement d'une maquette ainsi qu'un dossier de choix pour proposer à l'entreprise plusieurs solutions notamment sur le design adaptatif"
        ProjectDate="(Septembre 2022 - Décembre 2022)"
        ProjectImg="prixy.png"
        ProjectTech="Figma, Windows Serveur, VMWare Workstation, Active Directory, GPO, SQL"    
    />


    <Project
        ProjectName="TP C# | Python | PHP et Web"
        ProjectDescription="TP C#, Python, PHP , HTML , CSS , Javascript réalisé tout au long de l'année de BTS SIO 1. 
        <br><br> Les TP <b> Python </b> réalisé dans le but de travailler <b> l'algorithmie </b> pour préparer la spécialité <b> SLAM </b> : Etudier les <b> différents types de structures de données </b> en réalisant des algorithmes basés puis plus poussé  
        (tri, recherche d'arbre binaire, opérations sur les matrices, triangle de pascal).
        
        <br><br> Les TP <b> C# </b> réalisé dans le but de travailler la <b> programmation orientée objet (POO) </b>, leurs représentations <b> UML </b> , les différents design patterns
        ainsi que les notions fondamentales de POO (héritage, polymorphisme, encapsulation, abstraction).
        
        <br><br> Les TP <b> PHP </b> et <b> Web </b> réalisé dans le but de s'entrainer sur la <b> programmation web </b> (structure HTML et style CSS), scripting <b> Javascript </b> (pour rendre les sites <b> dynamique </b>) ainsi que PHP pour apprendre à gérer la transmission de données entre le client et le serveur (back-end) et pouvoir protéger les données contre les différentes attaques."
        
        ProjectImg="chartreux.jpeg"
        ProjectDate="(Septembre 2022 - Juin 2023)"
        ProjectTech="C#, Python, PHP , HTML, CSS, Javascript"
    />

    <h2>Prepa EPITA - 1ere année (SUP)</h2>

    <Project
    ProjectName="Jeu vidéo Equinox"
    ProjectDescription="Projet S2 réalisé en groupe de 4 personnes. Jeu C# Survie-horreur réalisé sur Unity avec le framework de gestion multijoueur Mirror.
    Le projet est supporté par des soutenances orales, des rapports de soutenances et un cahier des charges rédigés en LaTeX. 
    
    <br><br> Objectif : Réaliser un jeu multijoueur en réseau et mettre en pratique nos connaissances en POO appris pendant l'année"
    ProjectImg="equinox.jpg"
    ProjectDate="(Janvier 2022 - Juin 2022)"
    ProjectTech="C#, Unity, Framework Mirror, LaTeX"
    ProjectLink="https://github.com/ProjetS2-epita/Equinox"
    />

    <Project
    ProjectName="Abacus"
    ProjectDescription="Calculatrice en Notation polonaise inverse (RPN) réalisé en C#. L'objectif est de créer un programme qui calculer des expressions mathématiques en notation polonaise inverse (RPN) en utilisant les structure de donnée 'piles' (stack) et d'afficher le résultat
    <br><br> Exemple :
    <br> Entrée :  7 8 6 - *  
    <br> Résultat : 14 

    <br><br> Le programme doit pouvoir identifier et tokeniser les entrées de l'utilisateur, les stocker dans les piles, transformer l'expression en arithmétique classique et la calculer (il doit aussi pouvoir détecter les erreurs de syntaxe et les afficher à l'utilisateur).
    <br><br> Transformation de 7 8 6 - *  en (7 * (8 - 6)
    <br><br> Objectif : apprendre le parsing et le lexing"
    ProjectImg="csharp.png"
    ProjectDate="(Juin 2022)"
    ProjectTech="C#"
    />


    <Project
    ProjectName="AFIT"
    ProjectDescription="AFIT (Arithmétique For IT) est un projet d'algorithmes d'opérations arithmétique à implémenter en Ocaml : Arithmétique classique, Bézout, PGCD, tests et génération de nombres premiers, RSA, El gamal, César, théorème des restes chinois (et autres).
    <br><br> Programmer les fonctions pour la base 10 puis pour la base 2 (scalable) puis utiliser le framework Zarith pour pouvoir gérer des nombres de très grande taille.
    <br><br> Résumé du projet disponible <a href='https://maths.prepa.cri.epita.fr/' target='_blank'>ici</a>"
    ProjectImg="Epita.jpg"
    ProjectLink="https://github.com/MrHugojuggernot/AFIT"
    ProjectDate="(Septembre 2021 - Décembre 2021)"
    ProjectTech="Ocaml, Framework Zarith"
    />

    <Project
    ProjectName="TP C# | Python"
    ProjectDescription="Les TP C# et Python permettent de travailler l'algorithmie et la programmation orientée objet (POO) sous la forme de différents exercice : pendu, gestion de fichier, multithreading, aes encryption, pathfinding, etc."
    ProjectImg="Epita.jpg"
    ProjectDate="(Septembre 2021 - Juin 2022)"
    ProjectTech="C# , Python"
    />





</template>

<script>

import Project from '../object/Project.vue';

export default ({
    setup() {
        
    },
    mounted() {
            var section=this.$router.currentRoute.value.hash.replace("#", "");
            if (section)
                this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
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