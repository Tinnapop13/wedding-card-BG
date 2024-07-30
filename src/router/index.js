import { createMemoryHistory, createRouter } from 'vue-router'

import Envelope from '/src/views/Envelope.vue';
import Home from '/src/views/Home.vue';

const routes = [
  { path: '/', component: Envelope },
  { path: '/home', component: Home },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router