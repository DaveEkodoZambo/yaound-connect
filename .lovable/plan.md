# Adapter le site au contexte camerounais

## Objectif
Conserver strictement la structure, les colonnes, les proportions et l’ordre des blocs actuels, tout en remplaçant les contenus génériques par des informations et visuels cohérents avec Yaoundé.

## Modifications prévues
- Faire des « 21 lieux emblématiques qui racontent l’histoire de Yaoundé » le sujet principal de la page d’accueil, avec un lien fonctionnel vers l’article complet.
- Remplacer les autres titres, textes courts et visuels par des sujets camerounais cohérents : mobilité urbaine, vie des quartiers, patrimoine, services municipaux et actualité locale.
- Créer une page dédiée présentant l’introduction, les 21 lieux et leurs récits, sans modifier la navigation ni la silhouette visuelle du site.
- Ajouter à cette page un appel à contribution pour « Montée Anne Rouge » et attribuer clairement la source au Club Journal du Centre Éducatif Bastos avec son lien.
- Rendre les clics concernés fonctionnels depuis la page d’accueil, notamment le sujet principal et les éléments de la série patrimoniale.
- Employer de nouvelles photographies éditoriales de Yaoundé adaptées aux sujets, tout en conservant exactement les formats d’images déjà utilisés.
- Mettre à jour les titres et descriptions de partage de chaque page.

## Détails techniques
- Réutilisation de l’en-tête, du pied de page, de la grille à trois colonnes et de tous les styles existants.
- Nouvelle page React à l’adresse `/histoire/21-lieux-emblematiques-yaounde`.
- Données des 21 lieux structurées dans un module partagé afin d’éviter les répétitions et de conserver fidèlement le texte fourni.
- Vérification visuelle sur ordinateur et mobile, ainsi que du résultat de compilation.
