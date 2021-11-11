import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useProducts() {
    const product = ref([])
    const products = ref([])

    const router = useRouter()

    const getProducts = async () => {

        const response = await axios.get('/api/products');

        products.value = response.data.data;
    }

    return {
        getProducts,
        products,
        product
    }
}
