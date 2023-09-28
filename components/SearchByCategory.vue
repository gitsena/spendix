<template>
    <div class="mb-4">
      <label for="category" class="block text-sm font-medium text-gray-700">Buscar por Categoria:</label>
      <select v-model="selectedCategory" id="category" name="category" class="mt-1 p-2 border rounded-md w-full">
        <option value="">Selecione uma categoria</option>
        <!-- Loop para listar as categorias -->
        <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: '', // Categoria selecionada
      }
    },
    props: {
      categories: Array, // Lista de categorias como propriedade
    },
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente usando Tailwind CSS */
  </style>
  