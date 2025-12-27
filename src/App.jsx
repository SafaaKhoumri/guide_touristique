import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Globe, Star, Award, Calendar, Camera, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';

// Data
const circuits = [
  {
    id: 1,
    title: "Visite historique de la médina",
    duration: "3h",
    location: "Centre-ville",
    includes: ["Guide certifié", "Arrêts photo", "Explications culturelles"],
    price: "Sur demande",
    img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    description: "Plongez dans l'histoire fascinante de la médina avec ses ruelles anciennes, ses monuments emblématiques et ses marchés traditionnels."
  },
  {
    id: 2,
    title: "Escapade Nature & Paysages",
    duration: "5h",
    location: "Région montagneuse",
    includes: ["Transport", "Guide nature", "Déjeuner traditionnel"],
    price: "Sur demande",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Découvrez des panoramas à couper le souffle, une faune locale préservée et des villages authentiques nichés dans les montagnes."
  },
  {
    id: 3,
    title: "Circuit Culturel Complet",
    duration: "Journée complète",
    location: "Multi-sites",
    includes: ["Tous transports", "Repas", "Entrées musées", "Guide expert"],
    price: "Sur demande",
    img: "https://images.unsplash.com/photo-1564672315822-9024f5229785?w=800&q=80",
    description: "Une immersion totale dans la culture locale avec visite de sites historiques, musées, artisans et dégustation de spécialités."
  },
  {
    id: 4,
    title: "Tour Photographique Sunset",
    duration: "2h30",
    location: "Points panoramiques",
    includes: ["Conseils photo", "Meilleurs spots", "Boissons"],
    price: "Sur demande",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    description: "Capturez les plus beaux couchers de soleil aux endroits les plus photogéniques avec des conseils d'expert."
  }
];

const testimonials = [
  {
    name: "Marie Dubois",
    location: "France",
    rating: 5,
    text: "Une expérience inoubliable ! Notre guide était passionné, cultivé et très attentionné. Les explications étaient captivantes.",
    date: "Novembre 2024"
  },
  {
    name: "John Smith",
    location: "UK",
    rating: 5,
    text: "Excellent guide who knows every corner of the city. Professional, punctual and speaks perfect English. Highly recommended!",
    date: "Octobre 2024"
  },
  {
    name: "Ahmed Benali",
    location: "Maroc",
    rating: 5,
    text: "J'ai fait découvrir ma région à mes amis étrangers grâce à ce guide. Ils ont adoré ! Très bon rapport qualité-prix.",
    date: "Septembre 2024"
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
  "https://images.unsplash.com/photo-1557409518-691ebcd96038?w=800&q=80",
  "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&q=80",
  "https://images.unsplash.com/photo-1562096772-f5de1d2b3913?w=800&q=80",
  "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80"
];

// Components
const Header = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'circuits', label: 'Circuits' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'reviews', label: 'Avis' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <MapPin className="text-blue-600 mr-2" size={32} />
            <span className="text-2xl font-bold text-gray-800">GuideExpert</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`${currentPage === item.id ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 ${currentPage === item.id ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">GuideExpert</h3>
          <p className="text-gray-300">Guide touristique certifié avec plus de 10 ans d'expérience dans la région.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center"><Phone size={16} className="mr-2" /> +212 6XX XXX XXX</p>
            <p className="flex items-center"><Mail size={16} className="mr-2" /> guide@example.com</p>
            <p className="flex items-center"><MapPin size={16} className="mr-2" /> Casablanca, Maroc</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition">TripAdvisor</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 GuideExpert. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

const HomePage = ({ setCurrentPage }) => (
  <div className="pt-16">
    {/* Hero Section */}
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?w=1600&q=80')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Guide Touristique Certifié</h1>
          <p className="text-xl md:text-2xl mb-8">Découvrez la région autrement avec un expert local passionné</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
              <MessageCircle className="mr-2" /> Réserver via WhatsApp
            </a>
            <button onClick={() => setCurrentPage('circuits')} className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
              Voir les circuits <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Points forts */}
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Pourquoi me choisir ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">10+ ans d'expérience</h3>
            <p className="text-gray-600">Guide certifié avec une connaissance approfondie de la région</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Globe className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Multilingue</h3>
            <p className="text-gray-600">Français, Anglais, Arabe, Espagnol</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Groupes & Individuels</h3>
            <p className="text-gray-600">Visites personnalisées pour tous types de groupes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Toute la région</h3>
            <p className="text-gray-600">Ville, nature, culture et sites historiques</p>
          </div>
        </div>
      </div>
    </div>

    {/* Circuits populaires */}
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Circuits Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {circuits.map(circuit => (
            <div key={circuit.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={circuit.img} alt={circuit.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{circuit.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{circuit.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-1" /> {circuit.duration}
                </div>
                <button onClick={() => setCurrentPage('circuits')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
                  Voir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Avis clients */}
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Ce que disent mes clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location} - {review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Final */}
    <div className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Prêt pour une aventure inoubliable ?</h2>
        <p className="text-xl mb-8">Contactez-moi dès maintenant pour réserver votre visite personnalisée</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
            <MessageCircle className="mr-2" /> WhatsApp
          </a>
          <a href="tel:+212600000000" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
            <Phone className="mr-2" /> Téléphone
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" alt="Guide" className="rounded-lg shadow-xl w-full" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>
          <p className="text-lg text-gray-700 mb-4">
            Passionné par ma région depuis toujours, je partage mon amour pour notre patrimoine culturel et naturel depuis plus de 10 ans. Guide touristique certifié et diplômé en histoire et culture locale, j'ai eu le plaisir d'accompagner des milliers de visiteurs venus du monde entier.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Ma mission est de vous faire découvrir les trésors cachés et les sites emblématiques avec authenticité et passion. Chaque visite est une aventure unique, adaptée à vos intérêts et à votre rythme.
          </p>
          <p className="text-lg text-gray-700">
            Au-delà des circuits classiques, je vous emmène rencontrer les artisans locaux, découvrir la gastronomie authentique et comprendre l'âme véritable de notre région.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-8">Mes certifications & expertises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <Award className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Guide Touristique Certifié</h3>
              <p className="text-gray-600">Licence nationale de guide touristique</p>
            </div>
          </div>
          <div className="flex items-start">
            <Globe className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Langues</h3>
              <p className="text-gray-600">Français, Anglais, Arabe, Espagnol</p>
            </div>
          </div>
          <div className="flex items-start">
            <Users className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Expérience</h3>
              <p className="text-gray-600">10+ ans, 5000+ visiteurs satisfaits</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Zone d'intervention</h3>
              <p className="text-gray-600">Toute la région et alentours</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Mes valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Authenticité</h3>
            <p className="text-gray-600">Des expériences vraies, loin des pièges à touristes</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sur mesure</h3>
            <p className="text-gray-600">Chaque visite adaptée à vos envies</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Un service de qualité irréprochable</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CircuitsPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">Nos Circuits</h1>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Découvrez notre sélection de circuits soigneusement conçus pour vous offrir une expérience inoubliable
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {circuits.map(circuit => (
          <div key={circuit.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src={circuit.img} alt={circuit.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-3">{circuit.title}</h2>
              <p className="text-gray-700 mb-4">{circuit.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 text-blue-600" size={20} />
                  <span>{circuit.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-2 text-blue-600" size={20} />
                  <span>{circuit.location}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Inclus :</h3>
                <ul className="space-y-1">
                  {circuit.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight className="mr-2 text-green-500" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">{circuit.price}</div>
                <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition">
                  <MessageCircle className="mr-2" size={20} /> Réserver
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Circuit personnalisé ?</h2>
        <p className="text-gray-700 mb-6">Vous avez des envies spécifiques ? Je crée des circuits sur mesure adaptés à vos intérêts !</p>
        <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
          <MessageCircle className="mr-2" /> Contactez-moi
        </a>
      </div>
    </div>
  </div>
);

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Galerie Photos</h1>
        <p className="text-center text-gray-600 mb-16">Quelques moments capturés lors de nos visites</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group" onClick={() => setSelectedImage(img)}>
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition" size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl max-h-full">
            <button className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewsPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">Témoignages Clients</h1>
      <p className="text-center text-gray-600 mb-16">Ce que nos visiteurs disent de leurs expériences</p>
      
      <div className="bg-blue-50 p-8 rounded-lg mb-12 text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={32} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-3xl font-bold mb-2">4.9/5</p>
        <p className="text-gray-600">Basé sur plus de 150 avis vérifiés</p>
        <div className="mt-6">
          <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Voir tous les avis sur TripAdvisor
          </a>
        </div>
      </div>

      <div className="space-y-6">
        {testimonials.map((review, idx) => (
          <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="text-gray-500">{review.location}</p>
              </div>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-4 italic">"{review.text}"</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Partagez votre expérience !</h2>
        <p className="text-gray-700 mb-6">Votre avis compte énormément pour nous et aide d'autres voyageurs</p>
        <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Laisser un avis
        </a>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">Contactez-moi</h1>
      <p className="text-center text-gray-600 mb-16">Je suis à votre disposition pour toute question ou réservation</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                <a href="tel:+212600000000" className="text-blue-600 hover:underline">+212 6XX XXX XXX</a>
                <p className="text-gray-600 text-sm mt-1">Disponible 7j/7 de 8h à 20h</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                  Envoyer un message
                </a>
                <p className="text-gray-600 text-sm mt-1">Réponse rapide garantie</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:guide@example.com" className="text-purple-600 hover:underline">guide@example.com</a>
                <p className="text-gray-600 text-sm mt-1">Réponse sous 24h</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <MapPin className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Localisation</h3>
                <p className="text-gray-700">Casablanca, Maroc</p>
                <p className="text-gray-600 text-sm mt-1">Point de rendez-vous flexible</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Horaires de disponibilité</h3>
            <div className="space-y-2 text-gray-700">
              <p>Lundi - Dimanche : 8h00 - 20h00</p>
              <p className="text-sm text-gray-600">Visites possibles en soirée sur demande</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Localisation</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106332.06289836825!2d-7.6816255!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Localisation"
            ></iframe>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-3">Prêt à réserver ?</h3>
            <p className="mb-4">Contactez-moi dès maintenant pour organiser votre visite personnalisée !</p>
            <a href="https://wa.me/212672465711" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
              <MessageCircle className="mr-2" /> Réserver via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'circuits': return <CircuitsPage />;
      case 'gallery': return <GalleryPage />;
      case 'reviews': return <ReviewsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {renderPage()}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/212672465711" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default App;