require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import { createApp } from 'vue'
import router from './router/index'

import ProductsIndex from './components/products/Index'

createApp({
    components: {
        ProductsIndex
    }
}).use(router).mount('#app')
