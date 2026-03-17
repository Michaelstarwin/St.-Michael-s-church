import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [leadersOpen, setLeadersOpen] = useState(false);
  const [raphaelOpen, setRaphaelOpen] = useState(false);
  const [michaelOpen, setMichaelOpen] = useState(false);

  return (
    <nav className="navbar-container shadow-premium">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {t("Home", "முகப்பு")}
        </NavLink>

        <div 
          className="nav-item dropdown"
          onMouseEnter={() => setMichaelOpen(true)}
          onMouseLeave={() => setMichaelOpen(false)}
        >
          <div className="dropdown-trigger">
            {t("Saint Michael", "புனித மிக்கேல்")} <ChevronDown size={16} />
          </div>
          {michaelOpen && (
            <div className="dropdown-menu glass-morphism">
              <NavLink to="/history" className="dropdown-item">{t("History", "வரலாறு")}</NavLink>
              <NavLink to="/schedule" className="dropdown-item">{t("Worship & Prayer", "வழிபாடு")}</NavLink>
            </div>
          )}
        </div>

        <div 
          className="nav-item dropdown"
          onMouseEnter={() => setRaphaelOpen(true)}
          onMouseLeave={() => setRaphaelOpen(false)}
        >
          <div className="dropdown-trigger">
            {t("Archangel Raphael", "புனித ரபேல் அதிதூதர்")} <ChevronDown size={16} />
          </div>
          {raphaelOpen && (
            <div className="dropdown-menu glass-morphism">
              <NavLink to="/raphael/history" className="dropdown-item">{t("History", "வரலாறு")}</NavLink>
              <NavLink to="/raphael/schedule" className="dropdown-item">{t("Prayer Timings", "ஜெப நேரங்கள்")}</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/events" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {t("Events", "நிகழ்வுகள்")}
        </NavLink>

        <NavLink to="/festivals" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {t("Festivals", "திருவிழாக்கள்")}
        </NavLink>

        <div 
          className="nav-item dropdown"
          onMouseEnter={() => setGalleryOpen(true)}
          onMouseLeave={() => setGalleryOpen(false)}
        >
          <div className="dropdown-trigger">
            {t("Gallery", "புகைப்பட தொகுப்பு")} <ChevronDown size={16} />
          </div>
          {galleryOpen && (
            <div className="dropdown-menu glass-morphism">
              <NavLink to="/gallery/michael" className="dropdown-item">{t("Michael Photos", "மிக்கேல் படங்கள்")}</NavLink>
              <NavLink to="/gallery/raphael" className="dropdown-item">{t("Raphael Photos", "ரபேல் படங்கள்")}</NavLink>
              <NavLink to="/gallery/videos" className="dropdown-item">{t("Videos", "வீடியோக்கள்")}</NavLink>
              <NavLink to="/gallery/songs" className="dropdown-item">{t("Songs", "பாடல்கள்")}</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/sharing" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {t("Sharing", "பகிர்வு")}
        </NavLink>

        <div 
          className="nav-item dropdown"
          onMouseEnter={() => setLeadersOpen(true)}
          onMouseLeave={() => setLeadersOpen(false)}
        >
          <div className="dropdown-trigger">
            {t("Leaders", "தலைவர்கள்")} <ChevronDown size={16} />
          </div>
          {leadersOpen && (
            <div className="dropdown-menu glass-morphism">
              <NavLink to="/leaders" className="dropdown-item">{t("Village Leaders", "ஊர் தலைவர்கள்")}</NavLink>
              <NavLink to="/welfare" className="dropdown-item">{t("Welfare Forum", "நற்பணி மன்றம்")}</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {t("Contact", "தொடர்பு")}
        </NavLink>
      </div>

      <style>{`
        .navbar-container {
          background: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5%;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 3px solid #8b0000;
        }

        .nav-links {
          display: flex;
          gap: 0.5rem;
        }

        .nav-item {
          padding: 1.2rem 1rem;
          font-family: 'Tenor Sans', sans-serif;
          font-weight: 500;
          color: #2c3e50;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
          transition: var(--transition-smooth);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-item:hover, .nav-item.active {
          color: #8b0000;
          background: rgba(139, 0, 0, 0.05);
        }

        .lang-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #8b0000;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .lang-toggle-btn:hover {
          background: #d4af37;
          transform: translateY(-2px);
        }

        .dropdown {
          position: relative;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 180px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          animation: fadeIn 0.3s ease;
        }

        .dropdown-item {
          padding: 1rem;
          color: #2c3e50;
          font-size: 0.85rem;
          transition: var(--transition-smooth);
        }

        .dropdown-item:hover {
          background: #8b0000;
          color: #ffffff;
        }

        .lang-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #8b0000;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .lang-toggle-btn:hover {
          background: #d4af37;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .navbar-container {
            flex-direction: column;
            padding: 1rem;
          }
          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
          .nav-item {
            padding: 0.8rem;
            font-size: 0.8rem;
          }
          .lang-toggle-btn {
            margin-top: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
