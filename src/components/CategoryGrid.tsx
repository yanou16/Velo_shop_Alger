import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES, CATEGORY_LABELS } from '../data/categories';

const categoryImages = {
  [CATEGORIES.BIKES]: '/images/categories/velos-classiques.jpg',
  [CATEGORIES.ELECTRIC_BIKES]: '/images/categories/velos-electriques.jpg',
  [CATEGORIES.ACCESSORIES]: '/images/categories/accessoires.jpg',
  [CATEGORIES.HELMETS]: '/images/categories/casques.jpg',
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CategoryGrid() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Nos Catégories
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez notre sélection de vélos et accessoires de qualité
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {Object.entries(CATEGORY_LABELS).map(([categoryKey, label]) => (
            <motion.div 
              key={categoryKey} 
              variants={item}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link
                to={`/products?category=${categoryKey}`}
                className="block relative h-full"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={categoryImages[categoryKey as keyof typeof categoryImages]}
                    alt={label}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    {label}
                  </h3>
                  <p className="text-gray-200 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Découvrir la collection →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
