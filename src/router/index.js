import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Scolarity from  '../components/Scolarity.vue'
import Test from '../components/Test.vue'
import SkillList from '../components/SkillList.vue'
import CertifList from '../components/CertifList.vue'
import DistroList from '../components/DistroList.vue'
import SchoolProject from '../components/SchoolProject.vue'
import ProjectPage from '../components/ProjectPage.vue'
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
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
