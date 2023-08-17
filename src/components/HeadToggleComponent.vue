<script setup>
import BookmarkBtn from './BookmarkBtn.vue'
import InnerComponent from './InnerComponent.vue'
import MainBtnComponent from './MainBtnComponent.vue'
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
      <MainBtnComponent>Back this project</MainBtnComponent>
      <ModalComponent>
        <div>
          <h1>Back this project</h1>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div>

        <InnerComponent>
          <div>
            <input type="radio" name="selected" id="" />
          </div>
          <template #title>
            <h2>Bamboo Stand</h2>
            <p>Pledge $25 or more</p>
          </template>
        </InnerComponent>

        <InnerComponent>
          <template #title>
            <h2>Bamboo Stand</h2>
            <p>Pledge $25 or more</p>
          </template>
          <template #content>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our
              promotional campaign, and you’ll be added to a special Backer member list.
            </p>
          </template>
          <template #input>
            <div>
              <h2>101</h2>
              <p>left</p>
            </div>
          </template>
          <template #button>
            <MainBtnComponent>Select Reward</MainBtnComponent>
          </template>
        </InnerComponent>

        <InnerComponent>
          <template #title>
            <h2>Black Edition Stand</h2>
            <p>Pledge $75 or more</p>
          </template>
          <template #content>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be
              added to our Backer member list. Shipping is included.
            </p>
          </template>
          <template #input>
            <div>
              <h2>64</h2>
              <p>left</p>
            </div>
          </template>
          <template #button>
            <MainBtnComponent>Select Reward</MainBtnComponent>
          </template>
        </InnerComponent>

        <InnerComponent class="disabled">
          <template #title>
            <h2>Mahogany Special Edition</h2>
            <p>Pledge $200 or more</p>
          </template>
          <template #content>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank
              you. You’ll be added to our Backer member list. Shipping is included.
            </p>
          </template>
          <template #input>
            <div>
              <h2>0</h2>
              <p>left</p>
            </div>
          </template>
          <template #button>
            <MainBtnComponent class="disabled button">Out of Stock</MainBtnComponent>
          </template>
        </InnerComponent>
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
</style>
