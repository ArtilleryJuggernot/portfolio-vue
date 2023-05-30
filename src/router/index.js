import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Scolarity from  '../components/page/Scolarity.vue'
import Test from '../components/Test.vue'
import SkillList from '../components/page/SkillList.vue'
import CertifList from '../components/page/CertifList.vue'
import DistroList from '../components/page/DistroList.vue'
import SchoolProject from '../components/page/SchoolProject.vue'
import ProjectPage from '../components/page/ProjectPage.vue'
import Contact from '../components/page/Contact.vue'
import StageXP from '../components/page/StageXP.vue'
import PersonalProject from '../components/page/PersonalProject.vue'
import HardSkillMatrice from '../components/page/HardSkillMatrice.vue'
import E5Skill from '../components/page/E5Skill'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/scolarity',
    name: 'scolarity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : Scolarity,

  },{
    path: '/skills',
    name: 'Skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : SkillList,

  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : Test,

  },
  {
    path : '/certification',
    name : 'Certification',

    component : CertifList,
  },
  {
    path : '/distro',
    name : 'Distribution UNIX',
    component : DistroList,
  },
  {
    path : '/schoolproject',
    name : 'Liste des Projets Scolaire',
    component : SchoolProject
  },
  {
    path : '/projects',
    name : 'Liste des Projets',
    component : ProjectPage
  },
  {
    path : '/contact',
    name : 'Contact',
    component : Contact 
  },
  {
    path : '/experience',
    name : 'Experience & Stage',
    component : StageXP
  },
  {
    path : '/personalproject',
    name : 'Liste des Projets Personnels',
    component : PersonalProject
  },
  {
    path : '/skillschart',
    name : "Tableau des compétences",
    component : HardSkillMatrice
  },
  {
    path : '/E5Skill',
    name : "E5 Skill",
    component : E5Skill
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
