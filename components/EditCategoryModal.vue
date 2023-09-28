<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 class="text-xl font-semibold mb-4">Editar Categoria</h2>
            <form @submit.prevent="editCategory">
                <div class="mb-4">
                    <label for="editedCategoryName" class="block text-sm font-medium text-gray-700">Nome da
                        Categoria:</label>
                    <input v-model="editedCategory.name" type="text" id="editedCategoryName" name="editedCategoryName"
                        class="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div class="text-right">
                    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Salvar</button>
                    <button @click="closeModal" class="text-gray-600 ml-2">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        category: Object,
        visible: Boolean,
    },
    data() {
        return {
            editedCategory: {
                name: '', // Inicialize com um valor vazio
            },
        };
    },
    methods: {
        openModal(category) {
            // Abra o modal e preencha os dados da categoria para edição
            this.editedCategory = { ...category };
        },
        editCategory() {
            // Chame a ação Vuex para atualizar a categoria existente
            this.$store.dispatch('categories/editCategory', {
                index: this.categoryIndex, // Supondo que você tenha o índice da categoria
                updatedCategory: this.editedCategory,
            });

            this.closeModal();
            this.$emit('categoryEdited', { index: this.categoryIndex, category: this.editedCategory });
            console.log(this.editedCategory);
        },

        closeModal() {
            // Emita um evento para fechar o modal
            this.$emit('closeModal');
        },
    },
}
</script>
  
<style scoped>
/* Estilos específicos para este componente usando Tailwind CSS */
</style>
  