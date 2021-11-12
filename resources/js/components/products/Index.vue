<template>
    <div>

    <div class="flex place-content-end mb-4">
        <div class="px-4 py-2 text-white bg-blue-700 hover:bg-indigo-800 rounded-lg cursor-pointer">
            <router-link :to="{ name: 'products.create' }" class="text-sm font-medium">Create product</router-link>
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
       <Column header="actions">
            <template #body="slotProps">
                <router-link :to="{ name: 'products.edit', params: { id: slotProps.data.id } }" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 mr-4">Edit</router-link>
                <button @click="deleteProduct(slotProps.data.id)" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">Delete</button>
            </template>
       </Column>
    </DataTable>
    </div>
</template>
<script>
import { onMounted, ref } from "vue";
import useProducts from "../../composables/products";
import {FilterMatchMode} from 'primevue/api';

export default {
    setup() {
        const { products, getProducts, destroyProduct } = useProducts();

        const deleteProduct = async (id) => {
            if (!window.confirm('Are you sure? This record will permanantly deleted')) {
                return
            }

            await destroyProduct(id)
            await getProducts()
        }
        onMounted(getProducts);

        const filters = ref({
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        });

        return {
            products,
            filters,
            deleteProduct
        };
    },
};
</script>
