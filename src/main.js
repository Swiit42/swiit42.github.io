import { createApp } from 'vue'
import App from './App.vue'
import router from './router';


router.afterEach((to) => {
  const defaultTitle = 'Portfolio Oleksandr Tymoshenko';
  document.title = to.meta?.title || defaultTitle;
});

createApp(App).use(router).mount('#app')
