export const CATEGORIES = {
  BIKES: 'bikes',
  ELECTRIC_BIKES: 'electric-bikes',
  ACCESSORIES: 'accessories',
  HELMETS: 'helmets'
} as const;

export const CATEGORY_LABELS = {
  [CATEGORIES.BIKES]: 'Vélos',
  [CATEGORIES.ELECTRIC_BIKES]: 'Vélos Électriques',
  [CATEGORIES.ACCESSORIES]: 'Accessoires Vélo',
  [CATEGORIES.HELMETS]: 'Casques Vélo'
} as const;

export const SUBCATEGORIES = {
  [CATEGORIES.BIKES]: ['VTT', 'Route', 'Ville', 'BMX', 'Gravel'],
  [CATEGORIES.ELECTRIC_BIKES]: ['VTT Électrique', 'Ville Électrique', 'Route Électrique'],
  [CATEGORIES.ACCESSORIES]: ['Éclairage', 'Pompes', 'Antivols', 'Sacoches', 'Outils'],
  [CATEGORIES.HELMETS]: ['Route', 'VTT', 'Ville', 'Enfant']
} as const;
