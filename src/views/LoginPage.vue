<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
function handleSubmit() {
  console.log('Username:', username.value);
  console.log('Password:', password.value);
  console.log('Remember Me:', rememberMe.value);
}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <RouterLink to="/" class="back-home">&lt; BACK TO HOME</RouterLink>
      <h1>LOGIN</h1>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <input v-model="username" type="text" placeholder="Enter your email" required>
          <span class="icon">&#128100;</span>
        </div>
        <div class="input-group">
          <input v-model="password" type="password" placeholder="Enter your password" required>
          <span class="icon">&#128274;</span>
        </div>
        <div class="options">
          <label>
            <input type="checkbox" v-model="rememberMe"> REMEMBER ME
          </label>
          <a href="#">FORGOT PASSWORD?</a>
        </div>
        <button type="submit">LOGIN</button>
        <p class="register-text">
          DOESN'T HAVE ANY ACCOUNT? <RouterLink to="/register">REGISTER</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Comic Neue', 'Comic Sans MS', cursive, sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}

.login-container {
  background: #ffffff;
  width: 400px;
  padding: 50px;
  border-radius: 34px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  /* font-family: 'Comic Sans MS', cursive, sans-serif; */
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  width: 100%;
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 12px;
  padding-right: 40px;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}

.input-group .icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #000000;
}

.input-wrapper {
  width: 100%;
}

.options {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.options label {
  cursor: pointer;
}

.options a {
  font-weight: bold;
  text-decoration: none;
  color: #4CAF50;
}

.options a:hover {
  text-decoration: underline;
}

.back-home {
  display: block;
  text-align: left;
  font-size: 16px;
  color: #4CAF50;
  text-decoration: none;
  margin-bottom: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #634d4d;
}

.register-text {
  font-size: 1rem;
}

.register-text a {
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
}

.register-text a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .login-container {
    width: 80%;
  }
}
</style>
