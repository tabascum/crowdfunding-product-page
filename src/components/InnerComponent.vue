<script setup></script>

<template>
  <div class="about-inner-card">
    <div class="inner-header">
      <slot name="title"></slot>
    </div>
    <div class="inner-content">
      <slot name="content"></slot>
    </div>

    <div class="inner-button">
      <slot name="input"></slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<style>
.about-inner-card {
  height: 16rem;
  width: min(768px, 100%);
  background-color: var(--white);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 0.1rem solid var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.6s all;
  cursor: pointer;
}

@media (max-width: 767px) {
  .about-inner-card {
    height: auto;
    width: 100%;
    padding: 1rem;
    gap: 0.5rem;
  }

  .inner-header,
  .inner-button {
    align-items: flex-start !important;
    flex-direction: column;
  }
}

.inner-header,
.inner-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inner-header h2 {
  font-weight: var(--fw-bolder);
  color: var(--black);
}

.inner-header p {
  color: var(--moderate-cyan);
  font-weight: var(--fw-bold);
}

.inner-content {
  padding-block: 1rem;
}

.inner-button div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.inner-button h2 {
  font-size: 2rem;
  font-weight: var(--fw-bolder);
  color: var(--black);
}
</style>
