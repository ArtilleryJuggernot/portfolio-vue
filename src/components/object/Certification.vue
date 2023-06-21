<template>
    <div class="certification">
        <img :src="require(`@/assets/certif/${CertImg}`)">
    <div class="certification-details">
        <h3>{{ CertName }}</h3>
        <p>Organisme délivreur : <span>{{ CertDeliv }}</span></p>
        <a id="link" v-if="CertLink" target="_blank" :href="CertLink" >Lien vers la certification</a>
    </div>
    <br>
    <br>    
</div>

</template>

<script>



export default {
    name: 'Certification',
    props : {
        CertName : {
            type : String,
            required : true
        },
        CertDeliv : {
            type : String,
            required : true
        },
        CertDate : {
            type : String,
            required : false
        },
        CertLink : {
            type : String,
            required : false
        },
        CertImg : {
            type : String,
            required : false
        },


    },
    mounted(){
       if(this.CertDate){
                this.$el.querySelector('h3').innerHTML += ` - ${this.CertDate}`
       }
    }
}

</script>


<style scoped>
.certification {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.certification img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}

.certification-details {
  flex: 1;
}

.certification-details h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.certification-details p {
  font-size: 14px;
  margin-bottom: 5px;
}

.certification-details p span {
  font-weight: bold;
}

.certification-details a {
  font-size: 14px;
  text-decoration: none;
  color: #0073b1;
  display: inline-block;
  margin-top: 10px;
}

#link{
    color : #000000;
    text-decoration-line:underline
}

</style>