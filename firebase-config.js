/* Config web Firebase du projet « amebet ». Pour changer de projet, recopie
   les valeurs de ta console (⚙ Paramètres du projet → Tes applications →
   Application Web → SDK setup and configuration → Config).

   Ces clés ne sont PAS des secrets : la config web Firebase est publique
   par conception, la sécurité vient des règles Firestore (firestore.rules).

   Tant que apiKey/projectId restent des placeholders, AmeBet tourne en
   mode local (localStorage) sans jamais contacter le réseau.

   En CI, ce fichier est réécrit à partir du secret FIREBASE_CONFIG
   (voir scripts/write-config.mjs et .github/workflows/deploy.yml). */

window.__AMEBET_FIREBASE__ = {
  apiKey: "AIzaSyAb7Lx0lwuXfOaLNIQECeS6J1eKRzFZJm4",
  authDomain: "amebet-5f04c.firebaseapp.com",
  projectId: "amebet-5f04c",
  storageBucket: "amebet-5f04c.firebasestorage.app",
  messagingSenderId: "578817792837",
  appId: "1:578817792837:web:12bfd3845a0c2ce1e7bc2c",
  // Analytics n'est pas chargé par AmeBet ; gardé pour coller à la console.
  measurementId: "G-K1HEKER5PK"
};
