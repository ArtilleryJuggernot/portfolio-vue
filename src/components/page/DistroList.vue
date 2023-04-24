<template>
    <h1>UNIX Distributions</h1>
    <div class="skill">
      <div>
        <Skill Skillname="Arch Linux" />
        <Cylindre Textid="arch" />
      </div>
      <div>
        <Skill Skillname="Debian" />
        <Cylindre Textid="debian" />
      </div>
      <div>
        <Skill Skillname="Fedora" />
        <Cylindre Textid="fedora" />
      </div>
      <div>
        <Skill Skillname="Mageia 🇫🇷" />
        <Cylindre Textid="mageia" />
      </div>
      <div>
        <Skill Skillname="Manjaro" />
        <Cylindre Textid="manjaro" />
      </div>

      <div>
        <Skill Skillname="Kali Linux" />
        <Cylindre Textid="kali" />
      </div>
        <div>
            <Skill Skillname="NixOS" />
            <Cylindre Textid="nixos" />
        </div>
        <div>
            <Skill Skillname="Pop!_OS" />
            <Cylindre Textid="popos" />
        </div>
        <div>
            <Skill Skillname="Red Hat" />
            <Cylindre Textid="redhat" />
        </div>
        <div>
            <Skill Skillname="Ubuntu" />
            <Cylindre Textid="ubuntu" />
        </div>
    </div>
    
    
    
  </template>
  
  <script>
  import Skill from '../object/Skill.vue';
  import Cone from '../object/Cone.vue';
  import Cylindre from '../object/Cylindre.vue';
  
  export default ({
      name : "SkillList",
      components: { Skill, Cone, Skill , Cylindre}
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
  