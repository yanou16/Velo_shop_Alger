import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const LINKEDIN_URL = 'https://www.linkedin.com/in/rayane-lz-b7752b224/';

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Produits', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  shop: [
    { name: 'Vélos', href: LINKEDIN_URL },
    { name: 'Vélos Électriques', href: LINKEDIN_URL },
    { name: 'Accessoires', href: LINKEDIN_URL },
    { name: 'Casques', href: LINKEDIN_URL },
  ],
  support: [
    { name: 'Guide des tailles', href: LINKEDIN_URL },
    { name: 'Livraison', href: LINKEDIN_URL },
    { name: 'Retours', href: LINKEDIN_URL },
    { name: 'Garantie', href: LINKEDIN_URL },
  ],
  company: [
    { name: 'À propos', href: LINKEDIN_URL },
    { name: 'Contact', href: LINKEDIN_URL },
    { name: 'Blog', href: LINKEDIN_URL },
    { name: 'Carrières', href: LINKEDIN_URL },
  ],
  legal: [
    { name: 'Conditions d\'utilisation', href: LINKEDIN_URL },
    { name: 'Politique de confidentialité', href: LINKEDIN_URL },
    { name: 'Mentions légales', href: LINKEDIN_URL },
  ],
  social: [
    {
      name: 'Facebook',
      href: LINKEDIN_URL,
      icon: FaFacebook,
    },
    {
      name: 'Instagram',
      href: LINKEDIN_URL,
      icon: FaInstagram,
    },
    {
      name: 'Twitter',
      href: LINKEDIN_URL,
      icon: FaTwitter,
    },
    {
      name: 'YouTube',
      href: LINKEDIN_URL,
      icon: FaYoutube,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">
                  Livraison
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors">
                  Retours
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-white transition-colors">
                  Garantie
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+213XXXXXXXXX" className="hover:text-white transition-colors">
                  +213 XX XX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:contact@veloshop.dz" className="hover:text-white transition-colors">
                  contact@veloshop.dz
                </a>
              </li>
              <li className="text-sm">
                123 Rue Example<br />
                Alger, Algérie
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} VéloShop. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
