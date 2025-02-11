<template>
    <nav class="bg-gray-800 text-white p-12">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/">
          <div class="text-xl  pl-8">
          <p class="text-2xl font-bold pb-4">
            Data Analyst
          </p>
          <p>
            Oleksandr Tymoshenko
          </p>
        </div>
        </router-link>

      <div class="space-x-4 pr-8">
        <router-link to="/" class="hover:underline">Accueil</router-link>
        <!-- <router-link to="/skills" class="hover:underline">Compétences</router-link> -->
        <router-link to="/about" class="hover:underline">À Propos</router-link>
        <router-link to="/contact" class="hover:underline">Contact</router-link>
      </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  