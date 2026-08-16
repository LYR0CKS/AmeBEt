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
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  // Analytics n'est pas chargé par AmeBet ; gardé pour coller à la console.
  measurementId: "G-CKJQRKRSWP"
};
