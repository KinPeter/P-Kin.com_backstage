import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/skills',
            name: 'Skills',
            component: () => import('./views/Skills.vue'),
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: () => import('./views/Portfolio.vue'),
        },
        {
            path: '/pens',
            name: 'Pens',
            component: () => import('./views/Pens.vue'),
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
