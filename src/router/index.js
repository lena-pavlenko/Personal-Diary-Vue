import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import Favorite from '@/pages/Favorite';
import Quotes from '@/pages/Quotes';
import Personal from '@/pages/Personal';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },

    {
        path: '/favorite',
        name: 'favorite',
        component: Favorite
    },

    {
        path: '/quotes',
        name: 'quotes',
        component: Quotes
    },

    {
        path: '/personal',
        name: 'personal',
        component: Personal
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;