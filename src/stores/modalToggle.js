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

export const useChildModal = defineStore('childModal', {
  state: () => ({
    isSucessModalOpen: false
  }),
  actions: {
    openSucessModal() {
      this.isSucessModalOpen = true
    },

    closeSucessModal() {
      this.isSucessModalOpen = false
    }
  }
})
