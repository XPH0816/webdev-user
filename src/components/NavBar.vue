<script setup>
import { RouterLink } from 'vue-router';

const toggleMenu = () => {
  const menu = document.querySelector('.navbar');
  menu.classList.toggle('active');
};
</script>

<template>
  <!-- Navbar -->
  <header class="navbar">
    <div class="logo-container">
      <RouterLink class="logo" to="/">XYZ Railway</RouterLink>
      <button id="menu-toggle" @click="toggleMenu">☰</button>
    </div>
    <nav>
      <RouterLink to="/about">About Us</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
      <RouterLink to="/feedback">Feedback</RouterLink>
      <input type="text" placeholder="Search here" />
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  background-color: #333;
  color: #ffffff;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar .logo {
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: #d1d1cd;
}

.navbar nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar nav a {
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  transition: color 0.3s ease-in-out;
  padding: 5px 10px;
  border-radius: 3px;
}

.navbar nav a:hover {
  color: #e7d4d4;
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar nav input[type="text"] {
  padding: 7px 15px;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  outline: none;
  color: #000000;
  background-color: #f8f9fa;
  transition: box-shadow 0.3s ease-in-out;
}

.navbar nav input[type="text"]:focus {
  box-shadow: 0 0 5px #f1e05a;
}

button#menu-toggle {
  display: none;
}

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    position: fixed;
    width: 100%;
    padding: 20px 0;
    gap: 10px;
    height: 1.2rem;
    z-index: 1000;
    transition: all .8s ease-in-out;
  }

  .navbar.active {
    height: 35dvh;
  }

  .navbar nav {
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: 10px;
    transform: translateY(-100vh);
    transition: transform 1s ease-in-out;
  }

  .navbar.active nav {
    transform: translateY(0);
  }


  .navbar nav a,
  .navbar nav input[type="text"] {
    opacity: 0;
    transition: opacity .2s;
  }

  .navbar.active nav a,
  .navbar.active nav input[type="text"] {
    opacity: 1;
    transition: opacity 2s ease-in-out;
  }

  button#menu-toggle {
    position: fixed;
    top: 15px;
    right: 15px;
    display: block;
    font-size: 24px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    cursor: pointer;
  }

  button#menu-toggle:focus {
    outline: none;
  }
}
</style>
