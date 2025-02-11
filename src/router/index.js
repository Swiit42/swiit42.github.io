import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import BikeSales from '@/projects/BikeSales.vue';
import CoffeeSales from '@/projects/CoffeeSales.vue';
import OlympicGames from '@/projects/OlympicGames.vue';
import LegalNotice from '@/views/LegalNotice.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/legalNotice', name: 'LegalNotice', component: LegalNotice },
  { path: '/project/bike-customer-sales', name: 'BikeSales', component: BikeSales },
  { path: '/project/coffee-sales-dashboard', name: 'CoffeeSales', component: CoffeeSales },
  { path: '/project/olympic-games', name: 'OlympicGames', component: OlympicGames },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
