<script setup></script>

<template>
  <button class="main-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.main-button {
  display: flex;
  width: 12rem;
  height: 3.5rem;
  border-radius: 5rem;
  background-color: var(--moderate-cyan);
  justify-content: center;
  align-items: center;
  color: #fafafa;
  text-decoration: none;
  font-size: 1rem;
  font-weight: var(--fw-bolder);
  transition: 0.6s all;
  border: 0.1rem solid transparent;
  outline: none;
}

.main-button:hover {
  cursor: pointer;
  background-color: var(--dark-cyan);
}

.main-button:focus-visible {
  border: 0.1rem solid var(--dark-gray);
}
</style>
