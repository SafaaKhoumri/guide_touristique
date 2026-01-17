import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Globe, Star, Calendar, Camera, MessageCircle, Menu, X, ChevronRight , Instagram, Moon } from 'lucide-react';

// Data
const circuits = [
  {
    id: 1,
    title: "Classic Brussels Highlights",
    duration: "2 hours",
    location: "Brussels City Center",
    includes: [
      "Grand Place & UNESCO insights",
      "Manneken Pis legends",
      "Royal Galleries",
      "Mont des Arts viewpoint",
      "Photo opportunities"
    ],
    price: "On request",
    img: "/images/GrandPlace.jpg",
    description:
      "Discover Brussels' iconic landmarks through engaging stories about guilds, royal history, and local humor. From the magnificent Grand Place to the charming Mont des Arts, experience the city's highlights with meaningful narratives."
  },
  {
    id: 2,
    title: "Hidden Gems & Local Life",
    duration: "2-3 hours",
    location: "Sablon & Secret Spots",
    includes: [
      "Sablon Square exploration",
      "Hidden alleys & courtyards",
      "Street art discoveries",
      "Local café culture",
      "Authentic Brussels experience"
    ],
    price: "On request",
    img: "/images/sablon.jpg",
    description:
      "Step off the beaten path and experience Brussels like a local. Explore secret viewpoints, charming alleys, vibrant street art, and authentic neighborhoods that reveal the city's true character."
  },
  {
    id: 3,
    title: "Chocolate & Art Nouveau",
    duration: "2-3 hours",
    location: "Art Nouveau District",
    includes: [
      "Art Nouveau architecture walk",
      "Chocolate shop visits",
      "Tasting opportunities",
      "Architectural stories",
      "Cultural insights"
    ],
    price: "On request",
    img: "/images/brusselscenter.jpg",
    description:
      "Indulge in Brussels' finest offerings: stunning Art Nouveau facades and world-renowned chocolate. Walk through architectural masterpieces while discovering the city's sweet heritage with optional tastings."
  },

  // ✅ NEW: Food & Drinks Experience
  {
    id: 4,
    title: "Food & Drinks Experience",
    duration: "3 hours",
    location: "City Center & Local Districts",
    includes: [
      "Belgian waffle tasting",
      "Chocolate & praline discoveries",
      "Local beer tasting",
      "Traditional Belgian dishes",
      "Food culture stories"
    ],
    price: "On request",
    img: "/images/food.png",
    description:
      "Taste your way through Brussels with an immersive food and drinks experience. Discover Belgian specialties, local beers, and hidden culinary spots while learning about the country's rich gastronomic culture."
  },

  // ✅ NEW: Nightlife Experience
  {
    id: 5,
    title: "Brussels Nightlife Experience",
    duration: "3-4 hours",
    location: "Bars & Night Districts",
    includes: [
      "Iconic Belgian bars",
      "Craft beer & cocktail spots",
      "Local nightlife stories",
      "Music & vibrant atmospheres",
      "Safe & guided night tour"
    ],
    price: "On request",
    img: "/images/nightlife.jpg",
    description:
      "Experience Brussels after dark with a guided nightlife tour. From legendary bars to lively neighborhoods, enjoy Belgian beers, cocktails, music, and the city's vibrant evening atmosphere."
  }
];

const testimonials = [];

// Components
const Header = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tours', label: 'Tours' },

    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <MapPin className="text-blue-600 mr-2" size={32} />
            <span className="text-2xl font-bold text-gray-800">StoryFlow Tours</span>
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
          <h3 className="text-xl font-bold mb-4">StoryFlow Tours</h3>
          <p className="text-gray-300">Brussels-based tourist guide passionate about sharing the city through meaningful stories.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center"><Phone size={16} className="mr-2" /> +32 492 43 79 24</p>
            <p className="flex items-center"><Mail size={16} className="mr-2" /> taoufik-kh@outlook.com</p>
            <p className="flex items-center"><MapPin size={16} className="mr-2" /> Brussels, Belgium</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/storyflow.tours" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Instagram</a>
           
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2026 StoryFlow Tours. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const HomePage = ({ setCurrentPage }) => (
  <div className="pt-16">
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/test2.jpeg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Brussels</h1>
          <p className="text-xl md:text-2xl mb-8">Where every street becomes a story</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
              <MessageCircle className="mr-2" /> Book via WhatsApp
            </a>
            <button onClick={() => setCurrentPage('tours')} className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
              View Tours <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose StoryFlow Tours?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p className="text-gray-600">Deep knowledge of Brussels history, culture, and hidden gems</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Globe className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Multilingual</h3>
            <p className="text-gray-600">English, French, Arabic, Dutch (Basic to Intermediate)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Storytelling Approach</h3>
            <p className="text-gray-600">Meaningful narratives that bring places to life</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Personalized Tours</h3>
            <p className="text-gray-600">Tailored experiences for individuals and groups</p>
          </div>
        </div>
      </div>
    </div>

    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Popular Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {circuits.map(circuit => (
            <div key={circuit.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={circuit.img} alt={circuit.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{circuit.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{circuit.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-1" /> {circuit.duration}
                </div>
                <button onClick={() => setCurrentPage('tours')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">What Visitors Say</h2>
        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">No reviews yet. Be the first to share your experience!</p>
            <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              <MessageCircle className="mr-2" /> Book Your Tour
            </a>
          </div>
        ) : (
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
        )}
      </div>
    </div>

    <div className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
        <p className="text-xl mb-8">Contact me now to book your personalized Brussels tour</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
            <MessageCircle className="mr-2" /> WhatsApp
          </a>
          <a href="mailto:taoufik-kh@outlook.com" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition">
            <Mail className="mr-2" /> Email
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
          <img src="/images/Tuko.jpg" alt="Taoufik Khoumri" className="rounded-lg shadow-xl w-full" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-700 mb-4">
            My name is Taoufik Khoumri, and I am a Brussels-based tourist guide passionate about sharing the city through stories that connect history, culture, and everyday life.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Having lived and worked in a deeply international environment, I naturally connect with visitors from all over the world and enjoy making them feel welcome, understood, and inspired.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            My guiding style is built on storytelling: I don't just show places, I bring them to life through meaningful narratives, local insights, and human experiences. Fluent in French, English, and Arabic, with a basic to intermediate level of Dutch, I guide both international and local audiences with sensitivity and authenticity.
          </p>
          <p className="text-lg text-gray-700">
            Through StoryFlow Tours, my goal is to offer immersive, heartfelt experiences while contributing to Brussels cultural vibrancy.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <Globe className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Languages</h3>
              <p className="text-gray-600">English, French, Arabic, Dutch (Basic to Intermediate)</p>
            </div>
          </div>
          <div className="flex items-start">
            <Users className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Experience</h3>
              <p className="text-gray-600">Professional experience with tourists in Brussels</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Specialization</h3>
              <p className="text-gray-600">Brussels history, culture, and local life</p>
            </div>
          </div>
          <div className="flex items-start">
            <Camera className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Food & Culture</h3>
              <p className="text-gray-600">Food and drinks experience, cultural insights</p>
            </div>
          </div>
          <div className="flex items-start">
  <Moon className="text-blue-600 mr-4 flex-shrink-0" size={24} />
  <div>
    <h3 className="font-semibold text-lg">Nightlife</h3>
    <p className="text-gray-600">
      Bars, local pubs, Belgian beers & vibrant nightlife experiences
    </p>
  </div>
</div>

        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">My Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p className="text-gray-600">I tell Brussels as it truly lives and breathes, beyond postcards and clichés.
Each story is rooted in real places, real people, and lived experiences.
What I share is honest, human, and deeply connected to the soul of the city.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Connection</h3>
            <p className="text-gray-600">Through storytelling, I create moments where people feel linked to the places they walk through.
Streets, histories, and faces come together in a shared flow of meaning.
Connection is born when a city stops being foreign and starts feeling familiar.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cultural Bridge</h3>
            <p className="text-gray-600">I guide with the intention of bringing cultures closer, gently and respectfully.
By honoring differences and shared humanity, stories become bridges rather than boundaries.
Every tour is an invitation to see the city — and each other — with open curiosity.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ToursPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">Our Tours</h1>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Carefully designed experiences to help you discover Brussels through meaningful stories
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                <h3 className="font-semibold mb-2">Includes:</h3>
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
                <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition">
                  <MessageCircle className="mr-2" size={20} /> Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Custom Tour?</h2>
        <p className="text-gray-700 mb-6">Have specific interests? I create personalized tours tailored to your preferences!</p>
        <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
          <MessageCircle className="mr-2" /> Contact Me
        </a>
      </div>
    </div>
  </div>
);



const ReviewsPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">Client Reviews</h1>
      <p className="text-center text-gray-600 mb-16">What visitors say about their StoryFlow Tours experience</p>
      
      {testimonials.length === 0 ? (
        <div className="bg-blue-50 p-12 rounded-lg text-center">
          <Star size={64} className="mx-auto mb-6 text-gray-400" />
          <h2 className="text-2xl font-bold mb-4">No Reviews Yet</h2>
          <p className="text-gray-600 mb-8 text-lg">Be among the first to experience StoryFlow Tours and share your feedback!</p>
          <div className="space-y-4">
            <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition mr-4">
              <MessageCircle className="mr-2" /> Book a Tour
            </a>
           <span className="text-gray-500 font-semibold">
  Available soon on TripAdvisor
</span>

          </div>
        </div>
      ) : (
        <>
          <div className="bg-blue-50 p-8 rounded-lg mb-12 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-3xl font-bold mb-2">5.0/5</p>
            <p className="text-gray-600">Based on verified reviews</p>
            <div className="mt-6">
              <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                View all reviews on TripAdvisor
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
            <h2 className="text-2xl font-bold mb-4">Share Your Experience!</h2>
            <p className="text-gray-700 mb-6">Your feedback helps us improve and helps other travelers</p>
            <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Leave a Review
            </a>
          </div>
        </>
      )}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
      <p className="text-center text-gray-600 mb-16">I am here to answer any questions or help you book your Brussels tour</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a href="tel:+32492437924" className="text-blue-600 hover:underline">+32 492 43 79 24</a>
                <p className="text-gray-600 text-sm mt-1">Available 7 days a week, 8am - 8pm</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                  Send a message
                </a>
                <p className="text-gray-600 text-sm mt-1">Quick response guaranteed</p>
              </div>
            </div>
<div className="flex items-start">
  <div className="bg-pink-100 p-3 rounded-lg mr-4">
    <Instagram className="text-pink-600" size={24} />
  </div>
  <div>
    <h3 className="font-semibold text-lg mb-1">Instagram</h3>
    <a
      href="https://www.instagram.com/storyflow.tours"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:underline"
    >
      @storyflow.tours
    </a>
    <p className="text-gray-600 text-sm mt-1">
      Discover stories, tours & moments
    </p>
  </div>
</div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:taoufik-kh@outlook.com" className="text-purple-600 hover:underline">taoufik-kh@outlook.com</a>
                <p className="text-gray-600 text-sm mt-1">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <MapPin className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-700">Brussels, Belgium</p>
                <p className="text-gray-600 text-sm mt-1">Flexible meeting points</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Availability</h3>
            <div className="space-y-2 text-gray-700">
              <p>Monday - Sunday: 8:00am - 8:00pm</p>
              <p className="text-sm text-gray-600">Evening tours available upon request</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80933.63715725475!2d4.3517103!3d50.8503396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBrussels%2C%20Belgium!5e0!3m2!1sen!2s!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Location"
            ></iframe>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-3">Ready to Book?</h3>
            <p className="mb-4">Contact me now to arrange your personalized Brussels tour!</p>
            <a href="https://wa.me/32492437924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
              <MessageCircle className="mr-2" /> Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'tours': return <ToursPage />;

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
      
      <a 
        href="https://wa.me/32492437924" 
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