<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 lg:p-8 rounded-lg shadow-lg m-4 max-w-6xl">
      <h1 class="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">Banking App - Application bancaire avec Kafka</h1>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          Cette application simule une plateforme bancaire complète avec création de comptes, transferts, audit, Kafka et SQL. Elle est développée avec Spring Boot pour le backend, Vue.js pour le frontend et Docker pour la conteneurisation. Kafka est utilisé pour la gestion des événements de transfert et d'audit. La base de données utilisée est MySQL.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div class="lg:w-1/2">
          <img src="@/assets/BANK_client.png" alt="Client Dashboard" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="lg:w-1/2">
          <img src="@/assets/BANK_home.png" alt="Accueil de l'application" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div class="lg:w-3/5">
          <img src="@/assets/BANK_mail.png" alt="Création de compte avec envoi de mail" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <p class="lg:w-2/5 text-gray-700 leading-relaxed">
          <b>Création de compte avec email :</b><br>
          Lors de la création d’un nouveau compte, un email de confirmation est envoyé automatiquement à l’utilisateur grâce à une intégration simple avec un service de mail SMTP.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <p class="lg:w-3/5 text-gray-700 leading-relaxed">
          <b>Architecture basée sur Spring Boot & Kafka :</b><br>
          L’application repose sur une architecture Spring Boot avec Kafka intégré pour l’audit des transferts. Deux topics Kafka sont utilisés : `bank.transfer.audit` et `bank.transaction.audit`.
        </p>
        <div class="lg:w-2/5">
          <img src="@/assets/BANK_archi.png" alt="Architecture Spring Boot Kafka" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <p class="lg:w-2/5 text-gray-700 leading-relaxed">
          <b>Transfert d’argent entre comptes :</b><br>
          L’utilisateur peut effectuer des transferts d’argent de manière sécurisée. Chaque transaction déclenche l’envoi d’un événement Kafka pour être auditée.
        </p>
        <div class="lg:w-3/5">
          <img src="@/assets/BANK_transfer.png" alt="Transfert bancaire" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div class="lg:w-2/5">
          <img src="@/assets/BANK_transaction.png" alt="Historique des transactions" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="lg:w-3/5">
          <p class="lg:w-3/5 text-gray-700 leading-relaxed">
            <b>Kafka - Monitoring avec Conduktor :</b><br>
            Grâce à l’outil Conduktor, les messages envoyés dans les topics Kafka peuvent être inspectés en temps réel. Cela permet de vérifier l’envoi correct des événements lors des transferts et des audits.
          </p>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
          <p class="text-gray-700 leading-relaxed">
            <b>Consultation des transactions :</b><br>
            L’utilisateur peut visualiser toutes ses transactions effectuées. Ces données sont stockées dans une base MySQL et consultées via une API Spring Boot.
          </p>
        <div class="lg:w-2/5">
          <img src="@/assets/BANK_sql.png" alt="Base de données SQL" class="w-full h-auto rounded-lg shadow-md mb-4">
        </div>
      </div>

      <div class="flex justify-end">
        <a
          href="https://github.com/Swiit42/BankingApp"
          target="_blank"
          class="inline-block mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
        >
          Visiter mon GitHub
        </a>
      </div>

      <router-link
        to="/"
        class="px-5 py-2 font-medium border rounded-sm transition duration-200 bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600 mt-6"
      >
        Retour au Portfolio
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankingApp'
};
</script>

<style scoped>
@media (max-width: 640px) {
  .mb-12 {
    margin-bottom: 2rem;
  }
}
</style>
