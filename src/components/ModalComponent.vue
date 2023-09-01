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
            <div class="modal-card selected">
              <div class="card-radio">
                <input type="radio" checked="checked" name="" id="" />
                <span class="checkmark"></span>
              </div>
              <div class="card-one">
                <div class="pledge-header">
                  <h2>Bamboo Stand</h2>
                  <p class="pledge-value">Pledge $25 or more</p>
                  <span>
                    <p>101</p>
                    <p>left</p>
                  </span>
                </div>
                <p>
                  You get an ergonomic stand made of natural bamboo. You've helped us launch our
                  promotional campaign, and you’ll be added to a special Backer member list.
                </p>
              </div>
            </div>
          </ModalCardsComponent>
          <ModalCardsComponent>
            <div class="modal-card">
              <div class="card-radio">
                <input type="radio" name="" id="" />
                <span class="checkmark"></span>
              </div>
              <div class="pledge">
                <div class="pledge-header">
                  <h2>Black Edition Stand</h2>
                  <p class="pledge-value">Pledge $75 or more</p>
                  <span>
                    <p>64</p>
                    <p>left</p>
                  </span>
                </div>
                <p>
                  You get a Black Special Edition computer stand and a personal thank you. You’ll be
                  added to our Backer member list. Shipping is included.
                </p>
              </div>
            </div>
          </ModalCardsComponent>
          <ModalCardsComponent>
            <div class="modal-card">
              <div class="card-radio">
                <input type="radio" name="" id="" />
                <span class="checkmark"></span>
              </div>
              <div class="pledge disabled">
                <div class="pledge-header">
                  <h2>Mahogany Special Edition</h2>
                  <p class="pledge-value">Pledge $200 or more</p>
                  <span>
                    <p>0</p>
                    <p>left</p>
                  </span>
                </div>
                <p>
                  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
                  thank you. You’ll be added to our Backer member list. Shipping is included.
                </p>
              </div>
            </div>
          </ModalCardsComponent>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
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
  line-height: 1;
}

.modal-content-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-card {
  display: flex;
  width: 100%;
}

.modal-card div {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
}

.modal-card h2 {
  font-size: 1.1rem;
  color: var(--black);
  font-weight: var(--fw-bolder);
  transition: 0.3s all;
}

.modal-card h2:hover {
  color: var(--moderate-cyan);
}

.modal-card p {
  font-size: 0.9rem;
}

.card-radio {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 0.6rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.card-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  border: 0.1rem solid var(--light-gray);
}

.card-radio input:checked ~ .checkmark {
  background-color: var(--light);
}

.checkmark::after {
  content: '';
  position: absolute;
  display: none;
}

.card-radio input:checked ~ .checkmark::after {
  display: block;
}

.card-radio .checkmark::after {
  top: 0.24rem;
  left: 0.3rem;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: var(--moderate-cyan);
}

.card-one,
.pledge {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pledge-header {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  font-weight: var(--fw-bolder);
  color: var(--black);
  width: 100%;
}

.pledge-header .pledge-value {
  display: flex;
  justify-content: center;
  font-weight: var(--fw-bolder);
  color: var(--moderate-cyan);
}

.pledge-header span {
  align-self: flex-end;
  justify-content: center;
  display: flex;
  gap: 0.2rem;
}

.pledge-header span p:first-of-type {
  font-size: 1.2rem;
  font-weight: var(--fw-bolder);
}

.disabled {
  opacity: 0.5;
}
</style>
