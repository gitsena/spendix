<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white p-4 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-semibold mb-4">Nova Transação</h2>
      <form @submit.prevent="addTransaction">
        <!-- Campos do formulário -->
        <div class="mb-4">
          <label for="date" class="block text-sm font-medium text-gray-700">Data:</label>
          <input v-model="newTransaction.date" type="date" id="date" name="date"
            class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div class="mb-4">
          <label for="amount" class="block text-sm font-medium text-gray-700">Valor:</label>
          <input v-model="newTransaction.amount" type="number" id="amount" name="amount"
            class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Descrição:</label>
          <input v-model="newTransaction.description" type="text" id="description" name="description"
            class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div class="mb-4">
          <label for="category" class="block text-sm font-medium text-gray-700">Categoria:</label>
          <select v-model="newTransaction.category" id="category" name="category"
            class="mt-1 p-2 border rounded-md w-full">
            <option value="">Selecione uma categoria</option>
            <!-- Loop para listar as categorias -->
            <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
          </select>
        </div>
        <div class="text-right">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md"
            @click="onAddTransaction">Adicionar</button>
          <button @click="onCloseModal" class="text-gray-600 ml-2">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newTransaction: {
        date: '',
        amount: '',
        description: '',
        category: '',
      }, // Dados do formulário
    }
  },
  props: {
    showModal: Boolean, // Recebe a prop showModal
    categories: Array, // Lista de categorias como propriedade
  },
  methods: {
    onAddTransaction() {
      // Adicione a lógica para adicionar uma nova transação aqui

      // Depois de adicionar a transação com sucesso, feche o modal
      this.$emit('closeModal');
    },
    onCloseModal() {
      // Chamada quando o botão "Cancelar" é clicado
      this.$emit('closeModal');
    },
  },
}
</script>
  
  