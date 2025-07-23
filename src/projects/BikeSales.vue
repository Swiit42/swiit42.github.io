<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white lg:p-8 p-4 rounded-lg shadow-lg m-8 max-w-5xl">
      <h1 class="lg:text-3xl text-xl font-bold mb-6 text-center lg:text-left">
        Banking App - Application de gestion de comptes
      </h1>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mt-5 mb-12">
        <div class="lg:w-3/5 mb-6 lg:mb-0">
          <p class="text-gray-700">
            Cette application bancaire permet aux utilisateurs de créer un compte, se connecter avec leur numéro de
            compte, effectuer des dépôts, des retraits et des transferts entre comptes. Elle intègre Kafka pour la
            publication d'événements de transaction et d'audit, et utilise MySQL comme base de données. Le projet est
            développé en Java Spring Boot et Vue.js, avec une architecture REST, un envoi d'emails automatique à la
            création d'un compte, et une persistance via JPA/Hibernate.
          </p>
        </div>
        <div class="lg:w-2/5">
          <img src="@/assets/BANK_home.png" alt="Accueil" class="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12">
        <div class="lg:w-2/5">
          <img src="@/assets/BANK_client.png" alt="Compte client" class="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div class="lg:w-3/5 lg:pl-6">
          <p class="text-gray-700">
            Lorsqu'un utilisateur crée un compte, un email de confirmation lui est envoyé avec son numéro de compte. La
            connexion se fait sans mot de passe, uniquement avec ce numéro. Une fois connecté, l'utilisateur peut
            consulter son solde, effectuer des transferts ou des opérations de crédit/débit.
          </p>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12">
        <div class="lg:w-3/5 mb-6 lg:mb-0">
          <p class="text-gray-700">
            Toutes les transactions sont enregistrées dans la base de données MySQL. L'application publie également des
            événements `TransferEvent` et `TransactionAuditEvent` dans Apache Kafka, sur deux topics distincts :
            <code>bank.transfer.audit</code> et <code>bank.transaction.audit</code>. Ces événements sont consommés pour le
            monitoring, l'audit, ou des dashboards à venir.
          </p>
        </div>
        <div class="lg:w-2/5">
          <img src="@/assets/BANK_transaction.png" alt="Audit Kafka" class="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12">
        <div class="lg:w-3/5 mb-6 lg:mb-0">
          <p class="text-gray-700">
            Le projet repose sur une base relationnelle structurée avec les tables <code>user</code>, <code>transaction</code>
            et <code>transfer</code>, ainsi qu'une table de jointure. L'ensemble est orchestré via Spring Boot, JPA et
            MapStruct. Kafka est configuré dans un environnement Docker, ce qui permet un déploiement rapide et isolé.
          </p>
        </div>
        <div class="lg:w-2/5">
          <img src="@/assets/BANK_sql.png" alt="Modèle relationnel" class="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <div class="mb-12">
        <img src="@/assets/BANK_archi.png" alt="Architecture projet" class="w-full h-auto rounded-lg shadow-md mb-3" />
        <p class="text-gray-700">
          Vue d'ensemble de l'architecture de l'application. Chaque composant est modulaire, avec une couche
          présentation Vue.js, un back-end Spring Boot, une base MySQL et Kafka en gestion d'événements.
        </p>
      </div>

      <div class="mb-8">
        <img src="@/assets/BANK_mail.png" alt="Email confirmation" class="w-full h-auto rounded-lg shadow-md" />
      </div>

      <div class="flex justify-end">
        <a
          href="https://github.com/Swiit42/BankingApp"
          target="_blank"
          class="inline-block mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
        >
          Voir le projet sur GitHub
        </a>
      </div>

      <router-link
        to="/"
        class="mt-6 inline-block bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600"
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
