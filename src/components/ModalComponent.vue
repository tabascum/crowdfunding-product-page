<script setup>
import MainBtnComponent from './MainBtnComponent.vue'
import { useModalToggle } from '../stores/ModalToggle'

import { ref } from 'vue'
import { useTotalStore } from '../stores/TotalStore'

const noRewardInputValue = ref('')
const bambooStandInputValue = ref('')
const blackEditionStandInputValue = ref('')

const totalStore = useTotalStore()
const modalToggle = useModalToggle()

const updateTotalAndOpenModal = (section) => {
  let inputValue = 0

  if (section === 'noReward') {
    inputValue = parseInt(noRewardInputValue.value) || 0
  } else if (section === 'bambooStand') {
    inputValue = parseInt(bambooStandInputValue.value) || 0
    if (inputValue > 0) {
      totalStore.decrementBambooTotal()
    }
  } else if (section === 'blackEditionStand') {
    inputValue = parseInt(blackEditionStandInputValue.value) || 0
    if (inputValue > 0) {
      totalStore.decrementBlackEditionTotal()
    }
  }

  totalStore.addToTotal(inputValue)
  modalToggle.openSucessModal()
}
</script>

<template>
  <Transition name="modal">
    <div class="modal-bg">
      <div class="modal-content" ref="modal">
        <svg
          @click="modalToggle.closeModal()"
          class="close-btn"
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
            fill="#000"
            opacity=".4"
          />
        </svg>
        <div class="modal-header">
          <h1>Back this project</h1>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div>

        <div class="modal-content-inner">
          <div class="modal-card">
            <div class="card-radio">
              <input type="radio" name="text" id="noReward" />
              <span class="checkmark"></span>
            </div>
            <div class="pledge">
              <div class="pledge-content">
                <div class="pledge-header">
                  <h2>Pledge with no reward</h2>
                </div>
                <p>
                  Choose to support us without a reward if you simply believe in our project. As a
                  backer, you will be signed up to receive product updates via email.
                </p>
              </div>
            </div>

            <div class="card-footer">
              <p for="text">Enter your pledge</p>
              <div>
                <input
                  type="text"
                  name="noReward"
                  id="noReward"
                  v-model="noRewardInputValue"
                  autocomplete="off"
                />
                <MainBtnComponent @click="updateTotalAndOpenModal('noReward')" class="btn-continue">
                  Continue
                </MainBtnComponent>
              </div>
            </div>
          </div>

          <div class="modal-card">
            <div class="card-radio">
              <input type="radio" name="text" id="bambooStand" />
              <span class="checkmark"></span>
            </div>
            <div class="pledge">
              <div class="pledge-content">
                <div class="pledge-header">
                  <h2>Bamboo Stand</h2>
                  <p class="pledge-value">Pledge $25 or more</p>
                  <p class="value">
                    <strong>{{ totalStore.bambooTotal }}</strong> left
                  </p>
                </div>

                <p>
                  You get an ergonomic stand made of natural bamboo. You've helped us launch our
                  promotional campaign, and you’ll be added to a special Backer member list.
                </p>
              </div>
            </div>

            <div class="card-footer">
              <p for="text">Enter your pledge</p>
              <div>
                <input
                  type="text"
                  name="bambooStand"
                  id="bambooStand"
                  v-model="bambooStandInputValue"
                  autocomplete="off"
                />
                <MainBtnComponent
                  @click="updateTotalAndOpenModal('bambooStand')"
                  class="btn-continue"
                >
                  Continue
                </MainBtnComponent>
              </div>
            </div>
          </div>

          <div class="modal-card">
            <div class="card-radio">
              <input type="radio" name="text" id="blackEditionStand" />
              <span class="checkmark"></span>
            </div>
            <div class="pledge">
              <div class="pledge-content">
                <div class="pledge-header">
                  <h2>Black Edition Stand</h2>
                  <p class="pledge-value">Pledge $75 or more</p>
                  <p class="value">
                    <strong>{{ totalStore.blackEditionTotal }}</strong> left
                  </p>
                </div>

                <p>
                  You get a Black Special Edition computer stand and a personal thank you. You’ll be
                  added to our Backer member list. Shipping is included.
                </p>
              </div>
            </div>

            <div class="card-footer">
              <p for="text">Enter your pledge</p>
              <div>
                <input
                  type="text"
                  name="blackEditionStand"
                  id="blackEditionStand"
                  v-model="blackEditionStandInputValue"
                  autocomplete="off"
                />
                <MainBtnComponent
                  @click="updateTotalAndOpenModal('blackEditionStand')"
                  class="btn-continue"
                >
                  Continue
                </MainBtnComponent>
              </div>
            </div>
          </div>

          <div class="modal-card disabled">
            <div class="card-radio">
              <input type="radio" name="text" id="" />
              <span class="checkmark"></span>
            </div>
            <div class="pledge">
              <div class="pledge-content">
                <div class="pledge-header">
                  <h2>Mahogany Special Edition</h2>
                  <p class="pledge-value">Pledge $200 or more</p>
                  <p class="value"><strong>0</strong> left</p>
                </div>

                <p>
                  You get an ergonomic stand made of natural bamboo. You've helped us launch our
                  promotional campaign, and you’ll be added to a special Backer member list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-bg {
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: min(768px, 100%);
  background-color: var(--white);
  color: var(--dark-gray);
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: none !important;
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 0.1rem !important;
  background-color: var(--light);
}
::-webkit-scrollbar-thumb {
  background-color: var(--moderate-cyan);
}

.close-btn {
  color: var(--black);
  cursor: pointer;
  align-self: flex-end;
  position: fixed;
}

.modal-header {
  margin-block-end: 1rem;
}

.modal-header h1 {
  color: var(--black);
  font-weight: var(--fw-bolder);
  font-size: 1.5rem;
  margin-block-end: 0.8rem;
}

.modal-content-inner {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1rem;
}

.modal-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 0.1rem solid var(--light-gray);
}

.modal-card div {
  display: flex;
  gap: 0.5rem;
}

.card-radio {
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  font-size: 0.6rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  border: 0.1rem solid var(--light-gray);
}
.checkmark::after {
  content: '';
  position: absolute;
  display: none;
}

input[type='radio'] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

input[type='radio']:checked ~ .checkmark {
  background-color: var(--moderate-cyan);
}

input[type='radio']:checked ~ .checkmark::after {
  display: block;
}

input[type='radio'].checkmark::after {
  top: 0.24rem;
  left: 0.3rem;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: var(--moderate-cyan);
}
.card-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-start: 1.5rem;
  padding-block-start: 2rem;
  border-block-start: 0.1rem solid var(--light-gray);
}

.pledge {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline-start: 2.1rem;
}

.pledge-content {
  display: flex;
  flex-direction: column;
}

.pledge-header {
  align-items: center;
  line-height: 1;
  width: 100%;
  cursor: pointer;
}

.pledge-header h2 {
  font-size: 1.05rem;
  color: var(--black);
  font-weight: var(--fw-bolder);
  transition: 0.3s all;
}

.pledge-header h2:hover:not(.disabled .pledge-header h2) {
  color: var(--moderate-cyan);
}

.pledge-content p {
  font-size: 0.95rem;
}

.pledge-value {
  color: var(--moderate-cyan);
}

.value {
  align-self: flex-end;
}

.value strong {
  font-size: large;
  font-weight: var(--fw-bolder);
  color: var(--black);
}

.btn-continue {
  width: 8rem;
  height: 2.5rem;
}

input[type='text'] {
  height: 2.5rem;
  width: 5.5rem;
  border-radius: 5rem;
  border: 0.1rem solid var(--light-gray);
  padding-inline-start: 2.75rem;
  font-size: 0.9rem;
  color: var(--dark-gray);
  font-weight: var(--fw-bolder);
  cursor: pointer;
}

input[type='text']:is(:focus-visible) {
  border: 0.1rem solid var(--moderate-cyan);
  outline: none;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
