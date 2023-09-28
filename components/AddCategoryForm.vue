<template>
  <div class="mb-4">
    <h2 class="text-2xl font-semibold mb-4">Adicionar Categoria</h2>
    <form @submit.prevent="addCategory">
      <div class="mb-4">
        <label for="categoryName" class="block text-sm font-medium text-gray-700">Nome da Categoria:</label>
        <input v-model="newCategory" type="text" id="categoryName" name="categoryName"
          class="mt-1 p-2 border rounded-md w-full" />
      </div>
      <div class="text-right">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Adicionar</button>
      </div>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newCategory: '', // Nome da nova categoria
    }
  },
  methods: {
    addCategory() {
      // Verifique se o campo da nova categoria não está vazio
      if (this.newCategory.trim() === '') {
        // Exiba uma mensagem de erro ou tome outra ação, se necessário
        return;
      }

      // Crie um objeto para representar a nova categoria
      const newCategory = {
        name: this.newCategory,
      };

      // Chame uma ação Vuex para adicionar a nova categoria
      this.$store.commit('categories/addCategory', newCategory);
      console.log(this.newCategory);

      // Limpe o campo de entrada após adicionar a categoria
      this.newCategory = '';

    },
  },
}
</script>
  
<style scoped>
/* Estilos específicos para este componente usando Tailwind CSS */
</style>
  