<template>
    <div>

    <div class="flex place-content-end mb-4">
        <div class="px-4 py-2 text-white bg-blue-700 hover:bg-indigo-800 rounded-lg cursor-pointer">
            <router-link :to="{ name: 'products.create' }" class="text-sm font-medium">create product</router-link>
        </div>
    </div>

        <DataTable :value="products" responsiveLayout="scroll"
            :paginator="true" :rows="10"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
            :rowsPerPageOptions="[10,25,50]"
            :filters="filters" 
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    >

        <template #header>
            <div class="flex place-content-end">
                <input type="text" v-model="filters['global'].value" placeholder="Search..." class="rounded-md"/>
			</div>
        </template>
       <Column field="name" header="Name" :sortable="true">
       </Column>
       <Column field="price" header="Price" :sortable="true"></Column>
       <Column field="description" header="Description"></Column>
    </DataTable>
    </div>
</template>
<script>
import { onMounted, ref } from "vue";
import useProducts from "../../composables/products";
import {FilterMatchMode} from 'primevue/api';

export default {
    setup() {
        const { products, getProducts } = useProducts();

        onMounted(getProducts);

        const filters = ref({
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        });

        return {
            products,
            filters,
        };
    },
};
</script>
