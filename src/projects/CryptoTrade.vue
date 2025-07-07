<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 lg:p-8 rounded-lg shadow-lg m-4 max-w-6xl">
      <h1 class="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">Crypto Trade - Projet de Visualisation</h1>
      
      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          Ce projet a pour objectif de créer un pipeline complet de traitement de données sur les crypto-monnaies : de la collecte via l'API CoinGecko à l'affichage en temps réel dans un dashboard interactif. L'ensemble repose sur Airflow, Azure Blob Storage, Snowflake, FastAPI et Streamlit.
        </p>
      </div>
      <img src="@/assets/CRY_archi.png" alt="Crypto Dashboard" class="w-full max-h-72 object-contain rounded mb-6 mx-auto">

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <p class="lg:w-2/5 text-gray-700 leading-relaxed">
          📅 <b>Orchestration avec Airflow :</b><br>
          Un DAG planifié toutes les heures récupère les données de l'API CoinGecko, les transforme et les enregistre sous forme de fichiers CSV. Ces fichiers sont ensuite envoyés vers Azure Blob Storage et Snowflake.
        </p>
        <div class="lg:w-3/5">
          <img src="@/assets/CRY_airflow.png" alt="DAG Airflow" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div class="lg:w-2/5">
          <img src="@/assets/CRY_Azure.png" alt="Azure Blob Storage" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="lg:w-3/5">
          <p class="text-gray-700 leading-relaxed">
            📤 <b>Stockage sur Azure Blob :</b><br>
            Les fichiers CSV contenant les données horaires sont archivés dans un conteneur Azure. Cela permet de conserver un historique complet consultable ou restaurable.
          </p>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <p class="lg:w-2/5 text-gray-700 leading-relaxed">
          🧰 <b>Base de données Snowflake :</b><br>
          Les mêmes données sont insérées dans Snowflake pour permettre des requêtes rapides via une API. Celles-ci alimentent le dashboard avec les dernières valeurs, les historiques, et les classements (top gainers/losers).
        </p>
        <div class="lg:w-3/5">
          <img src="@/assets/CRY_snow.png" alt="Graphique Historique" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          🚨 <b>API & Dashboard :</b><br>
          Une API FastAPI permet de consulter les données de Snowflake via des routes REST. Le dashboard Streamlit les affiche dynamiquement avec des filtres (crypto, période, colonnes). Les courbes sont générées automatiquement en fonction de l'historique choisi.
        </p>
      </div>

      <div class="w-full">
        <img src="@/assets/CRY_dashboard.png" alt="Dashboard final" class="w-full h-auto rounded-lg shadow-md mb-6">
      </div>
        <div class="flex justify-end">
        <a
          href="https://github.com/Swiit42/CryptoTrading"
          target="_blank"
          class="inline-block mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
        >
          Visiter mon GitHub
        </a>



      </div>
            <router-link to="/" class="px-5 py-2 font-medium border rounded-sm transition duration-200 bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600">
        Retour au Portfolio
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CryptoTrade',
};
</script>

<style scoped>
@media (max-width: 640px) {
  .mb-12 {
    margin-bottom: 2rem;
  }
}
</style>
