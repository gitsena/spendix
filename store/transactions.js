export const state = () => ({
  transactions: [],
})

export const mutations = {
  addTransaction(state, transaction) {
    state.transactions.push(transaction)
  },
  editTransaction(state, { index, updatedTransaction }) {
    state.transactions[index] = updatedTransaction
  },
  deleteTransaction(state, index) {
    state.transactions.splice(index, 1)
  },
}

export const actions = {
  addTransaction({ commit }, transaction) {
    commit('addTransaction', transaction)
  },
  editTransaction({ commit }, { index, updatedTransaction }) {
    commit('editTransaction', { index, updatedTransaction })
  },
  deleteTransaction({ commit }, index) {
    commit('deleteTransaction', index)
  },
}
