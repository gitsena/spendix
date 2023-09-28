<template>
  <div>
    <div class="bg-gray-200">
      <div class="container mx-auto flex items-center space-x-4 h-10 p-5 mb-10">
        <nuxt-link to="/home">Inicio</nuxt-link>
        <nuxt-link to="/transactions">Transações</nuxt-link>
        <nuxt-link to="/category">Categoria</nuxt-link>
      </div>
    </div>
    <TransactionList :transactions="transactions" />
    <SearchByDescription />
    <SearchByCategory />
    <button @click="openModal">Nova Transação</button>
    <TransactionModal v-if="showModal" :showModal="showModal" @addTransaction="addTransaction" @closeModal="closeModal" />

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      showModal: false, // Variável para controlar a exibição do modal
    };
  },
  computed: {
    ...mapState('transactions', ['transactions']),
  },
  methods: {
    ...mapActions('transactions', ['addTransaction']),

    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
}
</script>