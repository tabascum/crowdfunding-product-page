<script setup>
import AboutComponent from './AboutComponent.vue'
import HeadToggleComponent from './HeadToggleComponent.vue'
import NumbersComponent from './NumbersComponent.vue'
</script>

<template>
  <section class="main">
    <HeadToggleComponent />
    <NumbersComponent />
    <AboutComponent />
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
