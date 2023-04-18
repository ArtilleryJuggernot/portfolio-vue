<template>
    <h1>Software Development</h1>
    <div class="skill">
        <div >
        <Skill
        Skillname="C"/>
        <Cone
        Textid="c" />
        </div>
        <div>
        <Skill
        Skillname="C++"/>
        <Cone
        Textid="cpp" />
        </div>
        <div>
        <Skill
        Skillname="C#"/>
        <Cone
        Textid="csharp" />
        </div>
        <div>
        <Skill
        Skillname="Python"/>
        <Cone
        Textid="python" />
        </div>
        <div>
        <Skill
        Skillname="Ocaml"/>
        <Cone
        Textid="ocaml" />
        </div>
    </div>

    <h1>Front End Web</h1>
    <div class="skill">
        
        <div>
        <Skill
        Skillname="Langage C++"/>
        <Cone
        Textid="cpp" />
    </div>
        
    </div>

    <h1>Back end Web</h1>
    <div class="skill">
        <div >
        <Skill
        Skillname="Langage C"/>
        <Cone
        Textid="c" />
        </div>
        <div>
        <Skill
        Skillname="Langage C++"/>
        <Cone
        Textid="cpp" />
    </div>
        
    </div>

</template>


<script>
import Skill from './Skill.vue';
import Cone from './Cone.vue';

export default ({
    name : "SkillList",
    components: { Skill, Cone }
})
</script>


<style scoped>

.skill{
    display: flex;
  flex-wrap: wrap;
}

.Skill, .Cone {
  box-sizing: border-box;
  padding: 10px;
}

h1{
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,56,53,1) 0%, rgba(190,117,41,1) 32%, rgba(225,198,95,1) 66%, rgba(214,239,50,1) 100%, rgba(0,212,255,1) 100%);
}

</style>