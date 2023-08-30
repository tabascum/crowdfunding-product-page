<script setup>
import InnerComponent from './InnerComponent.vue'
import MainBtnComponent from './MainBtnComponent.vue'

import { useModalToggle } from '../stores/modalToggle'

const modalToggle = useModalToggle()

const openModal = () => {
  modalToggle.openModal()
}
</script>

<template>
  <div class="about-container">
    <h1>About this project</h1>
    <p>
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
      screen to a more comfortable viewing height. Placing your monitor at eye level has the
      potential to improve your posture and make you more comfortable while at work, helping you
      stay focused on the task at hand.
    </p>
    <p>
      Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your
      computer to allow notepads, pens, and USB sticks to be stored under the stand.
    </p>

    <InnerComponent>
      <template #title>
        <h2>Bamboo Stand</h2>
        <p>Pledge $25 or more</p>
      </template>
      <template #content>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
          campaign, and you’ll be added to a special Backer member list.
        </p>
      </template>
      <template #input>
        <div>
          <h2>101</h2>
          <p>left</p>
        </div>
      </template>
      <template #button>
        <MainBtnComponent @click="openModal">Select Reward</MainBtnComponent>
      </template>
    </InnerComponent>

    <InnerComponent>
      <template #title>
        <h2>Black Edition Stand</h2>
        <p>Pledge $75 or more</p>
      </template>
      <template #content>
        <p>
          You get a Black Special Edition computer stand and a personal thank you. You’ll be added
          to our Backer member list. Shipping is included.
        </p>
      </template>
      <template #input>
        <div>
          <h2>64</h2>
          <p>left</p>
        </div>
      </template>
      <template #button>
        <MainBtnComponent @click="openModal">Select Reward</MainBtnComponent>
      </template>
    </InnerComponent>

    <InnerComponent class="disabled">
      <template #title>
        <h2>Mahogany Special Edition</h2>
        <p>Pledge $200 or more</p>
      </template>
      <template #content>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
          You’ll be added to our Backer member list. Shipping is included.
        </p>
      </template>
      <template #input>
        <div>
          <h2>0</h2>
          <p>left</p>
        </div>
      </template>
      <template #button>
        <MainBtnComponent class="button">Out of Stock</MainBtnComponent>
      </template>
    </InnerComponent>
  </div>
</template>

<style scoped>
.about-container {
  height: 100%;
  position: absolute;
  width: min(768px, 100%);
  background-color: var(--white);
  color: var(--dark-gray);
  padding: 4rem 3rem;
  border-radius: 0.75rem;
  top: 54rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
}

.about-container h1 {
  color: var(--black);
  font-weight: var(--fw-bolder);
}

.disabled {
  opacity: 0.6;
  cursor: initial;
}

.disabled:hover {
  border: 0.1rem solid var(--light-gray);
  cursor: normal;
}

.button {
  background-color: var(--dark-gray);
}

.button:hover {
  cursor: initial;
  background-color: var(--dark-gray);
}
</style>
