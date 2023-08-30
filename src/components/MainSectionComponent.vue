<script setup>
import AboutComponent from './AboutComponent.vue'
import HeadToggleComponent from './HeadToggleComponent.vue'
import NumbersComponent from './NumbersComponent.vue'
import ModalComponent from './ModalComponent.vue'

import { useModalToggle } from '../stores/modalToggle'

const modalToggle = useModalToggle()
</script>

<template>
  <section class="main">
    <HeadToggleComponent />
    <NumbersComponent />
    <AboutComponent />
    <Teleport to="body">
      <ModalComponent v-if="modalToggle.isModalOpen" />
    </Teleport>
  </section>
</template>

<style scoped>
.main {
  margin: 0 auto;
  width: 768px;
  height: 100vh;
  margin-block-start: 13rem;
  background-color: transparent;
}
</style>
