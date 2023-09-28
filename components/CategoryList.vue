<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Lista de Categorias</h2>
    <ul class="list-disc pl-4">
      <!-- Loop para listar as categorias -->
      <li v-for="(category, index) in categories" :key="index" class="mb-2">
        <p>{{ category.name }}</p>
        <button @click="editCategory(category)">Editar</button>
        <button @click="deleteCategory(index)">Excluir</button>
      </li>
    </ul>
    <EditCategoryModal ref="editCategoryModal" :category="selectedCategory" :visible="isModalVisible"
      @closeModal="closeModal" @categoryAdded="onCategoryAdded" @categoryEdited="onCategoryEdited" />

  </div>
</template>

<script>
import EditCategoryModal from '@/components/EditCategoryModal.vue';

export default {
  props: {
    categories: Array,
  },
  data() {
    return {
      isModalVisible: false, // Variável de estado para controlar a visibilidade do modal
      selectedCategory: null, // Categoria selecionada para edição
      newCategory: '', // Variável para armazenar a nova categoria
    };
  },
  methods: {
    editCategory(category) {
      this.selectedCategory = category; // Defina a categoria selecionada
      this.isModalVisible = true; // Mostre o modal
    },
    closeModal() {
      this.isModalVisible = false; // Oculte o modal
    },
    onCategoryAdded(newCategory) {
      // Armazene o valor da nova categoria
      this.newCategory = newCategory;
    },
    onCategoryEdited(updatedCategory) {
      // Encontre o índice da categoria atualizada na lista
      const index = this.categories.findIndex(category => category.id === updatedCategory.id);

      if (index !== -1) {
        // Atualize a categoria na lista
        this.$store.commit('categories/editCategory', { index, updatedCategory });
      }
    },

    deleteCategory(index) {
      this.$store.dispatch('categories/deleteCategory', index);
    },
  },
  components: {
    EditCategoryModal,
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente usando Tailwind CSS */
</style>
