<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
import AdicionarProduto from '@/components/AdicionarProduto.vue'

const router = useRouter()
const productStore = useProductStore()

function visualizar(id) {
  router.push(`/product/${id}`)
}
</script>

<template>
  <h1>Listagem de produtos</h1>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>nome</th>
        <th>preço</th>
        <th>ações</th>
      </tr>
    </thead>
    <tbody>
      <tr class="produtos" v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
          <button @click="visualizar(product.id)">Ver</button>
          <button @click="productStore.deleteProductById(product.id)">Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
  <button @click="productStore.addProduct">Adicionar item</button>
  <AdicionarProduto v-if="productStore.addActive == true"/>
</template>

<style scoped>
table {
  border: 1px solid white;
}
tr {
  display: flex;
  flex-direction: row;
}
.produtos {
  flex-direction: row;
}
td, th {
  display: flex;
  width: 80px;
  justify-content: start;
}
</style>
