<script setup>
import { ref } from 'vue'

const modalActive = ref(false)
</script>

<template>
  <Teleport to="body">
    <transition name="modal-animation">
      <div v-show="modalActive" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive" class="modal-content">
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="#000"
                fill-rule="evenodd"
                opacity=".4"
              />
            </svg>
            <slot></slot>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: 0.25s ease all;
}
.modal {
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
  min-height: 100vh;
  width: min(768px, 100%);
  background-color: var(--white);
  color: var(--dark-gray);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
