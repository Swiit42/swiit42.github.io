<template>
  <div>
    <Navbar />
    <router-view />
    <FooterComp/>
    <PopupCookies/>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import FooterComp from './components/FooterComp.vue';
import PopupCookies from './components/PopupCookies.vue';

export default {
  components: {
    Navbar,
    HomeView,
    FooterComp,
    PopupCookies
  },
};
</script>

<style>
</style>
