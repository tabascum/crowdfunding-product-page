<script setup></script>

<template>
  <div class="modal-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.modal-content {
  max-height: 8rem;
  width: min(768px, 100%);
  background-color: var(--white);
  padding: 1rem;
  border-radius: 0.75rem;
  border: 0.1rem solid var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.6s all;
  cursor: pointer;

  border: 1px solid black;
}
</style>
