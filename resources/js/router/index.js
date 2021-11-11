import { createRouter, createWebHistory } from 'vue-router'

import ProductsIndex from '../components/products/Index.vue'
import ProductsCreate from '../components/products/Create.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'products.index',
        component: ProductsIndex

    },
    {
        path: '/products/create',
        name: 'products.create',
        component: ProductsCreate
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
