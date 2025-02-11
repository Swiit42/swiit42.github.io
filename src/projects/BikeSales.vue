<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class=" bg-white p-8 rounded-lg shadow-lg m-8 max-w-5xl">
            <h1 class="text-3xl font-bold mb-4"> Sales and Clients Dashboard Power BI - Adventure Works 2019</h1>
            <img src="@/assets/velo.jpg" alt="Bike Sales" class="w-full h-80 object-cover rounded mb-4">

            <div class="flex flex-col lg:flex-row items-center lg:items-start mt-5 mb-12">
                <div class="lg:w-3/5 mb-6 lg:mb-0">
                    <p class="text-gray-700 ml-3">
                        Dans ce projet, j'ai travaillé sur les données du dataset Adventure Works 2019, représentant les
                        ventes
                        d'un revendeur de vélos. L'objectif était de répondre à une demande client en fournissant un
                        dashboard
                        interactif et pertinent, permettant d'avoir une vision globale des ventes et des performances
                        commerciales.
                        <br><br>
                        <b>Étapes clés du projet :</b>
                        <br>
                        Analyse des besoins et rédaction des user stories
                        J'ai commencé par identifier les besoins du client et les principaux indicateurs à suivre. Cette
                        étape m'a
                        permis de structurer le projet et de définir les KPIs clés.

                    </p>
                </div>
                <div class="lg:w-2/5 mr-2">
                    <img src="@/assets/BIK_business.png" alt="Products" class="w-full h-auto rounded-lg shadow-md mb-3">
                </div>
            </div>
            <div class="flex flex-wrap lg:flex-wrap items-center lg:items-start mb-12">
                <div class="lg:w-2/6 mr-6 mb-6">
                    <img src="@/assets/BIK_SQL.png" alt="Customers" class="w-full h- rounded-lg shadow-md mb-3">
                </div>
                <div class="lg:w-3/5 mb-10 lg:mb-5">
                    <p class="text-gray-700 mb-4">
                        <b>Sélection et préparation des données</b>
                        <br>
                        J'ai sélectionné 4 tables : Customer, DateTable, Product, et Sales, contenant toutes les
                        informations essentielles.
                        <br>
                        <br>
                        Après la selection des données nécessaires et leur nettoyage, j'ai extrait les informations avec
                        plusieurs requêtes SQL et les ai transformé en sheet Excell pour qu'elles puissent être
                        intégrées dans Power BI. <br><br>

                    </p>
                </div>
                <div class="lg:w-2/5 mb-6 lg:mb-0 pr-2">
                    <b>Création du modèle de données dans Power BI</b>
                    <br>
                    J'ai établi les relations entre les différentes tables pour structurer efficacement le modèle de
                    données.
                    J'ai ensuite mis en place une timeline et des segments interactifs permettant de filtrer les
                    données en
                    fonction des besoins spécifiques de l'utilisateur.
                    <br>

                </div>
                <div class="lg:w-3/5 mb-6 lg:mb-0">
                    <img src="@/assets/BIK_relations.png" alt="Products" class="w-full h-auto rounded-lg shadow-md">
                </div>
                <p class="text-gray-700 lg:w-2/6 mt-6 pr-1">
                    <b>Construction du dashboard - Partie ventes</b>
                    <br>
                    Création de filtres par villes, mois et année permettant d'avoir une visualisation plus précise.
                    <br>
                    <b>Métriques clés affichées :</b> <br>
                    Ajout de <b> KPI's</b> clés : budget, total des ventes.<br>
                    Analyse des performances des ventes au fil du temps.<br>
                    Top 10 des produits et des villes en fonction du volume des ventes.<br>
                    Visualisations dynamiques pour offrir une lecture claire et intuitive des données.

                </p>
                <div class="lg:w-4/6 mt-6">
                    <img src="@/assets/BIK_BikeSales.png" alt="Products"
                        class="w-full h-auto rounded-lg shadow-md mb-3">
                </div>
                <p class="text-gray-700 mt-6 mb-6">Le dashboard final permet de filtrer les informations en temps réel
                    et d'obtenir une analyse complète
                    des ventes, des performances par région, et des produits les plus populaires. Il constitue un outil
                    d'aide à la décision puissant pour le client, facilitant la compréhension des tendances et
                    l'optimisation des stratégies commerciales.</p>
                <p class="text-gray-700 lg:w-2/6 mt-6 pr-1">
                    <b>Construction du dashboard – Partie Client</b>
                    <br><br>
                    Ajout de filtres par ville, tranche d'âge, sexe et période (mois/année). <br>
                    <br>
                    <b>Métriques clés affichées :</b> <br>

                    Nombre total de clients <br>
                    Plus grosse offre réalisée <br>
                    Répartition des clients par pays. <br>

                    Analyse des ventes par tranche d'âge, permettant d'identifier les groupes les plus performants. <br>
                    Classement des Top 10 clients en fonction du montant total des ventes. <br>
                    Visualisation dynamique des ventes par client et par mois, facilitant la détection des tendances. <br>

                </p>
                <div class="lg:w-4/6 mt-6">
                    <img src="@/assets/BIK_customers.png" alt="Customers"
                        class="w-full h-auto rounded-lg shadow-md mb-3">
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
    name: 'BikeSales'
};
</script>