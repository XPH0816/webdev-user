<script setup>
import TextInput from '@/components/TextInput.vue';

const props = defineProps({
  title: String,
});

const username = defineModel('name');
const email = defineModel('email');
</script>

<template>
  <div class="feedback-container">
    <!-- Introduction Section -->
    <div class="intro">
      <h2>Welcome to Railway Service Feedback</h2>
      <p>
        Please provide your feedback on the railway services you have experienced. Your input helps us improve the
        quality and efficiency of the services we offer.
      </p>
    </div>

    <!-- Form Section -->
    <div class="form-section">
      <h1>{{ props.title }}</h1>
      <form class="pure-form pure-form-stacked">
        <fieldset>
          <legend>Passenger Information</legend>
          <TextInput label="Name" v-model="username" title="Name" />
          <TextInput label="Email" v-model="email" title="Email" />
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.feedback-container {
  display: flex;
  flex-direction: column;
  /* Space between elements */
  justify-content: space-between;
}

/* Introduction Section with Background Image */
.intro {
  max-width: 400px;
  padding: 30px;
  margin: auto;
  /* flex: 1; */
  background-image: url('@/assets/images/FEEDBACK.png');
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 5px;
}

/* Form Section */
.form-section {
  min-width: 300px;
  padding: 40px;
  margin: auto;
}

.form-section h1 {
  text-align: center;
  color: #0073e6;
}

fieldset {
  border: none;
}

.pure-form-stacked fieldset {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  background: #f9f9f9;
  display: flex;
  gap: 5rem;
  font-size: 22px;
}

.pure-form-stacked input {
  padding: .8rem;
  border-radius: 10px;
}

.button-primary {
  width: 100%;
  padding: 10px;
  background-color: #0073e6;
  color: white;
  border: 1px solid #005bb5;
  border-radius: 5px;
  font-size: 1rem;
}

.button.button-primary {
  background-color: #005bb5;
}

@media screen and (max-width: 768px) {
  .feedback-container {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .intro,
  .form-section {
    width: 100%;
  }

  .intro {
    padding-left: 0%;
    padding-right: 0%;
  }

  .form-section {
    padding: 0px;
  }

  h2 {
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
  }

  .pure-form-stacked fieldset {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
}
</style>
