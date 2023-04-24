<template>
    <h1>Software Development</h1>
    <div class="bg-pattern">
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
        <Skill Skillname="Visual Studio Code" />
        <Cone Textid="vs" />
      </div>
    </div>
  </div>
    <h1>Front End Web</h1>
    <div class="bg-pattern">
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
    <div>
      <Skill Skillname="ThreeJS"/>
        <Cone Textid="threejs"/>
    </div>
      
      <div>
        <Skill Skillname="Wordpress" />
        <Cone Textid="wordpress" />
      </div>
    </div>
  </div>
    <h1>Back end Web</h1>
    <div class="bg-pattern">
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
  </div>

    <h1>Virtualisation | Cloud</h1>
    <div class="bg-pattern">
    <div class="skill">
      <div>

        <Skill Skillname="VirtualBox" />
        <Cone Textid="virtualbox" />
      </div>

      <div>
        <Skill Skillname="VMWare" />
        <Cone Textid="vmware" />
      </div>

      <div>
        <Skill Skillname="Docker" />
        <Cone Textid="docker" />
      </div>

      <div>
        <Skill Skillname="Oracle Cloud" />
        <Cone Textid="oraclecloud" />
      </div>


    </div>
    </div>

    <h1>Mise en forme | Multitâche</h1>
    <div class="bg-pattern">
    <div class="skill">
      <div>
        <Skill Skillname="LaTeX" />
        <Cone Textid="latex" />
      </div>
  
      <div>
        <Skill Skillname="Markdown" />
        <Cone Textid="markdown" />
      </div>
      <div>
        <Skill Skillname="Obsidian" />
        <Cone Textid="obsidian" />
      </div>
      <div>
        <Skill Skillname="Notion" />
        <Cone Textid="notion" />
      </div>
      <div>
        <Skill Skillname="Pack Office" />
        <Cone Textid="office" />
      </div>
    </div>
    </div>

  
    <h1>Illustration | 3D</h1>
    <div class="bg-pattern">
    <div class="skill">
        <div>
            <Skill Skillname="Photoshop" />
            <Cone Textid="photoshop" />
        </div>
        <div>
            <Skill Skillname="Blender" />
            <Cone Textid="blender" />
        </div>
        <div>
            <Skill Skillname="Unity" />
            <Cone Textid="unity" />
        </div>
    </div>
    </div>
    <h1>ML | IA | BI</h1>
    <div class="bg-pattern">
    <div class="skill">
      <div>
        <Skill Skillname="Python" />
        <Cone Textid="python" />
      </div>
      <div>
        <Skill Skillname="Numpy | Numjs" />
        <Cone Textid="numpy" />
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import Skill from '../object/Skill.vue';
  import Cone from '../object/Cone.vue';
  
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
    opacity: 1;
  }
  



  h1 {
    margin : 0;
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


#software > * {
  opacity : 1;
}

  </style>
  