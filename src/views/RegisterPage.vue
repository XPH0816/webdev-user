<script setup>
import EmailIcon from "@/components/icons/EmailIcon.vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EyeSlash from "@/components/icons/EyeSlash.vue";
import LockCheck from "@/components/icons/LockCheck.vue";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const passwordVisible = ref(false);

function register() {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  alert("Registration successful!");
}

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>

<template>
  <div class="register-container">
    <div class="register-form">
      <RouterLink to="/" class="back-home">&lt; BACK TO HOME</RouterLink>
      <h1>REGISTER</h1>
      <form @submit.prevent="register">
        <div class="input-group">
          <div class="input-wrapper">
            <input v-model="username" type="email" id="email" placeholder="Enter your email" required />
            <EmailIcon class="icon" />
          </div>
        </div>

        <div class="input-group">
          <div class="input-wrapper">
            <input v-model="password" :type="passwordVisible ? 'text' : 'password'" id="password"
              placeholder="Enter your password" required />
            <EyeIcon v-if="passwordVisible" class="icon" @click="togglePasswordVisibility" style="cursor: pointer;" />
            <EyeSlash v-else class="icon" @click="togglePasswordVisibility" style="cursor: pointer;" />
          </div>
        </div>

        <div class="input-group">
          <div class="input-wrapper">
            <input v-model="confirmPassword" :type="passwordVisible ? 'text' : 'password'" id="confirmPassword"
              placeholder="Confirm your password" required />
            <LockCheck class="icon" />
          </div>
        </div>
        <button type="submit">SIGN UP</button>
      </form>

      <p class="login-link">
        Already have an account? <RouterLink to="/login">Login</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.register-form {
  background: #ffffff;
  width: 400px;
  padding: 50px;
  border-radius: 34px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.back-home {
  display: block;
  text-align: left;
  font-size: 16px;
  color: #4CAF50;
  text-decoration: none;
  margin-bottom: 20px;
}

h1 {
  color: #333;
  font-size: 26px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
}

.input-group {
  width: 100%;
  /* Ensure input group takes full width */
  position: relative;
  /* Position relative for icon positioning */
}

.input-group label {
  color: #333;
  text-align: left;
  font-size: 14px;
  display: block;
}

.input-group input {
  width: 100%;
  /* Ensure input takes full width */
  padding: 12px;
  /* Match padding with button */
  padding-right: 40px;
  /* Add padding-right to accommodate the icon */
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  /* Include padding in width calculation */
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
  /* Ensure wrapper takes full width */
}

input:focus {
  outline: none;
  border-color: #4CAF50;
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
  background-color: #45a049;
}

.login-link {
  margin-top: 20px;
  color: #333;
}

.login-link a {
  color: #4CAF50;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
