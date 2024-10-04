<script setup>
const dadosProduto = ref({
    id: '',
    nome: '',
    preco: ''
})
</script>

<template>
<form action="">
    <label for="product-id">Id:</label>
    <input type="text" placeholder="Id">
    <label for="product-nome">Nome:</label>
    <input type="text" placeholder="Nome">
    <label for="product-preco">Preço:</label>
    <input type="number" name="preco" id="product-preco" placeholder="Preço">
</form>
</template>

<style scoped>

</style>