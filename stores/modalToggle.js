import { defineStore } from 'pinia'

export const useModalToggle = defineStore({
  id: 'modalAcess',
  state: () => ({
    isModalActive: false
  }),
  actions: {
    changeState() {
      this.isModalActive = true
    }
  }
})
