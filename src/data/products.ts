import { Product } from '../types';
import { CATEGORIES } from './categories';
import { IMAGES } from './images';

export const products: Product[] = [
  // Vélos de Route
  {
    id: '1',
    name: 'Route Pro Carbon',
    price: 450000,
    description: 'Vélo de route en carbone, parfait pour les longues distances et la compétition. Cadre ultraléger et aérodynamique.',
    category: CATEGORIES.BIKES,
    subcategory: 'Route',
    image: '/images/products/velos/route-pro-carbon.jpg',
    features: [
      'Cadre carbone haute performance',
      'Groupe Shimano 105',
      'Freins à disque hydrauliques',
      'Roues carbone 700c'
    ],
    inStock: true,
    brand: 'VéloShop Pro',
    rating: 4.8,
    reviews: 15,
    colors: ['noir', 'rouge', 'blanc']
  },
  {
    id: '2',
    name: 'Route Endurance Alu',
    price: 180000,
    description: 'Vélo de route en aluminium pour le cyclisme sportif et les sorties longue distance.',
    category: CATEGORIES.BIKES,
    subcategory: 'Route',
    image: '/images/products/velos/route-endurance.jpg',
    features: [
      'Cadre aluminium léger',
      'Groupe Shimano Tiagra',
      'Freins à disque mécaniques',
      'Position confortable'
    ],
    inStock: true,
    brand: 'VéloShop',
    rating: 4.5,
    reviews: 23,
    colors: ['bleu', 'gris']
  },

  // VTT
  {
    id: '3',
    name: 'Atlas Explorer Pro',
    price: 285000,
    description: 'VTT tout-suspendu conçu pour les terrains techniques des montagnes algériennes.',
    category: CATEGORIES.BIKES,
    subcategory: 'VTT',
    image: '/images/products/velos/atlas-explorer.jpg',
    features: [
      'Suspension avant 160mm',
      'Cadre aluminium renforcé',
      'Freins hydrauliques puissants',
      'Pneus tubeless 29"'
    ],
    inStock: true,
    brand: 'VéloShop Pro',
    rating: 4.9,
    reviews: 28,
    colors: ['noir', 'vert']
  },
  {
    id: '4',
    name: 'Sahara Runner Elite',
    price: 395000,
    description: 'VTT haut de gamme avec protection spéciale anti-sable, parfait pour les aventures désertiques.',
    category: CATEGORIES.BIKES,
    subcategory: 'VTT',
    image: '/images/products/velos/sahara-runner.jpg',
    features: [
      'Cadre carbone enduro',
      'Double suspension',
      'Protection anti-sable',
      'Transmission 1x12 vitesses'
    ],
    inStock: true,
    brand: 'VéloShop Pro',
    rating: 4.7,
    reviews: 19,
    colors: ['noir', 'argent']
  },

  // Vélos de Ville
  {
    id: '5',
    name: 'City Comfort',
    price: 89000,
    description: 'Vélo de ville confortable pour vos déplacements quotidiens.',
    category: CATEGORIES.BIKES,
    subcategory: 'Ville',
    image: '/images/products/velos/city-comfort.jpg',
    features: [
      'Position droite confortable',
      'Porte-bagages intégré',
      'Éclairage LED',
      'Garde-boue inclus'
    ],
    inStock: true,
    brand: 'VéloShop',
    rating: 4.6,
    reviews: 42,
    colors: ['noir', 'gris']
  },

  // Accessoires
  {
    id: '6',
    name: 'Casque Aéro Pro',
    price: 12000,
    description: 'Casque aérodynamique léger avec excellente ventilation.',
    category: CATEGORIES.ACCESSOIRES,
    subcategory: 'Casques',
    image: '/images/products/accessoires/casque-aero.jpg',
    features: [
      'Construction in-mold',
      'Système de réglage précis',
      '15 aérations',
      'Jugulaire confortable'
    ],
    inStock: true,
    brand: 'VéloShop',
    rating: 4.8,
    reviews: 56,
    colors: ['noir', 'blanc']
  },
  {
    id: '7',
    name: 'Sacoche Bikepacking',
    price: 8500,
    description: 'Sacoche imperméable pour vos aventures en bikepacking.',
    category: CATEGORIES.ACCESSOIRES,
    subcategory: 'Sacs',
    image: '/images/products/accessoires/sacoche.jpg',
    features: [
      'Volume 10L',
      '100% imperméable',
      'Fixation rapide',
      'Matériau résistant'
    ],
    inStock: true,
    brand: 'VéloShop',
    rating: 4.7,
    reviews: 34,
    colors: ['noir', 'gris']
  },

  // Pièces
  {
    id: '8',
    name: 'Pneus Tout-Terrain Pro',
    price: 6500,
    description: 'Pneus VTT haute performance pour terrains mixtes.',
    category: CATEGORIES.PIECES,
    subcategory: 'Pneus',
    image: '/images/products/pieces/pneus-vtt.jpg',
    features: [
      'Taille 29x2.35',
      'Protection anti-crevaison',
      'Gomme adhérente',
      'Compatible tubeless'
    ],
    inStock: true,
    brand: 'VéloShop',
    rating: 4.6,
    reviews: 89,
    colors: ['noir']
  },
  {
    id: '9',
    name: 'Groupe Transmission',
    price: 45000,
    description: 'Groupe complet Shimano pour vélo de route.',
    category: CATEGORIES.PIECES,
    subcategory: 'Groupes',
    image: '/images/products/pieces/transmission.jpg',
    features: [
      'Shimano 105',
      '11 vitesses',
      'Cassette 11-32',
      'Dérailleur arrière longue cage'
    ],
    inStock: true,
    brand: 'Shimano',
    rating: 4.9,
    reviews: 27,
    colors: ['argent']
  },

  // Vêtements
  {
    id: '10',
    name: 'Maillot Pro Team',
    price: 7500,
    description: 'Maillot cycliste professionnel respirant et aérodynamique.',
    category: CATEGORIES.VETEMENTS,
    subcategory: 'Maillots',
    image: '/images/products/vetements/maillot.jpg',
    features: [
      'Tissu technique',
      'Coupe race',
      '3 poches arrière',
      'Protection UV'
    ],
    inStock: true,
    brand: 'VéloShop',
    rating: 4.7,
    reviews: 63,
    colors: ['noir', 'blanc']
  },
  {
    id: '11',
    name: 'Cuissard Long Hiver',
    price: 8900,
    description: 'Cuissard long thermique pour le cyclisme hivernal.',
    category: CATEGORIES.VETEMENTS,
    subcategory: 'Cuissards',
    image: '/images/products/vetements/cuissard.jpg',
    features: [
      'Tissu thermique',
      'Peau chamois gel',
      'Bretelles confortables',
      'Bandes réfléchissantes'
    ],
    inStock: true,
    brand: 'VéloShop',
    rating: 4.8,
    reviews: 45,
    colors: ['noir', 'gris']
  }
];