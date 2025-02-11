<template>
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-6">Mes Projets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded shadow" v-for="project in projects" :key="project.id">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          { id: 1, title: 'Projet Marketing', description: 'Analyse des données marketing pour optimiser les performances.' },
          { id: 2, title: 'KPI Dashboard', description: 'Création d’un tableau de bord interactif pour le suivi des KPIs.' },
          { id: 3, title: 'Analyse Métiers', description: 'Exploration et analyse des données métiers pour améliorer la prise de décision.' }
        ],
      };
    },
  };
  </script>
  