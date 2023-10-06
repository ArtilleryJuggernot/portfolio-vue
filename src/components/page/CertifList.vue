<template>
    <h1>Certifications | MOOC | Diplômes :</h1>
        <Certification
        CertName="Permis B"
        CertDeliv="Agence nationale des titres sécurisés - ANTS"
        CertImg="etat.jpeg"/>


        <Certification
        CertName="MOOC : Gérez votre parc informatique avec GLPI"
        CertDeliv="OpenClassrooms"
        CertDate="septembre 2023"
        CertImg="openclassrooms.png"/>


    <Certification
        CertName="Formation PHP 8 : Les bases de la POO"
        CertDeliv="Alphorm"
        CertDate="juin 2023"
        CertLink="https://www.alphorm.com/Attestation/Yd5Eg539EKwY0"
        CertImg="alphorm.png"/>

            
    <Certification
        CertName="Certification : Fortinet NSE 2 The Evolution of Cybersecurity"
        CertDeliv="Fortinet"
        CertDate="mai 2023"
        CertLink="https://www.linkedin.com/posts/hugo-jacquel_nse-2-activity-7067065416468062208-4m3p?utm_source=share&utm_medium=member_desktop"
        CertImg="fortinet.png"/>
    
    <Certification
        CertName="Certification : Fortinet NSE 1 Information Security Awareness"
        CertDeliv="Fortinet"
        CertDate="mai 2023"
        CertLink="https://www.linkedin.com/posts/hugo-jacquel_certification-nse-1-information-security-activity-7067028638109454337-ek6U?utm_source=share&utm_medium=member_desktop"
        CertImg="fortinet.png"/>


    <Certification
        CertName="Certification : Introduction to Cybersecurity"
        CertDeliv="Cisco"
        CertDate="mai 2023"
        CertLink="https://www.credly.com/badges/8c2f946a-0c3c-4c52-965b-a5bbda2ae70f"
        CertImg="cisco.jpg"/>
    
    <Certification
        CertName="Certification : Introduction to Internet of Things"
        CertDeliv="Cisco"
        CertDate="mai 2023"
        CertLink="https://www.credly.com/badges/9dfc2190-464e-4ce8-a30b-71d7c9038f0b"
        CertImg="cisco.jpg"/>
    
        <Certification
        CertName="Certification : Gestion des Systèmes d'information"
        CertDeliv="IONISx"
        CertDate="avril 2023"
        CertLink="https://ionisx.com/certifications/64352dbf2f818213701a2f2e"
        CertImg="ionisx.png"/>

        <Certification
        CertName="Vue JS 3 : Maîtriser les bases"
        CertDeliv="Alphorm"
        CertDate="avril 2023"
        CertLink="https://www.alphorm.com/Attestation/n8qRgxllRobae"
        CertImg="alphorm.png"/>
    
        <Certification
        CertName="Certification : Emailing Marketing"
        CertDeliv="Sendinblue"
        CertDate="mars 2023"
        CertLink="https://academy.sendinblue.com/certificate/63a093a636b1b86b28727dff/user/641acbb89e3d69b7430bf092"
        CertImg="sendinblue.png"/>
    
    
        <Certification
        CertName="Certification : Les Fondamentaux du Référencement Web"
        CertDeliv="IONISx"
        CertDate="mars 2023"
        CertLink="https://ionisx.com/certifications/64352dbf2f818213701a2f2e"
        CertImg="ionisx.png"/>
    
    
        <Certification
        CertName="Certification : Introduction au HTML et CSS"
        CertDeliv="IONISx"
        CertDate="janvier 2023"
        CertLink="https://ionisx.com/certifications/63c99fb5ca035a2e12d6c2ab"
        CertImg="ionisx.png"/>
    
    
        <Certification
        CertName="MOOC : Sécurité / sûreté de l'information des systèmes informatiques"
        CertDeliv=" ANSSI - Agence nationale de la sécurité des systèmes d'informationANSSI - Agence nationale de la sécurité des systèmes d'information "
        CertDate="janvier 2023"
        CertImg="anssi.png"
        />
    
    
        <Certification
        CertName="MOOC : Faire Face Ensemble"
        CertDeliv=" Secrétariat Général de la Défense et de la Sécurité NationaleSecrétariat Général de la Défense et de la Sécurité Nationale"
        CertDate="janvier 2023"
        CertImg="sgdsn.png"
        />
    
    
        <Certification
        CertName="MOOC : Langage C++"
        CertDeliv="IONISx"
        CertDate="janvier 2023"
        CertImg="ionisx.png"
        />
    
    
        <Certification
        CertName="MOOC : Langage C"
        CertDeliv="IONISx"
        CertDate="juillet 2022"
        CertImg="ionisx.png"
        />
    

</template>

<script>
import Certification from '../object/Certification.vue';


export default{
  components: { Certification },
    name : 'CertifList'
}

</script>


<style scoped>

</style>