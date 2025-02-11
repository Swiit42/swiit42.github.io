<template>
    <div class="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div class="container mx-auto bg-white rounded-lg shadow-lg p-10">
        <h1 class="text-3xl font-bold mb-6">Mentions légales</h1>
  
        <section class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">1. Éditeur du site</h2>
          <p>
            Nom : <strong>Oleksandr Tymoshenko</strong><br>
            Adresse : <strong>7 rue de l'abbé Cousin, Lille, 59800, France</strong><br>
            E-mail : <strong>sacha.tymoshenko@gmail.com</strong><br>
            Téléphone : <strong>07 82 50 07 78</strong>
          </p>
        </section>
  
        <section class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">2. Hébergeur du site</h2>
          <p>
            Le site est hébergé gratuitement sur <strong>GitHub Pages</strong> :<br>
            Nom de l’hébergeur : <strong>GitHub, Inc.</strong><br>
            Adresse : <strong>88 Colin P. Kelly Jr St, San Francisco, CA 94107, USA</strong><br>
            Site web : <a href="https://pages.github.com" target="_blank" class="text-blue-500 hover:underline">https://pages.github.com</a>
          </p>
        </section>
  
        <section class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">3. Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, graphiques, logos, icônes, etc.)
            est la propriété exclusive d’Oleksandr Tymoshenko, sauf mention contraire. Toute reproduction,
            distribution, modification, adaptation, retransmission ou publication, même partielle, est strictement interdite sans accord écrit préalable.
          </p>
        </section>
  
        <section class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">4. Protection des données personnelles</h2>
          <p>
            Conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>, les informations recueillies via le formulaire de contact sont nécessaires pour répondre aux demandes des utilisateurs.
          </p>
          <ul class="list-disc pl-6">
            <li><strong>Finalité :</strong> Répondre aux demandes de contact.</li>
            <li><strong>Durée de conservation :</strong> 12 mois maximum.</li>
            <li><strong>Droits des utilisateurs :</strong> accès, rectification, suppression des données.</li>
          </ul>
          <p class="mt-4">
            Pour exercer vos droits, envoyez un e-mail à : <strong>sacha.tymoshenko@gmail.com</strong>
          </p>
        </section>
  
        <section class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">5. Limitation de responsabilité</h2>
          <p>
            Oleksandr Tymoshenko s’efforce de fournir des informations aussi précises que possible sur ce site.
            Toutefois, il ne peut être tenu responsable des omissions, inexactitudes ou lacunes dans les mises à jour.
          </p>
        </section>
  
        <section>
          <h2 class="text-2xl font-semibold mb-2">6. Cookies</h2>
          <p>
            Le site n’utilise pas de cookies à des fins de suivi ou d’analyse des utilisateurs. Si des cookies venaient
            à être utilisés, vous en seriez informé et vous pourriez les accepter ou les refuser.
          </p>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LegalNotice"
  };
  </script>
  
  <style scoped>
  h1, h2 {
    color: #1a202c;
  }
  </style>
  