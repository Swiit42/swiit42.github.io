<template>
    <div class="w-full min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="w-full bg-white lg:p-8 p-4 rounded-lg shadow-lg m-8 max-w-6xl">
            <h1 class="lg:text-3xl text-xl font-bold mb-4">Coffee Sales Dashboard</h1>
            <img src="@/assets/COF_coffeeshop.jpg" alt="Coffee Dashboard"
                class="w-full lg:h-80 object-cover rounded mb-8">

            <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12">
                <div class="lg:w-2/5 mb-6 lg:mb-0">
                    <p class="text-gray-700">
                        Dans ce projet réalisé sur Excel, j'ai commencé par récupérer un dataset contenant les feuilles
                        products, clients, et orders. Ces feuilles regroupaient toutes les informations nécessaires à
                        l'analyse : les caractéristiques des produits, les informations sur les clients, et les détails
                        des commandes associées. <br> <br>
                        À partir de ce dataset, mon objectif était de réaliser une analyse en mettant en
                        avant les
                        points clés pour un magasin de café. Cette étape m'a permis de déterminer les indicateurs les
                        plus pertinents à
                        afficher
                        dans un dashboard interactif. J'ai donc décidé d'afficher les ventes en fonction des différents
                        types de café et de leur évolution dans le temps, le top 5 des clients et les ventes par pays.
                    </p>
                </div>
                <div class="lg:w-1/3 mr-2">
                    <img src="@/assets/COF_products.png" alt="Products" class="w-full h-auto rounded-lg shadow-md mb-3">
                    <img src="@/assets/COF_customers.png" alt="Customers" class="w-full h-auto rounded-lg shadow-md">
                </div>
                <div class="lg:w-1/4">
                    <img src="@/assets/COF_orders.png" alt="Orders" class="w-full h-auto rounded-lg shadow-md">
                </div>
            </div>
            <div class="flex flex-col lg:flex-row items-center lg:items-start mb-12">
                <div class="lg:w-2/3 mr-2">
                    <img src="@/assets/COF_xlookup_customer.png" alt="Customers"
                        class="w-full h-auto rounded-lg shadow-md mb-3">
                    <img src="@/assets/COF_xlookup_products.png" alt="Products"
                        class="w-full h-auto rounded-lg shadow-md">
                </div>
                <div class="lg:w-2/5 mb-6 mt-6 lg:ml-4 lg:mb-0">
                    <p class="text-gray-700">
                        J'ai croisé les données issues de la feuille Orders afin de les consolider sur une seule et même
                        sheet.
                        Pour cela, j'ai utilisé les fonctions XLOOKUP et INDEX, ce qui m'a permis de regrouper toutes
                        les
                        informations sur une seule page avant de tout transformer en tableau pour pouvoir faire des
                        tableaux
                        croisés dynamiques.
                    </p>
                </div>
            </div>
            <div class="lg:w-2/5 mb-6 lg:mb-0">
                <p class="text-gray-700">
                    Une fois les tableaux croisés dynamiques créés pour les trois principaux éléments d'affichage,
                    j'ai
                    ajouté des graphiques pour visualiser les résultats. J'ai d'abord
                    inséré un graphique linéaire qui montre les ventes dans le temps pour chaque type de café.
                    Ensuite, j'ai
                    ajouté un graphique en barres pour représenter les ventes par pays et un autre pour
                    afficher le top 5 des clients.
                    <br>
                    Après avoir mis en place ces éléments visuels, j'ai intégré des filtres interactifs pour
                    faciliter
                    l'analyse des données. J'ai utilisé un filtre de timeline permettant à l'utilisateur de
                    sélectionner des
                    mois ou une période, ainsi que des slicers pour affiner les résultats en fonction de plusieurs
                    critères
                    : le type de café (roast), le poids du café acheté et si le client possède une carte de
                    fidélité. Grâce
                    à ces filtres, le dashboard devient plus flexible et l'utilisateur peut explorer les données
                    selon ses
                    besoins.
                </p>
            </div>
            <iframe class="mt-5"
                src="https://1drv.ms/x/c/f7bf9aecc7d4e60a/EfjPd6y4PFNDgL56e2UWbZ0Brkog0PBbGQrh29ynYBoj5w?e=soUXP0&action=embedview&activeCell=Dashboard!A1&wdbipreview=true"
                width="100%" height="600" frameborder="0"></iframe>

            <router-link to="/home"
                class="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Retour au Portfolio
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoffeeDashboard'
};
</script>