import { defineStore } from 'pinia'

export const useModalToggle = defineStore('modalAcess', {
  state: () => ({
    isModalOpen: false,
    isSucessModalOpen: false
  }),
  actions: {
    openModal() {
      this.isModalOpen = true
      this.isSucessModalOpen = false
    },
    closeModal() {
      this.isModalOpen = false
    },

    openSucessModal() {
      this.isSucessModalOpen = true
      this.isModalOpen = false
    },
    closeSucessModal() {
      this.isSucessModalOpen = false
    }
  }
})
