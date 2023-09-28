<template>
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700">Buscar por Descrição:</label>
      <input
        v-model="searchQuery"
        type="text"
        id="description"
        name="description"
        class="mt-1 p-2 border rounded-md w-full"
        placeholder="Digite uma descrição"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '', // Dados do campo de busca
      }
    },
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente usando Tailwind CSS */
  </style>
  