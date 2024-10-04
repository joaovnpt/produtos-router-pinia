import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Liquidificador', price: 79.9, qty: 100 },
    { id: 2, name: 'Mixer', price: 59.9, qty: 100 },
    { id: 3, name: 'Panela', price: 39.0, qty: 100 },
    { id: 4, name: 'Batedeira', price: 99.9, qty: 100 },
    { id: 5, name: 'Faca Tramontina', price: 39.9, qty: 100 }
  ])

  function deleteProductById(id) {
    const position = products.value.findIndex((product) => product.id == id)
    products.value.splice(position, 1)
  }

  function getProductById(id) {
    for (let product of products.value) {
      if (product.id == id) return product
    }
    return null
    // Ou: return products.value.find((product) => product.id == id)
  }

  let addActive = ref(false)
  function addProduct() {
    addActive.value = true
  }

  return { products, getProductById, deleteProductById, addActive, addProduct }
})
