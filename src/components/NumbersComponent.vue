<script setup>
import { useTotalStore } from '../stores/TotalStore'

const totalStore = useTotalStore()
</script>

<template>
  <section class="numbers-container">
    <article class="backers">
      <div>
        <h1>${{ totalStore.formattedTotalValue }}</h1>
        <p>of $100,000 backed</p>
      </div>
      <div>
        <h1>{{ totalStore.formattedTotalBackers }}</h1>
        <p>total backers</p>
      </div>
      <div>
        <h1>56</h1>
        <p>days left</p>
      </div>
    </article>
    <article class="progress-bar">
      <div class="progress"></div>
    </article>
  </section>
</template>

<style>
.numbers-container {
  position: absolute;
  background-color: var(--white);
  height: auto;
  width: min(768px, 100%);
  margin-block-start: 16rem;
  border-radius: 0.75rem;
  display: flex;
  flex-basis: content;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  border: 0.1rem solid var(--light-gray);
  gap: 1.5rem;
}

@media (max-width: 767px) {
  .numbers-container {
    height: auto;
    width: 90%;
    padding: 1rem;
    margin-block-start: 19.7rem;
  }

  .backers {
    width: auto;
    flex-direction: column;
    text-align: center;
  }

  .backers div:nth-child(2) {
    padding-inline-start: none;
    border-inline: 0.1rem solid transparent !important;
  }

  .backers div:nth-child(3) {
    padding-inline-start: none;
  }
}

.backers {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.backers div {
  width: 100%;
  gap: 1rem;
}

.backers div:nth-child(2) {
  padding-inline-start: 1.5rem;
  border-inline: 0.1rem solid var(--dark-gray);
}

.backers div:nth-child(3) {
  padding-inline-start: 1.5rem;
}

.backers h1 {
  font-size: 2rem;
  font-weight: var(--fw-bolder);
}

.backers p {
  color: var(--dark-gray);
}

.progress-bar {
  height: 0.8rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--light-gray);
}

.progress {
  height: 0.8rem;
  border-radius: 1rem;
  background-color: var(--moderate-cyan);
  width: 80%;
}
</style>
