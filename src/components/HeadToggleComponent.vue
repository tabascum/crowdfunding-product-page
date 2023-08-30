<script setup>
import BookmarkBtn from './BookmarkBtn.vue'
import MainBtnComponent from './MainBtnComponent.vue'

import { useModalToggle } from '../stores/modalToggle'

const openModalContent = useModalToggle()

const openModal = () => {
  openModalContent.openModal()
}
</script>

<template>
  <section class="head-toggle">
    <img src="@/assets/logo-mastercraft.svg" alt="main logo" />
    <article>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    </article>

    <article class="buttons-container">
      <MainBtnComponent @click="openModal">Back this project</MainBtnComponent>
      <BookmarkBtn />
    </article>
  </section>
</template>

<style scoped>
.head-toggle {
  background-color: var(--white);
  position: absolute;
  height: 16rem;
  width: min(768px, 100%);
  text-align: center;
  border-radius: 0.75rem;
  line-height: 2;
  padding-block: 2rem;
  border: 0.1rem solid var(--light-gray);
}

img {
  position: absolute;
  top: -1.5rem;
  left: 22rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: var(--fw-bolder);
}

p {
  color: var(--dark-gray);
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-block-start: 2rem;
  padding-inline: 3rem;
}
</style>
