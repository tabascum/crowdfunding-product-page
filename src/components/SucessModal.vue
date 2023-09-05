<script setup>
import { useModalToggle } from '../stores/modalToggle'
const modalToggle = useModalToggle()

const closeModalSucess = () => {
  modalToggle.closeModalSucess()
}
</script>

<template>
  <Transition name="modalSucess">
    <div class="modal-sucess-bg">
      <div class="modal-sucess-content">
        <div>
          This is a new modal
          <button @click="closeModalSucess()"></button>
        </div>
      </div>
    </div>
  </Transition>
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
  width: min(768px, 100%);
  background-color: var(--white);
  color: var(--dark-gray);
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  gap: 0.5rem;
}
</style>
