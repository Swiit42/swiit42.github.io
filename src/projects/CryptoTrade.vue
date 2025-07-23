<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 lg:p-8 rounded-lg shadow-lg m-4 max-w-6xl">
      <h1 class="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
        💸 Banking App – Application bancaire
      </h1>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          Cette application bancaire permet de créer un compte, se connecter, effectuer des virements entre utilisateurs, enregistrer des transactions (crédit/débit), et recevoir un mail de confirmation. Le tout est construit avec Vue.js pour le front, Java Spring Boot pour l'API, PostgreSQL comme base de données et Apache Kafka pour l'audit.
        </p>
      </div>

      <img src="@/assets/BANK_home.png" alt="Accueil" class="w-full max-h-72 object-contain rounded mb-6 mx-auto">

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div class="lg:w-1/2">
          <img src="@/assets/BANK_client.png" alt="Connexion" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="lg:w-1/2">
          <img src="@/assets/BANK_transfer.png" alt="Transfert" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          🔐 <b>Connexion simplifiée :</b> L'utilisateur s'identifie uniquement avec son numéro de compte.
        </p>
        <p class="text-gray-700 leading-relaxed">
          🏦 <b>Virements & Transactions :</b> Chaque opération est persistée dans la base et déclinée sous forme de crédit/débit.
        </p>
      </div>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          🧾 <b>Architecture Java Spring Boot :</b> découpage en couches (controllers, services, mappers, dtos), séparation claire des responsabilités, envoi de mails intégré, Kafka Producer/Consumer, configuration externalisée.
        </p>
        <img src="@/assets/BANK_archi.png" alt="Architecture" class="w-full max-h-72 object-contain rounded mb-6 mx-auto">
      </div>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          🐘 <b>Base de données PostgreSQL :</b> L’ensemble des opérations est sauvegardé dans une base relationnelle gérée via Docker.
        </p>
        <img src="@/assets/BANK_sql.png" alt="Base SQL" class="w-full max-h-72 object-contain rounded mb-6 mx-auto">
      </div>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          ✉️ <b>Mail automatique :</b> Lors de la création d’un utilisateur, un mail est envoyé avec le numéro de compte généré automatiquement.
        </p>
        <img src="@/assets/BANK_mail.png" alt="Email" class="w-full max-h-72 object-contain rounded mb-6 mx-auto">
      </div>

      <div class="mb-12">
        <p class="text-gray-700 leading-relaxed">
          📤 <b>Audit via Apache Kafka :</b> chaque transfert déclenche un <code>TransferEvent</code> envoyé sur un topic Kafka. Un Consumer se charge de les consommer et les sauvegarder dans des logs distincts, incluant l’email de l’émetteur, du destinataire, le montant, le label et la date.
        </p>
        <div class="space-y-6">
          <img src="@/assets/BANK_transaction.png" alt="Transaction Kafka" class="w-full h-auto rounded-lg shadow-md">
          <img src="@/assets/BANK_transfer.png" alt="Transfert Kafka" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>

      <div class="flex justify-end mb-6">
        <a
          href="https://github.com/Swiit42/BankingApp"
          target="_blank"
          class="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
        >
          Code sur GitHub
        </a>
      </div>

      <router-link
        to="/"
        class="px-5 py-2 font-medium border rounded-sm transition duration-200 bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600"
      >
        Retour au Portfolio
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankingApp'
}
</script>