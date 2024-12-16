<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView name="navbar" />
    <!-- Main Content -->
    <main class="container">
      <RouterView />
    </main>

    <RouterView name="footer" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 2rem;
}

main {
  padding: 20px 0;
}

@media screen and (max-width: 768px) {
  main {
    padding: 4rem 0;
  }

  .container {
    gap: 1rem;
  }
}
</style>
