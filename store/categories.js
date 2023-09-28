export const state = () => ({
  categories: [],
});

export const mutations = {
  addCategory(state, category) {
    state.categories.push(category);
  },
  editCategory(state, { index, updatedCategory }) {
    state.categories[index] = updatedCategory;
  },
  deleteCategory(state, index) {
    state.categories.splice(index, 1);
  },
  
};


export const actions = {
  addCategory({ commit }, category) {
    commit("addCategory", category);
  },
  editCategory({ commit }, { index, updatedCategory }) {
    commit("editCategory", { index, updatedCategory });
  },
  deleteCategory({ commit }, index) {
    commit("deleteCategory", index);
  },
  
};
