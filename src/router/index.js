import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Works from '../views/Works.vue';
import Contacts from '../views/Contacts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
    meta: {
      title: 'Works'
    }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: {
      title: 'Contacts'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Fireblog`;
  next();
})

export default router;
