import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'Liquidificador', price: 79.90, qty: 100},
    {id: 2, name: 'Mixer', price: 59.90, qty: 100},
    {id: 3, name: 'Panela', price: 39.00, qty: 100},
    {id: 4, name: 'Batedeira', price: 99.90, qty: 100},
    {id: 5, name: 'Faca Tramontina', price: 39.90, qty: 100},
  ])

  return { products }
})
