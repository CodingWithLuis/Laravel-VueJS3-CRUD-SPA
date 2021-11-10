import { createRouter, createWebHistory } from 'vue-router'

import ProductsIndex from '../components/products/Index.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'products.index',
        component: ProductsIndex

    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
