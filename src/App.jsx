import './App.css';
import { Home, Plane, Hotel, Car, Search } from 'lucide-react';
import logo2 from './assets/logo2.png';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="letzbooq-landing">
      {/* Top Navigation */}
      <div className="top-nav mb-">
        <a href="#home" className="logo">
          <img src={logo} alt="LetzBOOQ" className="logo-img" />
        </a>
        <div className="top-nav-right">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Sign in</button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav mt-2">
        <ul className="nav-tabs">
          <li>
            <button className="nav-tab active">
              <Home size={18} />
              <span>Stays</span>
            </button>
          </li>
          <li>
            <button className="nav-tab">
              <Plane size={18} />
              <span>Flights</span>
            </button>
          </li>
          <li>
            <button className="nav-tab">
              <Hotel size={18} />
              <span>Flight + Hotel</span>
            </button>
          </li>
          <li>
            <button className="nav-tab">
              <Car size={18} />
              <span>Cabs</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Save up to 40% with Sunday Funday Deals</h1>
            <p className="hero-subtitle">Book till 1 Dec 2025. Stay till the end of month.</p>
            <button className="explore-btn">Explore deals</button>
          </div>
          <div className="hero-offer-img">
            <p>Add ime/advrts img </p>
           
          </div>
        </div>
      </section>

      {/* Search Box */}
      <div className="search-container">
        <div className="search-box">
          <div className="search-field-wrapper">
            <input 
              type="text" 
              className="search-field" 
              placeholder="Where are you going?"
            />
          </div>
          <div className="search-field-wrapper">
            <input 
              type="date" 
              className="search-field" 
            />
          </div>
          <div className="search-field-wrapper">
            <input 
              type="date" 
              className="search-field" 
            />
          </div>
          <div className="search-field-wrapper">
            <div className="search-field guest-field">
              <span>2 adults · 0 children · 1 room</span>
            </div>
          </div>
        </div>
        
        <div className="search-btn-container">
          <button className="search-btn">
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <section className="content-section">
        <h2 className="section-title">Offers</h2>
      </section>
    </div>
  );
}

export default App;