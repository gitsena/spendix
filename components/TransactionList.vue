<template>
    <div class="p-4">
      <h2 class="text-2xl font-semibold mb-4">Lista de Transações</h2>
      <div class="bg-white rounded-lg shadow-lg p-4">
        <!-- Loop para exibir as transações -->
        <div v-for="(transaction, index) in transactions" :key="index" class="mb-4">
          <div class="flex justify-between items-center">
            <div>
              <span class="text-lg font-semibold">{{ transaction.description }}</span>
              <span class="text-sm ml-2">{{ transaction.date }}</span>
            </div>
            <div class="text-lg">{{ transaction.amount }}</div>
          </div>
          <div class="mt-2">
            Categoria: {{ transaction.category }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      transactions: Array, // Recebe a lista de transações como propriedade
    },
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente usando Tailwind CSS */
  </style>
  