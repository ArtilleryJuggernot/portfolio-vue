<template>
    <h1>Software Development</h1>
    <div class="skill">
      <div>
        <Skill Skillname="C" />
        <Cone Textid="c" />
      </div>
      <div>
        <Skill Skillname="C++" />
        <Cone Textid="cpp" />
      </div>
      <div>
        <Skill Skillname="C#" />
        <Cone Textid="csharp" />
      </div>
      <div>
        <Skill Skillname="Python" />
        <Cone Textid="python" />
      </div>
      <div>
        <Skill Skillname="Ocaml" />
        <Cone Textid="ocaml" />
      </div>
    </div>
    <div class="skill">
      <div>
        <Skill Skillname="Git" />
        <Cone Textid="git" />
      </div>
      <div>
        <Skill Skillname="Unix" />
        <Cone Textid="unix" />
      </div>
      <div>
        <Skill Skillname="Electron" />
        <Cone Textid="electron" />
      </div>
      <div>
        <Skill Skillname="Docker"/>
        <Cone Textid="docker" />
      </div>
    </div>
    <h1>Front End Web</h1>
    <div class="skill">
      <div>
        <Skill Skillname="HTML" />
        <Cone Textid="html" />
      </div>
      <div>
        <Skill Skillname="CSS" />
        <Cone Textid="css" />
      </div>
      <div>
        <Skill Skillname="Javascript" />
        <Cone Textid="js" />
      </div>
      <div>
        <Skill Skillname="Bootstrap" />
        <Cone Textid="bootstrap" />
      </div>
      <div>
        <Skill Skillname="Vue3" />
        <Cone Textid="vue3" />
      </div>
    </div>
  
    <h1>Back end Web</h1>
    <div class="skill">
      <div>
        <Skill Skillname="Javascript" />
        <Cone Textid="js" />
      </div>
      <div>
        <Skill Skillname="MariaDB" />
        <Cone Textid="mariadb" />
      </div>
      <div>
        <Skill Skillname="MySQL" />
        <Cone Textid="mysql" />
      </div>
      <div>
        <Skill Skillname="NodeJS" />
        <Cone Textid="nodejs" />
      </div>
      <div>
        <Skill Skillname="PHP" />
        <Cone Textid="php" />
      </div>
    </div>
  
    <h1>Mise en forme</h1>
    <div class="skill">
      <div>
        <Skill Skillname="LaTeX" />
        <Cone Textid="latex" />
      </div>
  
      <div>
        <Skill Skillname="Markdown" />
        <Cone Textid="markdown" />
      </div>
    </div>
  
    <h1>Illustration</h1>
    <div class="skill">
        <div>
            <Skill Skillname="Photoshop" />
            <Cone Textid="Photoshop" />
        </div>
    </div>
  </template>
  
  <script>
  import Skill from './Skill.vue';
  import Cone from './Cone.vue';
  
  export default ({
      name : "SkillList",
      components: { Skill, Cone, Skill }
  })
  </script>
  
  <style scoped>
  .skill {
    display: flex;
    flex-wrap: wrap;
  }
  
  .Skill,
  .Cone {
    box-sizing: border-box;
    padding: 10px;
  }
  
  h1 {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(185, 56, 53, 1) 0%,
      rgba(190, 117, 41, 1) 32%,
      rgba(225, 198, 95, 1) 66%,
      rgba(214, 239, 50, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
  }
  </style>
  