<template>
  <div>
    <div class="bg-gray-200">
      <div class="container mx-auto flex items-center space-x-4 h-10 p-5 mb-10">
        <nuxt-link to="/home">Inicio</nuxt-link>
        <nuxt-link to="/transactions">Transações</nuxt-link>
        <nuxt-link to="/category">Categoria</nuxt-link>
      </div>
    </div>
    <div>
      <AddCategoryForm @addCategory="addNewCategory" />
      <CategoryList :categories="categories" @editCategory="editCategory" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('categories', ['categories']),
  },
  methods: {
    ...mapActions('categories', ['addCategory']),
    addNewCategory() {
      // Verifique se o campo da nova categoria não está vazio
      if (this.newCategory.trim() === '') {
        // Exiba uma mensagem de erro ou tome outra ação, se necessário
        return;
      }

      // Crie um objeto para representar a nova categoria
      const newCategory = {
        name: this.newCategory, // Defina o nome da nova categoria
      };

      // Chame a ação Vuex para adicionar a nova categoria
      this.addCategory(newCategory);

      // Limpe o campo de entrada após adicionar a categoria
      this.newCategory = '';

    },

    editCategory(category) {
      // Passe a categoria para o modal de edição
      this.$refs.editCategoryModal.openModal(category);
    },
  },
}
</script>

