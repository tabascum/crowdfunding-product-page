<script setup>
import { ref } from 'vue'

const isChecked = ref(false)
</script>

<template>
  <div :class="{ 'bookmark-container': true, checked: isChecked }">
    <label for="checkbox">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle
            :fill="isChecked ? 'var(--dark-cyan)' : 'var(--dark-gray)'"
            cx="28"
            cy="28"
            r="28"
          />
          <path
            :fill="isChecked ? 'var(--light-gray)' : '#B1B1B1'"
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>
      <p :class="{ 'checked-text': isChecked }">{{ isChecked ? 'Bookmarked' : 'Bookmark' }}</p>
    </label>
    <input type="checkbox" id="checkbox" v-model="isChecked" />
  </div>
</template>

<style scoped>
.bookmark-container {
  display: flex;
  position: relative;
  text-align: center;
  background-color: var(--light-gray);
  width: 11rem;
  height: 3.5rem;
  border-radius: 5rem;
  color: var(--moderate-cyan);

  & :hover {
    cursor: pointer;
  }
}

.checked {
  width: 12rem;
}

label {
  display: flex;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
}

p {
  position: absolute;
  top: 0.7rem;
  left: 4.5rem;
  color: var(--dark-gray);
  font-weight: var(--fw-bolder);
}

.checked-text {
  color: var(--dark-cyan);
}

input {
  display: none;
}

@media (max-width: 767px) {
  .bookmark-container {
    width: 3.5rem;
  }

  p {
    display: none;
  }
}
</style>
