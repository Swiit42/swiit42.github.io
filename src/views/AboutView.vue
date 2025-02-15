<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center pt-6 pb-6">
      <div class="container mx-auto px-6 lg:px-20">
        <div class="bg-white rounded-lg shadow-lg lg:flex overflow-hidden">
          <div class="lg:w-1/3 h-64 lg:h-auto">
            <img src="@/assets/about.jpg" alt="Photo" class="w-full h-full object-cover">
          </div>
  
          <div class="lg:w-2/3 lg:p-8 p-4">
            <h2 class="text-3xl font-bold mb-4">Qui suis-je ?</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              Je m'appelle Oleksandr Tymoshenko, et je suis arrivé en France à l'âge de 9 ans. Dès mon plus jeune âge, j'ai toujours été attiré par les chiffres, les mathématiques et la logique.
              Mon parcours a commencé par une licence en Langues Étrangères Appliquées (anglais-russe). Mais, je me suis rapidement rendu compte que ce domaine ne me correspondait.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
              Après un temps de travail en restauration, j'ai décidé de rejoindre Epitech, une école d'informatique, pour un Master of Science en Big Data / IA. J'ai travaillé pendant trois ans en alternance en tant que développeur full stack à l'Imprimerie Nationale et à ADEO.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
              C’est au cours de ma troisième année, lorsque j'ai intégré une équipe fortement orientée vers la data, que j'ai eu l'envie d'en découvrir davantage. Travailler aux côtés de data analysts et data engineers m’a donné envie d’apprendre et de plonger plus profondément dans cet univers passionnant.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
              Durant ma formation, j’ai pu réaliser plusieurs projets liés à la data et à l’intelligence artificielle, ce qui m’a permis de renforcer mes compétences en analyse, visualisation de données et optimisation continue. Aujourd’hui, mon objectif est de contribuer à des projets data-driven, où je peux mettre à profit ma rigueur, ma curiosité et mon envie constante d’apprendre et d’optimiser.
            </p>
            <a href="/CV_TYMOSHENKO_OLEKSANDR.pdf" download class="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
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
  
  <style scoped>
  h2 {
    color: #1a202c;
  }
  a {
    display: inline-block;
    margin-top: 1rem;
  }
  </style>
  