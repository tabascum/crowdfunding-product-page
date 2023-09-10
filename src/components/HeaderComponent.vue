<scrip setup>



</scrip>

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
      <img class="hamburguer-menu" src="./icons/icon-hamburger.svg" />
      <span class="responsive-navbar">
        <ul>
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
.responsive-navbar {
  display: none;
}

@media (max-width: 767px) {
  .navbar-container {
    position: relative;
  }
  .desktop-navbar {
    display: none;
  }

  .hamburguer-menu {
    display: block;
    cursor: pointer;
  }

  .responsive-navbar {
    top: 7rem;
    width: 100%;
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
