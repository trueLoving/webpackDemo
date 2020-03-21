import Layout from "$src/layout/index.vue";


export const componentsRoutes = [
    {
        path: '/components',
        component: Layout,
        children: [
            {
                path: 'c1',
                name: 'C1',
                component: () => import('$src/components/C1.vue'),
                meta: {
                    title: "Component 1",
                    icon: "el-icon-setting",
                }
            }
        ]
    },
    {
        path: '/components',
        component: Layout,
        children: [
            {
                path: 'c2',
                name: 'C2',
                component: () => import('$src/components/C2.vue'),
                meta: {
                    title: "Component 2",
                    icon: "el-icon-star-on",
                }
            },
        ]
    },
    {
        path: '/components',
        component: Layout,
        children: [
            {
                path: 'c3',
                name: 'C3',
                component: () => import('$src/components/C3.vue'),
                meta: {
                    title: "Component 3",
                    icon: "el-icon-info",
                }
            },
        ]
    },
    {
        path: '/components',
        component: Layout,
        children: [
            {
                path: 'c4',
                name: 'C4',
                component: () => import('$src/components/C4.vue'),
                meta: {
                    title: "Component 4",
                    icon: "el-icon-s-tools",
                }
            },
        ]
    },
    {
        path: '/components',
        component: Layout,
        children: [
            {
                path: 'c5',
                name: 'C5',
                component: () => import('$src/components/C5.vue'),
                meta: {
                    title: "Component 5",
                    icon: "el-icon-delete-solid",
                }
            }
        ]
    }
]
