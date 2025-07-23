<template>
  <nav class="bg-white text-gray-800 shadow-sm py-4 px-6 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="flex items-center space-x-3">
        <div class="text-left">
          <p class="text-xl font-bold text-gray-900">Oleksandr Tymoshenko</p>
          <p class="text-sm text-emerald-600">Développeur - Data Engineer</p>
        </div>
      </router-link>

      <button @click="toggleMenu" class="lg:hidden p-2 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        :class="['w-full lg:w-auto mt-4 lg:mt-0 text-center lg:text-right space-y-2 lg:space-y-0 lg:space-x-8', isMenuOpen ? 'block' : 'hidden lg:flex']"
      >
      <router-link
        to="/"
        class="block lg:inline font-medium hover:text-emerald-600"
        :class="$route.path === '/' ? 'text-emerald-600 underline underline-offset-4' : 'text-gray-700'"
      >
        Accueil
      </router-link>

      <router-link
        to="/about"
        class="block lg:inline font-medium hover:text-emerald-600"
        :class="$route.path === '/about' ? 'text-emerald-600 underline underline-offset-4' : 'text-gray-700'"
      >
        À propos
      </router-link>

      <router-link
        to="/contact"
        class="block lg:inline font-medium hover:text-emerald-600"
        :class="$route.path === '/contact' ? 'text-emerald-600 underline underline-offset-4' : 'text-gray-700'"
      >
        Contact
      </router-link>


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
