<script setup>
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import InstaIcon from '@/components/icons/InstaIcon.vue';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon.vue';
</script>

<template>
  <!-- Footer -->
  <footer class="contact-section">
    <div class="contact-info">
      <h3>Contact Information</h3>
      <p>Address: 1234 Main Street, City, State, ZIP</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: contact@company.com</p>
    </div>
    <div class="follow-us">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer" @click.prevent="">
          <TwitterIcon :height="40" :width="40" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" @click.prevent="">
          <InstaIcon :height="40" :width="40" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" @click.prevent="">
          <WhatsAppIcon :height="40" :width="40" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.follow-us {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.follow-us img {
  width: 40px;
  height: 40px;
}

footer.contact-section {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

footer .contact-info,
footer .follow-us {
  flex: 1;
  min-width: 300px;
}

footer h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

footer p {
  margin: 5px 0;
  font-size: 18px;
  line-height: 1.5;
}

footer .follow-us {
  text-align: left;
}

footer .follow-us img {
  width: 40px;
  height: 40px;
  margin: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

footer .follow-us img:hover {
  transform: scale(1.1);
}

footer .social-icons {
  display: flex;
  gap: 10px;
}

@media screen and (max-width: 768px) {
  footer.contact-section {
    flex-direction: column;
    gap: 20px;
  }

  footer .contact-info,
  footer .follow-us {
    min-width: 100%;
    text-align: center;
    align-items: center;
  }

  .container {
    padding-top: 5rem;
  }
}
</style>
