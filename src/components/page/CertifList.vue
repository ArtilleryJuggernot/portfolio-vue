<template>
    <h1>Certifications | MOOC | Diplômes :</h1>
    <div>
        <Certification
        CertName="Permis B"
        CertDeliv="Agence nationale des titres sécurisés - ANTS"
        CertImg="etat.jpeg"/>
    </div>
    <div>
        <Certification
        CertName="Certification : Gestion des Systèmes d'information"
        CertDeliv="IONISx"
        CertDate="avril 2023"
        CertLink="https://ionisx.com/certifications/64352dbf2f818213701a2f2e"
        CertImg="ionisx.png"/>
    </div>
    <div>
        <Certification
        CertName="Certification : Emailing Marketing"
        CertDeliv="Sendinblue"
        CertDate="mars 2023"
        CertLink="https://academy.sendinblue.com/certificate/63a093a636b1b86b28727dff/user/641acbb89e3d69b7430bf092"
        CertImg="sendinblue.png"/>
    </div>
    <div>
        <Certification
        CertName="Certification : Les Fondamentaux du Référencement Web"
        CertDeliv="IONISx"
        CertDate="mars 2023"
        CertLink="https://ionisx.com/certifications/64352dbf2f818213701a2f2e"
        CertImg="ionisx.png"/>
    </div>
    <div>
        <Certification
        CertName="Certification : Introduction au HTML et CSS"
        CertDeliv="IONISx"
        CertDate="janvier 2023"
        CertLink="https://ionisx.com/certifications/63c99fb5ca035a2e12d6c2ab"
        CertImg="ionisx.png"/>
    </div>
    <div>
        <Certification
        CertName="MOOC : Sécurité / sûreté de l'information des systèmes informatiques"
        CertDeliv=" ANSSI - Agence nationale de la sécurité des systèmes d'informationANSSI - Agence nationale de la sécurité des systèmes d'information "
        CertDate="janvier 2023"
        CertImg="anssi.png"
        />
    </div>
    <div>
        <Certification
        CertName="MOOC : Faire Face Ensemble"
        CertDeliv=" Secrétariat Général de la Défense et de la Sécurité NationaleSecrétariat Général de la Défense et de la Sécurité Nationale"
        CertDate="janvier 2023"
        CertImg="sgdsn.png"
        />
    </div>
    <div>
        <Certification
        CertName="MOOC : Langage C++"
        CertDeliv="IONISx"
        CertDate="janvier 2023"
        CertImg="ionisx.png"
        />
    </div>
    <div>
        <Certification
        CertName="MOOC : Langage C"
        CertDeliv="IONISx"
        CertDate="juillet 2022"
        CertImg="ionisx.png"
        />
    </div>

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