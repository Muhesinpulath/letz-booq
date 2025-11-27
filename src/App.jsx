import React, { useState, useEffect } from 'react';
import { Search, Calendar, Users, MapPin, Plane, Hotel, Car, Star, Award, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('flights');
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, );

  const destinations = [
    { 
      name: 'Dubai', 
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', 
      price: 'From $599', 
      tag: 'Trending',
      description: 'Experience luxury and modernity'
    },
    { 
      name: 'Paris', 
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', 
      price: 'From $799', 
      tag: 'Popular',
      description: 'The city of love and lights'
    },
    { 
      name: 'Maldives', 
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', 
      price: 'From $1,299', 
      tag: 'Luxury',
      description: 'Paradise on earth awaits'
    },
    { 
      name: 'Tokyo', 
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', 
      price: 'From $899', 
      tag: 'Adventure',
      description: 'Where tradition meets future'
    },
    { 
      name: 'Bali', 
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', 
      price: 'From $499', 
      tag: 'Beach',
      description: 'Island paradise getaway'
    },
    { 
      name: 'New York', 
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80', 
      price: 'From $699', 
      tag: 'City Break',
      description: 'The city that never sleeps'
    }
  ];

  const features = [
    { icon: <Award className="text-white" size={32} />, title: 'Best Price Guarantee', desc: 'Find better? We\'ll refund the difference', color: '#ED1569' },
    { icon: <Shield className="text-white" size={32} />, title: 'Secure Booking', desc: '256-bit SSL encryption for safe transactions', color: '#5DB8E7' },
    { icon: <Clock className="text-white" size={32} />, title: '24/7 Support', desc: 'Round-the-clock customer assistance', color: '#ED1569' },
    { icon: <Star className="text-white" size={32} />, title: 'Trusted Reviews', desc: 'Over 2M+ verified customer reviews', color: '#5DB8E7' }
  ];

  const experiences = [
    {
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      title: 'Mountain Adventures',
      description: 'Explore breathtaking peaks and valleys with guided tours and thrilling activities.'
    },
    {
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      title: 'Beach Resorts',
      description: 'Relax on pristine beaches with luxury accommodations and world-class amenities.'
    },
    {
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      title: 'City Tours',
      description: 'Discover vibrant cities, cultural landmarks, and unforgettable urban experiences.'
    }
  ];

  const tabContent = {
    flights: (
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="from" placeholder="From" />
            <label htmlFor="from"><MapPin size={18} className="me-2" />From</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="to" placeholder="To" />
            <label htmlFor="to"><MapPin size={18} className="me-2" />To</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-floating">
            <input type="date" className="form-control" id="departure" />
            <label htmlFor="departure"><Calendar size={18} className="me-2" />Departure</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-floating">
            <input type="date" className="form-control" id="return" />
            <label htmlFor="return"><Calendar size={18} className="me-2" />Return</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-floating">
            <select className="form-select" id="passengers">
              <option>1 Passenger</option>
              <option>2 Passengers</option>
              <option>3 Passengers</option>
              <option>4+ Passengers</option>
            </select>
            <label htmlFor="passengers"><Users size={18} className="me-2" />Travelers</label>
          </div>
        </div>
      </div>
    ),
    hotels: (
      <div className="row g-3">
        <div className="col-md-8">
          <div className="form-floating">
            <input type="text" className="form-control" id="destination" placeholder="Destination" />
            <label htmlFor="destination"><MapPin size={18} className="me-2" />Destination</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-floating">
            <select className="form-select" id="rooms">
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3+ Rooms</option>
            </select>
            <label htmlFor="rooms"><Hotel size={18} className="me-2" />Rooms</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="date" className="form-control" id="checkin" />
            <label htmlFor="checkin"><Calendar size={18} className="me-2" />Check-in</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="date" className="form-control" id="checkout" />
            <label htmlFor="checkout"><Calendar size={18} className="me-2" />Check-out</label>
          </div>
        </div>
      </div>
    ),
    cabs: (
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="pickup" placeholder="Pickup Location" />
            <label htmlFor="pickup"><MapPin size={18} className="me-2" />Pickup Location</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="dropoff" placeholder="Drop-off Location" />
            <label htmlFor="dropoff"><MapPin size={18} className="me-2" />Drop-off Location</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="datetime-local" className="form-control" id="pickuptime" />
            <label htmlFor="pickuptime"><Calendar size={18} className="me-2" />Pickup Time</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <select className="form-select" id="cabtype">
              <option>Economy</option>
              <option>Premium</option>
              <option>SUV</option>
              <option>Luxury</option>
            </select>
            <label htmlFor="cabtype"><Car size={18} className="me-2" />Cab Type</label>
          </div>
        </div>
      </div>
    )
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand navbar-brand-custom d-flex align-items-center" href="#home">
            Letz<span style={{ color: '#ED1569' }}>BOOQ</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#booking">Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#explore">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#contact">Contact</a>
              </li>
              <li className="nav-item ms-3">
                <button className="btn btn-outline-danger rounded-pill px-4 fw-semibold" style={{ borderColor: '#ED1569', color: '#7f3d57ff' }}>Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center" id="home">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-10 mx-auto text-center text-white mb-5">
              <h1 className="hero-title display-3 fw-bold mb-4 mt-5">
  Your Journey Begins Here
</h1>

              <p className="lead fs-4 mb-3 mt-2 fw-semibold" >Discover amazing destinations, unbeatable deals, and unforgettable experiences</p>
            </div>
          </div>

          {/* Search Card */}
          <div className="row" id="booking">
            <div className="col-lg-11 col-xl-10 mx-auto">
              <div className="search-card p-4 p-md-5">
                <ul className="nav nav-tabs border-0 mb-4" role="tablist">
                  <li className="nav-item me-2">
                    <button 
                      className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`}
                      onClick={() => setActiveTab('flights')}
                    >
                      <Plane size={20} className="me-2 "  />Flights
                    </button>
                  </li>
                  <li className="nav-item me-2">
                    <button 
                      className={`nav-link ${activeTab === 'hotels' ? 'active' : ''}`}
                      onClick={() => setActiveTab('hotels')}
                    >
                      <Hotel size={20} className="me-2" />Hotels
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'cabs' ? 'active' : ''}`}
                      onClick={() => setActiveTab('cabs')}
                    >
                      <Car size={20} className="me-2" />Cabs
                    </button>
                  </li>
                </ul>

                {tabContent[activeTab]}

                <div className="text-center mt-4">
  <button
    className="btn btn-primary-custom text-light fw-semibold px-4 py-2 rounded-pill"
    style={{ background: '#ED1569', color: 'white', transition: 'background 0.2.s' }}
    onMouseEnter={(e) => e.currentTarget.style.background = '#7f3d57ff'}
    onMouseLeave={(e) => e.currentTarget.style.background = '#ED1569'}
  >
    <Search size={20} className="me-2" />Search Now
  </button>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="feature-box text-white text-center" style={{ background: feature.color }}>
                  <div className="mb-3">{feature.icon}</div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="mb-0" style={{ fontSize: '14px', opacity: 0.9 }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Carousel Destinations */}
<section className="py-5 my-5" id="explore">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="section-title">Trending Destinations</h2>
      <p className="text-muted fs-5">Explore the world's most sought-after locations</p>
    </div>

    <div className="carousel-container position-relative">
      <button className="carousel-btn prev" onClick={prevSlide}>
        <ChevronLeft size={24} color="#ED1569" />
      </button>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {destinations.map((dest, idx) => (
            <div key={idx} className="carousel-item">
              <div className="card destination-card shadow-sm">
                <span className="destination-tag">{dest.tag}</span>
                <img
                  src={dest.image}
                  className="card-img-top"
                  alt={dest.name}
                  loading="lazy"
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold fs-4">{dest.name}</h5>
                  <p className="card-text text-muted mb-3">{dest.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span
                      className="fw-bold"
                      style={{ color: '#ED1569', fontSize: '18px' }}
                    >
                      {dest.price}
                    </span>
                    <button
                      className="btn btn-sm rounded-pill px-4"
                      style={{
                        background: '#5DB8E7',
                        color: 'white',
                        border: 'none',
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn next" onClick={nextSlide}>
        <ChevronRight size={24} color="#ED1569" />
      </button>
    </div>
  </div>
</section>



      {/* Experience Cards Section */}
      <section className="py-5 my-5" style={{ background: '#f8f9fa' }} id="about">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Explore Experiences</h2>
            <p className="text-muted fs-5">Create memories that last a lifetime</p>
          </div>
          <div className="row g-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="col-md-4">
                <div className="experience-card">
                  <img src={exp.image} alt={exp.title} loading="lazy" />
                  <div className="experience-overlay">
                    <h4 className="fw-bold mb-2">{exp.title}</h4>
                    <p className="mb-0">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 my-5" style={{ background: '#ED1569' }}>
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="stats-number" style={{ color: 'white' }}>2M+</div>
              <p className="fs-5 mb-0">Happy Travelers</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="stats-number" style={{ color: 'white' }}>150+</div>
              <p className="fs-5 mb-0">Countries</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="stats-number" style={{ color: 'white' }}>5K+</div>
              <p className="fs-5 mb-0">Hotels</p>
            </div>
            <div className="col-md-3">
              <div className="stats-number" style={{ color: 'white' }}>24/7</div>
              <p className="fs-5 mb-0">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5" style={{ background: '#2E2E38', color: 'white' }} id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h3 className="navbar-brand-custom mb-3">Letz<span style={{ color: '#ED1569' }}>BOOQ</span></h3>
              <p className="text-white-50">Your trusted travel partner for unforgettable journeys around the world.</p>
              <p className="text-white-50 mb-1"><strong>Email:</strong> info@letzbooq.com</p>
              <p className="text-white-50 mb-1"><strong>Phone:</strong> +12346789</p>
              <p className="text-white-50"><strong>Address:</strong> 123 Travel Street, Dubai, UAE</p>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
              <h5 className="fw-bold mb-3">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#about" className="text-white-50 text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Press</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Blog</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
              <h5 className="fw-bold mb-3">Support</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
                <li className="mb-2"><a href="#contact" className="text-white-50 text-decoration-none">Contact Us</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">FAQ</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Safety</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
              <h5 className="fw-bold mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Cookie Policy</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12">
              <h5 className="fw-bold mb-3">Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-white-50"><i className="bi bi-facebook fs-5"></i></a>
                <a href="#" className="text-white-50"><i className="bi bi-twitter fs-5"></i></a>
                <a href="#" className="text-white-50"><i className="bi bi-instagram fs-5"></i></a>
                <a href="#" className="text-white-50"><i className="bi bi-linkedin fs-5"></i></a>
              </div>
            </div>
          </div>
          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center text-white-50">
            <p className="mb-0">© 2025 LetzBOOQ. All rights reserved. | Let's Book Quick</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;