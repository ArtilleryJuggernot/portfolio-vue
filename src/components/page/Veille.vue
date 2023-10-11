<template>

<p class="size">Dans le cadre de ma <b>deuxième année de BTS SIO à l'Institution des Chartreux</b>,</p> 
    <p class="size">j'ai pu commencer la réalisation d'une <b>veille informationnelle</b> sur les <b>cyberattaques sur les SI et leurs évolutions</b>.</p>





    <p>L'objectif de cette veille est :</p> 
    <ul>
        <li>
            <p>De la rationnaliser : Tourner les recherches réalisées pendant la veille vers un objectif concret pour une entreprise :</p>
                <ul>
                    <li class="bold">économique</li> 
                    <li class="bold">juridiques</li>
                    <li class="bold">sécuritaires</li>
                    <li class="bold">environnementales</li>
                    <li class="bold">optimisation de production / industrielles</li>
                    <li class="bold">management</li>
                    <li class="bold">légales, etc.</li>    

                    </ul>
                <br/>
        </li>


        <li>
            <p>De la partager au reste de l'entreprise (mais aussi à d'autre personnes potentiellement) pour qu'elle puisse être utilisé en tant que référentiel. </p>
        </li>
    </ul>



<div class="pdf-link">
  <img src="../../assets/img/pdf.png" alt="PDF">
  <a href="./Synthèse_de_la_mise_en_oeuvre_de_la_veille.pdf" download="Synthèse de la mise en oeuvre de la veille Hugo Jacquel SIO2.pdf" target="_blank">Synthèse de la mise en oeuvre de la veille Hugo Jacquel</a>
</div>

</template>


<script>

export default {
  name: 'Veille',
}

</script>


<style>

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

.size{
    font-size: 2.5ch;
}


.pdf-link img {
  width: 20px;
  height: 20px;
}

ol, li{
    text-align: justify;
}

.bold{
    font-weight: bold;
}


</style>