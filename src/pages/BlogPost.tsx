import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts, categories } from '../data/blog-posts';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Article non trouvé
        </h1>
        <p className="text-gray-600 mb-8">
          L'article que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Retour au blog
        </button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Retour aux articles
        </button>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full">
            {categories.find(cat => cat.id === post.category)?.name}
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <span className="font-medium">{post.author}</span>
          <span>{formatDate(post.date)}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-indigo max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Articles similaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts
            .filter(p => p.id !== post.id && p.category === post.category)
            .slice(0, 2)
            .map(relatedPost => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="group block"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </motion.article>
  );
}
