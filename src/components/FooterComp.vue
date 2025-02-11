<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-around
       items-center">
        <div class="mb-6 md:mb-0 text-center md:text-left">
          <h2 class="text-lg font-bold mb-2">Contactez-moi</h2>
          <p class="flex items-center">
            <Mail class="w-5 h-5"/>
            <a href="mailto:sacha.tymoshenko@gmail.com" class="underline hover:text-gray-300 ml-2">
              sacha.tymoshenko@gmail.com
            </a>
        </p>
        <p class="flex items-center">
            <Phone class="w-5 h-5"/>   
            <a href="tel:+33782500778" class="underline hover:text-gray-300 ml-2">
              07 82 50 07 78
            </a>
        </p>
        </div>
        <div class="text-center md:text-left">
          <h2 class="text-lg font-bold mb-2">Réseaux</h2>
          <p class="flex items-center">
            <Linkedin class="w-5 h-5 " />
            <a href="https://www.linkedin.com/in/oleksandr-tymoshenko-356407188/" target="_blank" class="underline hover:text-gray-300 ml-2">
              Oleksandr Tymoshenko
            </a>
          </p>
        </div>
        <div class="text-center md:text-left">
          <router-link to="/legalNotice" class="text-lg mb-2">Mentions légales</router-link>

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
  