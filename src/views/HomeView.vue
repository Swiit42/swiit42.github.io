<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto py-16 max-w-5xl">
      <h1 class="text-4xl font-bold text-center mb-8">PORTFOLIO</h1>
      <div class="text-center mb-10">
        <button
          v-for="category in categories"
          :key="category"
          :class="['px-4 py-2 m-2 rounded-full border text-white', activeCategory === category ? 'active-category' : 'bg-gray-400']"
          @click="filterProjects(category)"
        >
          {{ category }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:p-0 pl-6 pr-6">
        <div v-for="project in filteredProjects" :key="project.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <router-link :to="'/project/' + slugify(project.title)" class="block">
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
              <div class="p-4">
                <h2 class="text-lg font-semibold">{{ project.title }}</h2>
                <p class="text-gray-600 text-sm">{{ project.category }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      categories: ['Show all', 'Power Bi', 'Excell', 'Python'],
      activeCategory: 'Show all',
      projects: [
        { id: 1, title: 'Bike Customer Sales', category: 'Power Bi', image: require('../assets/BIK_BikeSales.png') },
        { id: 2, title: 'Olympic Games', category: 'Power Bi', image: require('../assets/OLY_olympicGames.png') },
        { id: 3, title: 'Coffee Sales Dashboard', category: 'Excell', image: require('../assets/COF_coffeeDashboard.png') },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeCategory === 'Show all') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeCategory);
    }
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

<style scoped>
button {
  transition: background-color 0.2s ease;
}
button:hover {
  background-color: rgba(1, 46, 117, 0.8);
}
.active-category {
  background-color: rgba(1, 46, 117, 0.8);
  color: white;
  transition: background-color 0.3s ease;
}
</style>
