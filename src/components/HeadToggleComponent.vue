<script setup>
import BookmarkBtn from './BookmarkBtn.vue'
import ModalCardsComponent from './ModalCardsComponent.vue'
import ModalComponent from './ModalComponent.vue'
</script>

<template>
  <section class="head-toggle">
    <img src="@/assets/logo-mastercraft.svg" alt="main logo" />
    <article>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    </article>

    <article class="buttons-container">
      <ModalComponent>
        <div class="modal-header">
          <h1>Back this project</h1>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div>

        <div class="modal-content">
          <ModalCardsComponent>
            <div class="modal-card">
              <div class="card-radio">
                <input type="radio" name="" id="" />
                <span class="checkmark"></span>
              </div>
              <div class="card-one">
                <h2>Pledge with no reward</h2>
                <p>
                  Choose to support us without a reward if you simply believe in our project. As a
                  backer, you will be signed up to receive product updates via email.
                </p>
              </div>
            </div>
          </ModalCardsComponent>
          <ModalCardsComponent>
            <div class="modal-card">
              <input type="radio" checked="checked" name="radio" id="" />
              <div>
                <h2>Bamboo Stand</h2>
              </div>
              <div>
                <span>0</span>
                <p>left</p>
              </div>
            </div>
          </ModalCardsComponent>
        </div>
      </ModalComponent>

      <BookmarkBtn />
    </article>
  </section>
</template>

<style scoped>
.head-toggle {
  background-color: var(--white);
  position: absolute;
  height: 16rem;
  width: min(768px, 100%);
  text-align: center;
  border-radius: 0.75rem;
  line-height: 2;
  padding-block: 2rem;
  border: 0.1rem solid var(--light-gray);
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
  padding-inline: 3rem;
}

.modal-header {
  margin-block: 0.5rem;
}

.modal-header h1 {
  color: var(--black);
  margin-block-end: 0.5rem;
}

.modal-content {
  display: flex;
  flex-direction: column;
  margin-block-start: 0.5rem;
  gap: 1.5rem;
}

.modal-card {
  gap: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: start;
}

.modal-card div {
  display: inline-flex;
  gap: 0.5rem;
}

.modal-card h2 {
  color: var(--black);
  font-weight: var(--fw-bold);
}

.card-one {
  display: inherit;
  flex-direction: column;
}

.modal-stock {
  display: inline-flex;
  justify-self: end;
}

.no-reward {
  display: flex;
  flex-direction: column;
}
</style>
