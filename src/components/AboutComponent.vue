<script setup></script>

<template>
  <div class="about-container">
    <h1>About this project</h1>
    <p>
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
      screen to a more comfortable viewing height. Placing your monitor at eye level has the
      potential to improve your posture and make you more comfortable while at work, helping you
      stay focused on the task at hand.
    </p>
    <p>
      Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your
      computer to allow notepads, pens, and USB sticks to be stored under the stand.
    </p>
  </div>
</template>

<style scoped>
.about-container {
  height: 100%;
  position: absolute;
  width: min(768px, 100%);
  background-color: var(--white);
  color: var(--dark-gray);
  padding: 2rem 3rem;
  border-radius: 0.75rem;
  top: 54rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
}

.about-container h1 {
  color: var(--black);
  font-weight: var(--fw-bolder);
}
</style>