<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="container mx-auto px-6 lg:px-20">
            <div class="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden">
                <div class="lg:w-1/3 h-64 lg:h-auto">
                    <img src="@/assets/about.jpg" alt="Photo" class="w-full h-full object-cover">
                </div>
                <div class="lg:w-2/3 p-8">
                    <h2 class="text-3xl font-bold mb-4">Qui suis-je ?</h2>
                    <p class="text-gray-700 mb-6">
                        <p>Je m'appelle Oleksandr Tymoshenko, et je suis arrivé en France à l'âge de 9 ans. Dès mon plus
                        jeune âge, j'ai toujours été attiré par les chiffres, les mathématiques et la logique.
                        Mon parcours a commencé par une licence en Langues Étrangères Appliquées
                        (anglais-russe). Mais, je me suis rapidement rendu compte que ce domaine ne me correspondait.
                        Après un temps de travail en réstauration, j'ai décidé de rejoindre Epitech, une école
                        d'informatique.</p>
                        <br>
                        Dans un parcours Master Of Science, spécialité Big Data / IA.
                        J'ai également eu la chance de travailler pendant trois ans en alternance en tant que
                        développeur full stack à l'Imprimerie Nationale et à ADEO. <br>
                        C'est au cours de ma troisième année, lorsque j'ai intégré une équipe fortement orientée vers la
                        data, que j'ai eu l'envie d'en découvrir davantage et de me plonger plus profondément dans cet
                        univers passionnant. Travailler aux côtés de data analysts et
                        data engineers m'a donné l'envie d'en apprendre davantage sur ce métier.
                        <br><br>
                        Durant ma formation, j'ai pu réaliser plusieurs projets liés à la data et à l'intelligence
                        artificielle, ce qui m'a permis d'approfondir mes compétences en analyse, visualisation de
                        données et en optimisation continue. J'aime analyser les données, améliorer les processus, et
                        aider les entreprises à prendre des décisions éclairées à partir de KPIs pertinents.
                        Aujourd'hui, mon objectif est de contribuer à des projets data-driven, où je peux mettre à
                        profit ma rigueur, ma curiosité et mon envie constante de comprendre et d'optimiser.

                    </p>
                    <a href="/CV_TYMOSHENKO_OLEKSANDR.pdf" download
                        class="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors mt-5">
                        Télécharger Mon CV
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
};
</script>

<style scoped></style>