import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, TruckIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Clients Satisfaits',
    value: '2000+',
    icon: UsersIcon,
    description: 'à travers l\'Algérie'
  },
  {
    id: 2,
    name: 'Livraisons',
    value: '48h',
    icon: TruckIcon,
    description: 'en moyenne'
  },
  {
    id: 3,
    name: 'Avis Positifs',
    value: '4.8/5',
    icon: StarIcon,
    description: 'note moyenne'
  },
  {
    id: 4,
    name: 'Garantie',
    value: '2 ans',
    icon: ShieldCheckIcon,
    description: 'sur tous nos vélos'
  },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              VéloShop en chiffres
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Des années d'expérience au service de votre passion
            </p>
          </div>
          <motion.dl
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-gray-400/5 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">
                  <div className="flex justify-center items-center gap-2">
                    <stat.icon className="h-6 w-6" />
                    <span>{stat.value}</span>
                  </div>
                </dd>
                <dd className="mt-2 text-sm text-gray-500">{stat.description}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
