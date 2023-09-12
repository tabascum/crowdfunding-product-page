<script setup>
import { useModalToggle } from '../stores/ModalToggle'

const isMenuOpen = useModalToggle()
</script>

<template>
  <header class="navbar-container">
    <nav>
      <img
        class="page-logo"
        src="../assets/logo.svg"
        alt="crowdfund logo"
        srcset="../assets/logo.svg"
      />
      <ul class="desktop-navbar">
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
      <img
        @click="isMenuOpen ? isMenuOpen.openMenu() : isMenuOpen.closeMenu()"
        class="hamburguer-menu"
        src="./icons/icon-hamburger.svg"
      />

      <span v-if="isMenuOpen.isMenuOpen" @close="isMenuOpen.closeMenu" class="responsive-navbar-bg">
        <ul class="responsive-navbar">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </span>
    </nav>
  </header>
</template>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  padding-block: 3.2rem;
  color: var(--white);
}

nav {
  display: inherit;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

ul {
  list-style: none;
  display: inherit;
  gap: 1.5rem;
}

li {
  font-weight: var(--fw-normal);
  cursor: pointer;
}

.page-logo {
  height: auto;
  width: 8rem;
}

.hamburguer-menu,
.responsive-navbar-bg {
  display: none;
}

@media (max-width: 767px) {
  .navbar-container {
    position: relative;
    padding-block: 1.5rem;
  }
  .desktop-navbar {
    display: none;
  }

  .hamburguer-menu {
    display: block;
    cursor: pointer;
  }

  .responsive-navbar-bg {
    display: flex;
    justify-content: center;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .responsive-navbar {
    top: 5rem;
    width: 90%;
    position: absolute;
    background-color: var(--white);
    border-radius: 0.5rem;
    display: block;
  }

  ul li {
    padding: 1rem;
    color: var(--black);
    font-weight: var(--fw-bold);
  }

  ul li:not(:last-of-type) {
    border-block-end: 0.1rem solid var(--light-gray);
  }
}
</style>
