<template>
    <h1> Stage & Expérience</h1>

    
    <!-- <Experience
        XPName="Ciril Group"
        XPDescription="Travail de R&D sur le projet GEO"
        XPImg="cirilgroup.png"
        XPDate="(Juin 2023 - Juillet 2023)
        XPTech="Docker, Vue 3" />
    -->


    <Experience
    XPName="(Stage) | Développeur R&D Vue 3 (BTS SIO 1)"
    XPLieu="49 Av. Albert Einstein, 69100 Villeurbanne"
    XPDeliver="Ciril GROUP | Business Geografic"
    XPDescription="Participation au développement et à l'intégration de la <a target='_blank' href='https://www.business-geografic.com/fr/'>plateforme SIG GEO</a> au sein de l'équipe R&D de Business Geographic. 
    <br> <br>
    Migration de stack technique Vue 2 -> Vue 3 | Composition API. 
    <br><br>
    Découverte de la méthodologie agile, la gestion de ticket avec Jira et l'automatisation avec Jenkins"
    XPImg="bg.png"
    XPDate="(Juin 2023 - Juillet 2023)"
    XPTech="Vue 3, Docker , HTML5 , CSS , JavaScript, Jira, Jenkins"
    />


    <Experience
    XPName="(Association) | Aide au debug et au développement Mageia"
    XPLieu="7 Pl. Louis Chazette, 69001 Lyon, Rhône, Auvergne-Rhône-Alpes, France"
    XPDeliver="Lyon Association Libre Informatique Solidaire (LALIS)"
    XPDescription="Aide au debug et au développement de la distribution linux Mageia. Travail en équipe."
    XPImg="lalis.png"
    XPDate="(Avril 2023 - aujourd'hui)"
    XPTech="Mageia, Linux, Git, C, C++"
    />

    <Experience
    XPName="(Emploi saisonnier | Intérim) Manutentionnaire matériaux)"
    XPLieu="170 Rue Pierre-Gilles de Gennes, 83210 La Farlède, Var , Provence-Alpes-Côte d'Azur, France"
    XPDeliver="APY Méditerranée - QUALI-Cité Méditerranée"
    XPDescription="Nettoyage de place public, décoration epoxy pour les arbres, installation privée et d'air de jeu pour les enfants, construction. Travail en équipe."
    XPImg="apy.jpg"
    XPDate="(Juillet 2022 - Aout 2022)"
    />

    <Experience
    XPName="(Emploi saisonnier) Manutentionnaire entrepôt"
    XPLieu="307 Bd Gambetta, 83390 Cuers, Var, Provence-Alpes-Côte d'Azur, France"
    XPDeliver="Alizé Evénement"
    XPDescription="Manutentionnaire dans un entrepôt. Chargement et déchargement de camions selon les commandes pour les évenements festif. Travail en équipe."
    XPImg="alize.jpeg"
    XPDate="(Juin 2022 - Juillet 2022)"
    />



    <Experience
    XPName="(Association) - Membre du personnel"
    XPLieu="Lyon 3, 69003, Rhône, Auvergne-Rhône-Alpes, France"
    XPDeliver="Gotta Go Hack (EPITA)"
    XPDescription="Organisation de Hackathon (compétition de programmation) pour les étudiants de l'EPITA en partenariat avec des entreprises dans le but de promouvoir l'entrepreneuriat , l'innovation et la découverte de nouvelles technologies."
    XPImg="ggh.png"
    XPDate="(Février 2022 - juillet 2022)"
    XPTech="OBS, React, HTML , CSS , JS, Communication, Discord, Gestion de projet"
    />


    <Experience
    XPName="(Emploi saisonnier) Agent d'opération"
    XPLieu="11 Rue Lavoisier, 83210 La Farlède, Var, Provence-Alpes-Côte d'Azur, France"
    XPDeliver="Elis Méditerranée"
    XPDescription="Blanchisserie : Aide au lavage et repassage du linge sur plusieurs machines. Travail en équipe."
    XPImg="elis.png"
    XPDate="(Juin 2021 - Juillet 2021)"
    />



    <Experience
        XPName="(Emploi saisonnier) Animateur de centre de loisirs"
        XPLieu="La Farlède, 83210, Var, Provence-Alpes-Côte d'Azur, France"
        XPDeliver="Centre de loisirs La farlède"
        XPDescription="Organisation, préparation des activités et animations au centre de loisir pour des enfants. Service des repas le midi. Travail en équipe"
        XPImg="lafarlede.png"
        XPDate="(Juin 2018 - Juillet 2018)"
        />

    
        

</template>

<script>

import Experience from '../object/Experience.vue';

export default ({
    setup() {
        
    },
    components : {
        Experience
    },
})
</script>


<style scoped>

</style>