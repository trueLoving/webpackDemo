import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
    {
        path: '/',
        component: () => import('../views/homePage/index.vue'),
        redirect:'/components/c1',
        children: [         
            {
                path: '/components/c1',
                name: 'C1',
                component: () => import('../components/C1.vue'),
                meta:{
                    title:"Component 1",
                    icon:"el-icon-setting"
                }
            },
            {
                path: '/components/c2',
                name: 'C2',
                component: () => import('../components/C2.vue'),
                meta:{
                    title:"Component 2",
                    icon:"el-icon-star-on"
                }
            },
            {
                path: '/components/c3',
                name: 'C3',
                component: () => import('../components/C3.vue'),
                meta:{
                    title:"Component 3",
                    icon:"el-icon-info"
                }
            },
            {
                path: '/components/c4',
                name: 'C4',
                component: () => import('../components/C4.vue'),
                meta:{
                    title:"Component 4",
                    icon:"el-icon-s-tools"
                }
            },
            {
                path: '/components/c5',
                name: 'C5',
                component: () => import('../components/C5.vue'),
                meta:{
                    title:"Component 5",
                    icon:"el-icon-delete-solid"
                }
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