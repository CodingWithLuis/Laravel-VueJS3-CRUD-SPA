import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useProducts() {

    const product = ref([])
    const products = ref([])
    const errors = ref('')

    const router = useRouter()

    const getProducts = async () => {

        const response = await axios.get('/api/products');

        products.value = response.data.data;
    }

    const getProduct = async (id) => {

        const response = await axios.get(`/api/products/${id}`);

        product.value = response.data.data
    }

    const storeProduct = async (data) => {

        try {

            await axios.post('/api/products', data)
            await router.push({ name: 'products.index' })

        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    }

    const updateProduct = async (id) => {

        try {

            await axios.put(`/api/products/${id}`, product.value)
            await router.push({ name: 'products.index' })

        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    }

    return {
        getProducts,
        getProduct,
        products,
        product,
        storeProduct,
        updateProduct,
        errors
    }
}
