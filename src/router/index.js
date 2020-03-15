import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: () => import('../views/homePage/index.vue'),
        redirect:'/components/c1',
        children: [         
            {
                path: '/components/c1',
                name: 'C1',
                component: () => import('../components/C1.vue')
            },
            {
                path: '/components/c2',
                name: 'C2',
                component: () => import('../components/C2.vue')
            },
            {
                path: '/components/c3',
                name: 'C3',
                component: () => import('../components/C3.vue')
            },
            {
                path: '/components/c4',
                name: 'C4',
                component: () => import('../components/C4.vue')
            }
        ]
    }
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