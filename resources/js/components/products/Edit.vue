 <template>
     <div>

     <h3 class="text-2xl mb-4">Edit product</h3>

    <form class="space-y-6" @submit.prevent="editProduct">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="product.name">
                </div>
                <div
                  class="font-medium ml-3 text-red-700"
                  v-if="errors && errors.name"
                >
                {{errors.name[0]}}
                </div>
            </div>

            <div>
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <div class="mt-1">
                    <input type="text" name="price" id="price"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="product.price">
                </div>

                <div
                  class="font-medium ml-3 text-red-700"
                  v-if="errors && errors.price"
                >
                {{errors.price[0]}}
                </div>
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <div class="mt-1">
                    <input type="text" name="description" id="description"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="product.description">
                </div>
            </div>

        </div>

        <div class="flex place-content-end mb-4">
        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-blue-800 rounded-md border border-transparent ring-blue-300 transition duration-150 ease-in-out hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring disabled:opacity-25">
        UPDATE
        </button>
        </div>
    </form>
 </div>
 </template>
 <script>

 import { onMounted } from 'vue'
 import useProducts from '../../composables/products'

 export default {

    props: {
        id: {
            required: true,
            type: String
        }
    },

     setup(props) {

        const { errors, getProduct, product, updateProduct } = useProducts()

        onMounted(() => getProduct(props.id))

        const editProduct = async () => {
               await updateProduct(props.id)
        }

        return {
            product,
            errors,
            editProduct
        }
     }
 }
 </script>
