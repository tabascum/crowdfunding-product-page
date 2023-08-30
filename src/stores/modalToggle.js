import { defineStore } from 'pinia'

export const useModalToggle = defineStore('modalAcess', {
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
