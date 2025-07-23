import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import BikeSales from '@/projects/BikeSales.vue';
import CoffeeSales from '@/projects/CoffeeSales.vue';
import OlympicGames from '@/projects/OlympicGames.vue';
import LegalNotice from '@/views/LegalNotice.vue';
import CryptoTrade from '@/projects/CryptoTrade.vue';
import BankingApp from '@/projects/BankingApp.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView, meta: { title: 'Accueil' } },
  { path: '/about', name: 'About', component: AboutView, meta: { title: 'À propos' } },
  { path: '/contact', name: 'Contact', component: ContactView, meta: { title: 'Contact' } },
  { path: '/legalNotice', name: 'LegalNotice', component: LegalNotice, meta: { title: 'Mentions légales' } },
  { path: '/project/bike-customer-sales', name: 'BikeSales', component: BikeSales, meta: { title: 'Bike Sales' } },
  { path: '/project/coffee-sales-dashboard', name: 'CoffeeSales', component: CoffeeSales, meta: { title: 'Coffee Sales Dashboard' } },
  { path: '/project/olympic-games', name: 'OlympicGames', component: OlympicGames, meta: { title: 'Olympic Games' } },
  { path: '/project/crypto-trade', name: 'CryptoTrade', component: CryptoTrade, meta: { title: 'Crypto Trade' } },
  { path: '/project/banking-app', name: 'BankingApp', component: BankingApp, meta: { title: 'Banking App' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
