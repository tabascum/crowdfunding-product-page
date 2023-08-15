<script setup>
import { ref } from 'vue'

const btnText = ref('Back this project')
</script>

<template>
  <a class="back-btn" href="#">{{ btnText }}</a>
</template>

<style scoped>
.back-btn {
  display: flex;
  width: 12rem;
  height: 3.5rem;
  border-radius: 5rem;
  background-color: var(--moderate-cyan);
  justify-content: center;
  align-items: center;
  color: #fafafa;
  text-decoration: none;
  font-weight: var(--fw-bolder);
  transition: 0.6s all;
}

.back-btn:hover {
  background-color: var(--dark-cyan);
}
</style>
