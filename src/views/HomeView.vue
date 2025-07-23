<template>
  <div class="min-h-screen bg-[#f9f9f9]">
    <div class="container mx-auto py-16 max-w-6xl">
      <h1 class="text-4xl font-bold text-center text-gray-800 tracking-wide mb-2">PORTFOLIO</h1>
      <p class="text-center text-gray-500 text-lg mb-10">Mes projets data & visualisations</p>

      <div class="flex justify-center flex-wrap gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          :class="[
            'px-5 py-2 font-medium border transition duration-200 rounded-sm',
            activeCategory === category
              ? 'bg-emerald-500 text-white border-emerald-500'
              : 'text-emerald-700 border-emerald-300 hover:bg-emerald-200'
          ]"
          @click="filterProjects(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <router-link :to="'/project/' + slugify(project.title)" class="block">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800">{{ project.title }}</h2>
              <p class="text-sm text-emerald-600 font-medium">{{ project.category }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      categories: ['Show all', 'Power Bi', 'Excell', 'Python'],
      activeCategory: 'Show all',
      projects: [
        { id: 1, title: 'Crypto Trade', category: 'Python', image: require('../assets/CRY_dashboard.png') },
        { id: 2, title: 'Bike Customer Sales', category: 'Power Bi', image: require('../assets/BIK_BikeSales.png') },
        { id: 3, title: 'Olympic Games', category: 'Power Bi', image: require('../assets/OLY_olympicGames.png') },
        { id: 4, title: 'Coffee Sales Dashboard', category: 'Excell', image: require('../assets/COF_coffeeDashboard.png') },
        { id: 5, title: 'Banking App', category: 'Java Spring Boot', image: require('../assets/BANK_home.png') },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeCategory === 'Show all') return this.projects;
      return this.projects.filter(project => project.category === this.activeCategory);
    },
  },
  methods: {
    filterProjects(category) {
      this.activeCategory = category;
    },
    slugify(title) {
      return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    }
  }
};
</script>
