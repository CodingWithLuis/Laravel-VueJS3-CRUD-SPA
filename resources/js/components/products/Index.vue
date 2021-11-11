<template>
    <div>

    <div class="flex place-content-end mb-4">
        <div class="px-4 py-2 text-white bg-blue-700 hover:bg-indigo-800 rounded-lg cursor-pointer">
            <router-link :to="{ name: 'products.create' }" class="text-sm font-medium">Create product</router-link>
        </div>
    </div>

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
import { onMounted } from "vue";
import useProducts from "../../composables/products";

export default {
    setup() {
        const { products, getProducts } = useProducts();

        onMounted(getProducts);

        return {
            products,
        };
    },
};
</script>
