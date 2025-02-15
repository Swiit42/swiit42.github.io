<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 lg:p-8 rounded-lg shadow-lg m-4 max-w-5xl">
      <h1 class="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">Olympic Games Dashboard</h1>
      <img src="@/assets/JO.jpg" alt="Jeux Olympiques" class="w-full lg:h-80 object-cover rounded mb-6">

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <p class="lg:w-2/5 text-gray-700 leading-relaxed">
          Pour ce projet, j’ai récupéré le dataset des Jeux Olympiques contenant les informations sur les athlètes, les sports, les médailles et les compétitions. Après avoir effectué une requête SQL pour nettoyer et structurer les données, j’ai construit un dashboard interactif permettant une analyse détaillée.
        </p>
        <div class="lg:w-3/5">
          <img src="@/assets/OLY_TABLE.png" alt="Data Table" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div class="lg:w-2/5">
          <img src="@/assets/OLY_SQL.png" alt="SQL Queries" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="lg:w-3/5">
          <p class="text-gray-700 leading-relaxed">
            <b>Étapes clés du projet :</b><br>
            - Nettoyage des données : suppression des doublons, correction des valeurs manquantes et harmonisation des colonnes.<br>
            - Ajout des catégories d'âge et sélection de la saison Été.
          </p>
        </div>
      </div>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          <b>Ajout de filtres interactifs :</b> Année, Nationalité, Nom de compétiteur, et Sports pour une visualisation plus ciblée.<br>
          <b>Affichage des KPI principaux :</b><br>
          - Nombre total de compétiteurs<br>
          - Nombre total de médailles<br>
          - Répartition des compétiteurs par genre<br>
          - Classement des sports et Top 10 des compétiteurs ayant gagné le plus de médailles<br>
          - Évolution du nombre de médailles au fil du temps
        </p>
      </div>

      <div class="w-full">
        <img src="@/assets/OLY_olympicGames.png" alt="Olympic Dashboard" class="w-full h-auto rounded-lg shadow-md mb-6">
      </div>

      <router-link to="/home" class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Retour au Portfolio
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OlympicGames',
};
</script>

<style scoped>
@media (max-width: 640px) {
  .mb-12 {
    margin-bottom: 2rem;
  }
}
</style>
