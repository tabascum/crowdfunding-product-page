<scrip setup></scrip>

<template>
  <header class="navbar-container">
    <nav>
      <img src="../assets/logo.svg" alt="" srcset="" />
      <ul>
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
      <img src="../components/icons/icon-hamburger.svg" alt="" hidden />
    </nav>
  </header>
</template>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  padding-block: 3.2rem;
  color: #fafafa;
}

nav {
  display: inherit;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  width: 100%;
}

ul {
  list-style: none;
  display: inherit;
  gap: 1.5rem;
}

li {
  cursor: pointer;
}
</style>
