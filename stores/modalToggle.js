import { defineStore } from 'pinia'

export const useModalToggle = defineStore({
  id: 'modalAcess',
  state: () => ({
    isModalOpen: false
  }),
  actions: {
    openModal() {
      this.isModalOpen = true
    },

    closeModal() {
      this.isModalOpen = false
    }
  }
})
