<template>
    <div class="xp-img">
        <img :src="require(`@/assets/xp/${XPImg}`)">
    
    <div class="xp">
    <h3> {{ XPName  }} - {{ XPDate }} </h3>
    <h4> {{ XPDeliver }}</h4>
    <h4> {{ XPLieu }}</h4>
    <h4  v-if="XPTech"> Technologies utilisée(s) :  <span>{{ XPTech }} </span></h4>
    <p v-html="XPDescription"></p>
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
        XPName : {
            type : String,
            required : true
        },
        XPDescription : {
            
            required : true
        },
        XPImg : {
            type : String,
            required : true
        },
        XPDate : {
            type : String,
            required : true
        },
        XPTech : {
            type : String,
            required : false
        },
        XPDeliver : {
            type : String,
            required : true
        },
        XPLieu : {
            type : String,
            required : true
        },

    }
})
</script>


<style scoped>

.xp {
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
.xp::before {
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
.xp-img {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: left;
}

.xp-img img {
  width: 300px;
  height: 300px;
  margin-right: 20px;
}

.xp {
  flex: 1;
  
}

.xp h3 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}

.xp p {
  font-size: 17px;
  margin-bottom: 5px;
}

.xp p span {
  font-weight: bold;
}

.xp a {
  font-size: 18px;
  text-decoration: none;
  color: #0073b1;
  display: inline-block;
  margin-top: 10px;
}




</style>