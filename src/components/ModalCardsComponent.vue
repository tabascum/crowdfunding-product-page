<script setup></script>

<template>
  <div class="modal-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.modal-content {
  max-height: 8.5rem;
  width: 100%;
  background-color: var(--white);
  border-radius: 0.75rem;
  border: 0.1rem solid var(--light-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 0.6s all;
  cursor: pointer;
}
</style>
