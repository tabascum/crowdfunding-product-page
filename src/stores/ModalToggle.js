import { defineStore } from 'pinia'

export const useModalToggle = defineStore('modalAcess', {
  state: () => ({
    isMenuOpen: false,
    isModalOpen: false,
    isSucessModalOpen: false
  }),
  actions: {
    openMenu() {
      this.isMenuOpen = true
    },
    openModal() {
      this.isModalOpen = true
      this.isSucessModalOpen = false
    },
    closeModal() {
      this.isModalOpen = false
    },

    closeMenu() {
      this.isMenuOpen = false
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
