import { defineStore } from 'pinia'

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const useTotalStore = defineStore('total', {
  state: () => ({
    totalValue: 89914,
    totalBackers: 5007,
    bambooTotal: 101,
    blackEditionTotal: 64,
    availablePledge: 0
  }),
  actions: {
    addToTotal(value) {
      this.totalValue += value
      this.incrementBackers()
    },
    incrementBackers() {
      this.totalBackers += 1
      this.decrementBambooTotal()
      this.decrementBlackEditionTotal()
    },
    decrementBambooTotal() {
      this.bambooTotal -= 1
    },
    decrementBlackEditionTotal() {
      this.blackEditionTotal -= 1
    }
  },
  getters: {
    formattedTotalValue() {
      return formatNumberWithCommas(this.totalValue)
    },
    formattedTotalBackers() {
      return formatNumberWithCommas(this.totalBackers)
    }
  }
})
