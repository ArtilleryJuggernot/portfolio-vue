<template>
<div id="container">
    <div class="social">
        <div>
            <a href="https://www.linkedin.com/in/hugo-jacquel" target="_blank">
        <img src="../../assets/social/Linkedin.svg" alt="linkedin" />
        </a>
        </div>
        
        <span>Hugo Jacquel</span>
    </div>

    <div class="social">
        <div>
        <a href="https://github.com/MrHugojuggernot/" target="_blank">
        <img src="../../assets/social/github.png" />
        </a>
        </div>
        <span>MrHugojuggernot</span> 
    </div>

    <div class="social">
        <div>
        <a href="mailto:hugo.jacquel.pro@gmail.com" target="_blank">
        <img src="../../assets/social/Mail.svg"/>
        </a>
        </div>
        <span>hugo.jacquel.pro@gmail.com</span> 
    </div>
</div>
</template>

<script>


export default ({
    setup() {
        
    },
    name: 'Social',
    data () {
        return {
            
        }
    }
})

</script>


<style scoped>


#container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.social{ 
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
}

img{
    width: 50px;
    height: 50px;
    margin: 10px;
}

</style>
