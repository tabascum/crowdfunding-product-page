import { defineStore } from 'pinia'

export const useModalToggle = defineStore({
  id: 'modalAcess',
  state: () => ({
    isModalOpen: false
  }),
  actions: {
    openOrClose() {
      this.isModalOpen ? (this.isModalOpen = true) : (this.isModalOpen = false)
    }
  }
})
