export default function Contact() {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div 
          className="h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1495541237775-506d41dc85a9?ixlib=rb-4.0.3")',
          }}
        >
          <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Contactez-nous</h1>
          </div>
        </div>

        <div className="p-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Informations de contact */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Nos Coordonnées</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Réseaux Sociaux</h3>
                    <div className="flex flex-col space-y-2">
                      <a 
                        href="https://www.linkedin.com/in/rayane-lz-b7752b224/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn - Rayane LZ
                      </a>
                      <a 
                        href="https://www.instagram.com/enyare13/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-pink-600 hover:text-pink-700"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram - @enyare13
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
                    <p className="text-gray-600">
                      Du Dimanche au Jeudi : 9h - 18h<br />
                      Vendredi et Samedi : 10h - 16h
                    </p>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Envoyez-nous un message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}