<template>
    <div>
    <DataTable :value="products" responsiveLayout="scroll"
    :paginator="true" :rows="10"
    :rowsPerPageOptions="[10,20,50]"
    >
       <Column field="name" header="Name" :sortable="true"></Column>
       <Column field="price" header="Price"></Column>
       <Column field="description" header="Description"></Column>
    </DataTable>
    </div>
</template>
<script>

import { onMounted } from 'vue'
import useProducts from '../../composables/products'

export default {
    setup() {
        
        const {products, getProducts} = useProducts()

        onMounted(getProducts)

        return {
            products
        }
    },
}
</script>
