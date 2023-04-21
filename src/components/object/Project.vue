<template>
    <div class="project-img">
        <img :src="require(`@/assets/project/${ProjectImg}`)">
    
    <div class="project">
    <h3> {{ ProjectName  }} - {{ ProjectDate }} </h3>
    <h4> Technologies utilisée(s) :  <span>{{ ProjectTech }} </span></h4>
    <p v-html="ProjectDescription"></p>
    <a target="_blank"  id="link" v-if="ProjectLink" :href="ProjectLink" >Lien vers le projet git</a>
    <br>
    <br>
    <br>
    <br>
</div>
</div>
</template>

<script>

export default ({
    setup() {
        
    },
    data (){
        return {
            FormatDesc(){
                
            }
        }
    }
    ,
    props : {
        ProjectName : {
            type : String,
            required : true
        },
        ProjectDescription : {
            
            required : true
        },
        ProjectLink : {
            type : String,
            required : false
        },
        ProjectImg : {
            type : String,
            required : true
        },
        ProjectDate : {
            type : String,
            required : true
        },
        ProjectTech : {
            type : String,
            required : true
        },

    }
})
</script>


<style scoped>

.project {
  --b: .5em;
  /* border width */
  --c: 3em;
  /* corner size */
  --r: 2em;
  /* corner rounding */
  position: relative;
  margin: 1em auto;
  border: solid var(--b) transparent;
  padding: 1em;
  font: 1.25em ubuntu, sans-serif;
}
.project::before {
  position: absolute;
  z-index: -1;
  inset: calc(-1*var(--b));
  border: inherit;
  border-radius: var(--r);
  background: linear-gradient(orange, deeppink, purple) border-box;
  --corner:
  	conic-gradient(from -90deg at var(--c) var(--c), red 25%, #0000 0)
  		0 0/ calc(100% - var(--c)) calc(100% - var(--c)) border-box;
  --inner: conic-gradient(red 0 0) padding-box;
  -webkit-mask: var(--corner), var(--inner);
  mask: var(--corner) subtract, var(--inner);
  content: "";
}
.project-img {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: left;
}

.project-img img {
  width: 500px;
  height: 500px;
  margin-right: 20px;
}

.project {
  flex: 1;
  
}

.project h3 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}

.project p {
  font-size: 17px;
  margin-bottom: 5px;
}

.project p span {
  font-weight: bold;
}

.project a {
  font-size: 18px;
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