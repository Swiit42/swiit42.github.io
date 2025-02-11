<template>
    <div v-if="showPopup" class="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm mb-4 md:mb-0">
          Ce site utilise des cookies pour améliorer votre expérience. En poursuivant votre navigation, vous acceptez ou refusez leur utilisation.
          <a href="/legalNorice" class="text-blue-400 underline hover:text-blue-300 ml-1">En savoir plus</a>.
        </p>
        <div class="space-x-4">
          <button 
            @click="acceptCookies" 
            class="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Accepter
          </button>
          <button 
            @click="refuseCookies" 
            class="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors">
            Refuser
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PopupCookies",
    data() {
      return {
        showPopup: false
      };
    },
    mounted() {
      const cookieStatus = localStorage.getItem("cookiesAccepted");
      if (!cookieStatus) {
        this.showPopup = true;
      }
    },
    methods: {
      acceptCookies() {
        localStorage.setItem("cookiesAccepted", "true");
        this.showPopup = false;
      },
      refuseCookies() {
        localStorage.setItem("cookiesAccepted", "false");
        this.showPopup = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .fixed {
    animation: slide-up 0.5s ease-out;
  }
  
  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  </style>
  