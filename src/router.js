import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
import Todo from './views/Todo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projectst',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }

  ]
})
