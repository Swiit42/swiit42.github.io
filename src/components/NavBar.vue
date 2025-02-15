<template>
  <nav class="bg-gray-800 text-white p-4 lg:p-12">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/home" class="flex items-center">
        <div class="text-xl pl-4">
          <p class="text-2xl font-bold pb-1">Data Analyst</p>
          <p>Oleksandr Tymoshenko</p>
        </div>
      </router-link>

      <button @click="toggleMenu" class="lg:hidden p-2 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        :class="['lg:flex space-x-4 pr-8', isMenuOpen ? 'block' : 'hidden']"
        class="w-full lg:w-auto text-center lg:text-left mt-4 lg:mt-0"
      >
        <router-link to="/home" class="block lg:inline hover:underline py-2">Accueil</router-link>
        <router-link to="/about" class="block lg:inline hover:underline py-2">À Propos</router-link>
        <router-link to="/contact" class="block lg:inline hover:underline py-2">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
button svg {
  color: white;
  transition: transform 0.3s ease;
}
button:hover svg {
  transform: scale(1.1);
}
</style>
