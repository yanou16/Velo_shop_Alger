export interface BlogPost {
  id: string;
  title: string;
  category: 'cyclisme' | 'entretien' | 'nouveautes' | 'evenements';
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Les plus beaux circuits cyclables d\'Algérie',
    category: 'cyclisme',
    date: '2023-12-10',
    author: 'Ahmed Benali',
    image: '/images/blog/circuits/djurdjura.jpg',
    excerpt: 'Découvrez les plus beaux parcours à vélo en Algérie, des montagnes du Djurdjura aux routes côtières.',
    content: `L'Algérie offre des paysages spectaculaires pour le cyclisme, allant des routes côtières méditerranéennes aux majestueuses montagnes de l'Atlas.

    1. Circuit du Djurdjura
    - Distance : 45 km
    - Difficulté : Difficile
    - Dénivelé : +1500m
    - Points d'intérêt : Tikjda, Col de Tirourda, Vues panoramiques
    
    2. La Côte Turquoise (Béjaïa)
    - Distance : 30 km
    - Difficulté : Modérée
    - Points d'intérêt : Cap Carbon, Plages sauvages, Corniche
    
    3. Les Gorges de Palestro
    - Distance : 25 km
    - Difficulté : Modérée
    - Points d'intérêt : Falaises spectaculaires, Oued Isser
    
    4. Circuit des Aurès
    - Distance : 60 km
    - Difficulté : Difficile
    - Points d'intérêt : Ghoufi, Monts des Aurès, Villages traditionnels`,
    tags: ['Circuits', 'Montagnes', 'Côte', 'Djurdjura', 'Aurès']
  },
  {
    id: '2',
    title: 'Guide d\'entretien pour le vélo en climat méditerranéen',
    category: 'entretien',
    date: '2023-12-08',
    author: 'Karim Medjadi',
    image: '/images/blog/maintenance/entretien-velo.jpg',
    excerpt: 'Conseils d\'entretien adaptés au climat algérien et aux conditions locales.',
    content: `Le climat méditerranéen de l'Algérie nécessite une attention particulière pour l'entretien de votre vélo.

    Protection contre la chaleur et le sable :
    - Nettoyez régulièrement la chaîne et les pignons
    - Utilisez un lubrifiant adapté aux conditions sèches
    - Protégez le vélo du soleil direct
    
    Maintenance spécifique :
    - Vérifiez la pression des pneus plus fréquemment (la chaleur augmente la pression)
    - Inspectez les joints et les câbles (la chaleur peut les fragiliser)
    - Nettoyez les freins du sable et de la poussière
    
    Stockage :
    - Gardez votre vélo dans un endroit frais et sec
    - Évitez l'exposition prolongée au soleil
    - Utilisez une housse de protection`,
    tags: ['Entretien', 'Climat', 'Conseils', 'Protection']
  },
  {
    id: '3',
    title: 'Les meilleurs VTT pour les terrains algériens',
    category: 'nouveautes',
    date: '2023-12-05',
    author: 'Leila Ferhat',
    image: '/images/blog/vtt/vtt-atlas.jpg',
    excerpt: 'Sélection de VTT parfaitement adaptés aux terrains variés de l\'Algérie.',
    content: `Découvrez notre sélection de VTT spécialement choisis pour les terrains algériens :

    1. Atlas Explorer Pro
    - Cadre en aluminium renforcé
    - Suspension avant 160mm
    - Pneus tout-terrain 29"
    - Parfait pour : Djurdjura, Atlas saharien
    - Prix : 285 000 DA

    2. Sahara Runner Elite
    - Cadre en carbone
    - Double suspension
    - Protection anti-sable
    - Idéal pour : Pistes désertiques
    - Prix : 395 000 DA

    3. Coastal Adventure
    - Cadre aluminium léger
    - Freins hydrauliques
    - Pneus mixtes route/sentier
    - Parfait pour : Routes côtières
    - Prix : 195 000 DA`,
    tags: ['VTT', 'Équipement', 'Nouveautés']
  },
  {
    id: '4',
    title: 'Tour d\'Algérie 2024 : Le grand retour',
    category: 'evenements',
    date: '2023-12-01',
    author: 'Mohamed Saidi',
    image: '/images/blog/events/tour-algerie.jpg',
    excerpt: 'Tous les détails sur le Tour d\'Algérie 2024, un événement majeur du cyclisme maghrébin.',
    content: `Le Tour d'Algérie 2024 promet d'être exceptionnel !

    Parcours complet :

    Étape 1 : Alger - Blida
    - Distance : 150 km
    - Dénivelé : +1200m
    - Points clés : Montée de Chréa

    Étape 2 : Blida - Médéa
    - Distance : 165 km
    - Dénivelé : +1800m
    - Points clés : Col de Benchicao

    Étape 3 : Médéa - Djelfa
    - Distance : 180 km
    - Dénivelé : +1500m
    - Points clés : Traversée du Titteri

    Étape 4 : Béjaïa - Jijel
    - Distance : 120 km
    - Dénivelé : +800m
    - Points clés : Corniche Jijelienne

    Participation :
    - 15 équipes internationales
    - 10 équipes nationales
    - 150 coureurs au total`,
    tags: ['Tour d\'Algérie', 'Compétition', 'Événement']
  },
  {
    id: '5',
    title: 'Randonnée dans les Aurès à vélo',
    category: 'cyclisme',
    date: '2023-12-15',
    author: 'Yasmine Boudiaf',
    image: '/images/blog/circuits/aures.jpg',
    excerpt: 'Guide complet pour une aventure à vélo dans les magnifiques montagnes des Aurès.',
    content: `Les Aurès offrent parmi les plus beaux paysages cyclables d'Algérie.

    Itinéraire recommandé :
    - Départ : Batna
    - Arrivée : Biskra
    - Distance totale : 85 km
    - Durée conseillée : 2-3 jours

    Points d'intérêt :
    1. Balcons de Ghoufi
    - Vues panoramiques
    - Villages traditionnels
    - Oasis de montagne

    2. Vallée de l'Oued Abiod
    - Gorges spectaculaires
    - Sources naturelles
    - Patrimoine historique

    3. Descente vers Biskra
    - Transition montagne-désert
    - Palmeraies
    - Architecture traditionnelle`,
    tags: ['Aurès', 'Randonnée', 'Montagne', 'Circuit']
  }
];

export const categories = [
  {
    id: 'cyclisme',
    name: 'Cyclisme',
    description: 'Découvrez les plus beaux circuits cyclables d\'Algérie'
  },
  {
    id: 'entretien',
    name: 'Entretien',
    description: 'Conseils d\'entretien adaptés au climat local'
  },
  {
    id: 'nouveautes',
    name: 'Nouveautés',
    description: 'Les derniers VTT et équipements disponibles'
  },
  {
    id: 'evenements',
    name: 'Événements',
    description: 'Calendrier des événements cyclistes en Algérie'
  }
];
