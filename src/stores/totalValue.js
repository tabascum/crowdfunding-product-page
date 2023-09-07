import { defineStore } from 'pinia'

export const useTotalStore = defineStore('total', {
  state: () => ({
    totalValue: 89914,
    totalBackers: 5007
  }),
  actions: {
    addToTotal(value) {
      this.totalValue += value
      this.incrementBackers()
    },
    incrementBackers() {
      this.totalBackers += 1
    }
  }
})
