<script setup>
import BookmarkBtn from './BookmarkBtn.vue'
import ProjectBtn from './ProjectBtn.vue'
</script>

<template>
  <section class="head-toggle">
    <img src="../assets/logo-mastercraft.svg" alt="main logo" />
    <article>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    </article>

    <article class="buttons-container">
      <ProjectBtn />
      <BookmarkBtn />
    </article>
  </section>
</template>

<style scoped>
.head-toggle {
  background-color: #fafafa;
  position: absolute;
  height: 30%;
  width: 768px;
  text-align: center;
  margin-block-start: 13rem;
  border-radius: 0.75rem;
  line-height: 2;
  padding-block: 3rem;
}

img {
  position: absolute;
  top: -1.5rem;
  left: 22rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: var(--fw-bolder);
}

p {
  color: var(--dark-gray);
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-block-start: 2rem;
  padding-inline: 4rem;
}
</style>
