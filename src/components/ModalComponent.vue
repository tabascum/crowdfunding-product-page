<script setup>
import ModalCardsComponent from './ModalCardsComponent.vue'
import { useModalToggle } from '../stores/modalToggle'

const modalToggle = useModalToggle()

const closeModal = () => {
  modalToggle.closeModal()
}
</script>

<template>
  <Transition name="modal">
    <div class="modal-bg">
      <div class="modal-content" ref="modal">
        <svg
          @click="closeModal()"
          class="close-btn"
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
            fill="currentColor"
            fill-rule="evenodd"
            opacity=".4"
          />
        </svg>
        <div class="modal-header">
          <h1>Back this project</h1>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div>

        <div class="modal-content-inner">
          <ModalCardsComponent>
            <div class="modal-card">
              <div class="card-radio">
                <input type="radio" name="" id="" />
                <span class="checkmark"></span>
              </div>
              <div class="card-one">
                <h2>Pledge with no reward</h2>
                <p>
                  Choose to support us without a reward if you simply believe in our project. As a
                  backer, you will be signed up to receive product updates via email.
                </p>
              </div>
            </div>
          </ModalCardsComponent>
          <ModalCardsComponent>
            <div class="modal-card">
              <input type="radio" checked="checked" name="radio" id="" />
              <div>
                <h2>Bamboo Stand</h2>
              </div>
              <div>
                <span>0</span>
                <p>left</p>
              </div>
            </div>
          </ModalCardsComponent>
          <ModalCardsComponent>
            <div class="modal-card">
              <input type="radio" checked="checked" name="radio" id="" />
              <div>
                <h2>Bamboo Stand</h2>
              </div>
              <div>
                <span>0</span>
                <p>left</p>
              </div>
            </div>
          </ModalCardsComponent>
          <ModalCardsComponent>
            <div class="modal-card">
              <input type="radio" checked="checked" name="radio" id="" />
              <div>
                <h2>Bamboo Stand</h2>
              </div>
              <div>
                <span>0</span>
                <p>left</p>
              </div>
            </div>
          </ModalCardsComponent>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  height: 95vh;
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

::-webkit-scrollbar-track {
  -webkit-box-shadow: none !important;
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 3px !important;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.close-btn {
  color: var(--black);
  cursor: pointer;
  align-self: flex-end;
}

.modal-header h1 {
  color: var(--black);
  font-weight: var(--fw-bolder);
  font-size: 1.5rem;
}

.modal-content-inner {
  display: flex;
  flex-direction: column;
  margin-block-start: 0.5rem;
  gap: 1rem;
}

.modal-card {
  gap: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: start;
}

.modal-card div {
  display: inline-flex;
  gap: 0.5rem;
}

.modal-card h2 {
  color: var(--black);
  font-weight: var(--fw-bold);
}

.card-one {
  display: inherit;
  flex-direction: column;
}

.modal-stock {
  display: inline-flex;
  justify-self: end;
}

.no-reward {
  display: flex;
  flex-direction: column;
}
</style>
