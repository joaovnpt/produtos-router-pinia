<script setup>
import { useProductStore } from '@/stores/product';

const productStore = useProductStore()
</script>

<template>
  <form action="">
    <label for="product-id">Id:</label>
    <input type="text" placeholder="Id" v-model="productStore.products.id" />
    <label for="product-nome">Nome:</label>
    <input type="text" placeholder="Nome" />
    <label for="product-preco">Preço:</label>
    <input
      type="number"
      name="preco"
      id="product-preco"
      placeholder="Preço"
    />
  </form>
  <button>Criar produto</button>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input,
label {
  width: 300px;
  height: 30px;
  border-radius: 10px;
  padding: 10px;
}
button {
    margin-top: 20px;
}
</style>
