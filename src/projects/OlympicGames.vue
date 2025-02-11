<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class=" bg-white p-8 rounded-lg shadow-lg m-8 max-w-5xl">
      <h1 class="text-3xl font-bold mb-4"> Sales and Clients Dashboard Power BI - Adventure Works 2019</h1>
      <img src="@/assets/JO.jpg" alt="Bike Sales" class="w-full h-80 object-cover rounded mb-4">

      <div class="flex flex-wrap lg:flex-wrap items-center lg:items-start mt-5 mb-12">
        <p class="lg:w-2/5 text-gray-700">
          Pour ce projet, j’ai récupéré le dataset des Jeux Olympiques contenant les informations sur les athlètes,
          les sports, les médailles et les compétitions. Après avoir effectué une requête SQL pour nettoyer et
          structurer les données, j’ai construit un dashboard interactif permettant une analyse détaillée.
        </p>
        <div class="lg:w-3/5 mb-6 lg:mb-0">
          <img src="@/assets/OLY_TABLE.png" alt="Products" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="lg:w-2/5 mt-6 lg:mb-0">
          <img src="@/assets/OLY_SQL.png" alt="Products" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="lg:w-2/5 ml-6 mt-6 lg:mb-0">
          <p class="text-gray-700">
            <b>Étapes clés du projet :</b>
            <br>
            Nettoyage des données : Suppression des doublons, correction des valeurs manquantes et harmonisation des
            colonnes.
            <br>
            Ajout des catégories d'âge et sélection de la saison Été
          </p>
        </div>

        <p class="lg:w-4/5 mt-6 text-gray-700">
          <b> Ajout de filtres interactifs :</b> 
          <br>
          Année, Nationalité, Nom de compétiteur et les différents Sports pour une visualisation plus ciblée.
          <br>
           Affichage de KPI's principaux :
          <br>

          Nombre total de compétiteurs<br>
          Nombre total de médailles<br>

          Répartition des compétiteurs par genre et analyse des médailles par catégorie (or, argent, bronze).<br>
          Classement des sports et Top 10 des compétiteurs ayant gagné le plus de médailles.<br>
          Évolution du nombre de médailles au fil du temps avec une visualisation temporelle détaillée.<br>

        </p>
        <div class="lg:w-5/5 mt-6 lg:mb-0">
          <img src="@/assets/OLY_olympicGames.png" alt="Products" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>
      <router-link to="/" class="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Retour au Portfolio
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OlympicGames'
};
</script>