import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import { componentsRoutes } from "./modules/componentsRoutes";


export const routes = [
    {
        path: '/',
        redirect: '/components/c1',
        hidden:true
    },
    ...componentsRoutes
];

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;