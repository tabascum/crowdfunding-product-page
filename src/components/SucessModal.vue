<script setup>
import MainBtnComponent from './MainBtnComponent.vue'
import { useModalToggle } from '../stores/modalToggle'

const sucessModal = useModalToggle()

const closeSucessModal = () => {
  sucessModal.closeModal()
}
</script>

<template>
  <div class="modal-sucess-bg">
    <div class="modal-sucess-content">
      <picture>
        <img src="./icons/icon-check.svg" alt="" />
      </picture>
      <h2 class="modal-header">Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
        You will get an email once our campaign is completed.
      </p>
      <MainBtnComponent @click="closeSucessModal()" class="sucess-close-btn"
        >Got it!</MainBtnComponent
      >
    </div>
  </div>
</template>

<style scoped>
.modal-sucess-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-sucess-content {
  height: 100%;
  width: min(100%, 33vw);
  background-color: var(--white);
  color: var(--dark-gray);
  padding: 3rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.modal-header {
  font-weight: var(--fw-bolder);
  color: var(--black);
}

.sucess-close-btn {
  width: 7rem;
  height: 3rem;
  margin-block-start: 1rem;
  font-size: 0.9rem;
}
</style>
