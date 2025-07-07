<template>
  <footer class="bg-emerald-600 text-white py-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
      
      <!-- Bloc contact -->
      <div class="text-center md:text-left space-y-2">
        <h2 class="text-lg font-bold">Contactez-moi</h2>
        <p class="flex items-center justify-center md:justify-start">
          <Mail class="w-5 h-5 text-emerald-200" />
          <a href="mailto:sacha.tymoshenko@gmail.com" class="ml-2 hover:text-emerald-200 transition">
            sacha.tymoshenko@gmail.com
          </a>
        </p>
        <p class="flex items-center justify-center md:justify-start">
          <Phone class="w-5 h-5 text-emerald-200" />
          <a href="tel:+33782500778" class="ml-2 hover:text-emerald-200 transition">
            07 82 50 07 78
          </a>
        </p>
      </div>

      <!-- Bloc réseaux -->
      <div class="text-center md:text-left space-y-2">
        <h2 class="text-lg font-bold">Réseaux</h2>
        <p class="flex items-center justify-center md:justify-start">
          <Linkedin class="w-5 h-5 text-emerald-200" />
          <a
            href="https://www.linkedin.com/in/oleksandr-tymoshenko-356407188/"
            target="_blank"
            class="ml-2 hover:text-emerald-200 transition"
          >
            Oleksandr Tymoshenko
          </a>
        </p>
      </div>

      <!-- Bloc mentions légales -->
      <div class="text-center md:text-left">
        <router-link
          to="/legalNotice"
          class="text-base font-medium hover:text-emerald-200 transition"
        >
          Mentions légales
        </router-link>
      </div>
    </div>
  </footer>
</template>


  
  <script>
  import { Mail, Linkedin, Phone } from 'lucide-vue-next';
  
  export default {
    name: 'Footer',
    components: {
      Mail,
      Linkedin,
      Phone
    },
  };
  </script>
  
  <style scoped>
  </style>
  