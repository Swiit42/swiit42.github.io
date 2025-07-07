<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center pt-6 pb-6">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden">
        <div class="lg:w-1/2 h-64 lg:h-auto">
          <img src="@/assets/contact.webp" alt="Contact Photo" class="w-full h-full object-cover">
        </div>

        <div class="lg:w-1/2 p-8">
          <h2 class="text-2xl font-bold mb-6">Contactez-moi</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-semibold">Nom</label>
              <input type="text" id="name" v-model="form.name" required class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Votre nom">
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-semibold">Email</label>
              <input type="email" id="email" v-model="form.email" required class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Votre email">
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-semibold">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Votre message"></textarea>
            </div>
            <button :disabled="isSending" type="submit" class="px-5 py-2 font-medium border rounded-sm transition duration-200 bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600">
              {{ isSending ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 shadow-lg max-w-sm text-center">
        <h3 class="text-xl font-bold mb-4">Message envoyé !</h3>
        <p>Votre message a été envoyé avec succès.</p>
        <button @click="isModalVisible = false" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      isModalVisible: false,
      isSending: false, // Indicateur pour l'état d'envoi
    };
  },
  methods: {
    handleSubmit() {
      this.isSending = true;
      emailjs
        .send(
          'service_tkit5nr',
          'template_ytdjm2l',
          {
            from_name: this.form.name,
            from_email: this.form.email,
            message: this.form.message,
          },
          'mY_BrVHo7kMxoiqEI'
        )
        .then(() => {
          this.isModalVisible = true;
          this.form = { name: '', email: '', message: '' }; // Réinitialise le formulaire
        })
        .catch((err) => {
          console.error('Erreur :', err);
          alert('Une erreur est survenue. Veuillez réessayer.');
        })
        .finally(() => {
          this.isSending = false;
        });
    },
  },
};
</script>

<style scoped>
.fixed {
  z-index: 50;
}
button:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
}
</style>
