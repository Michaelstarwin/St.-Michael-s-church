import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [leadersOpen, setLeadersOpen] = useState(false);
  const [raphaelOpen, setRaphaelOpen] = useState(false);
  const [michaelOpen, setMichaelOpen] = useState(false);
  
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 10, 
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.3, 
        ease: "backOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

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
            {t("Saint Michael", "புனித மிக்கேல்")} <ChevronDown size={14} />
          </div>
          <AnimatePresence>
            {michaelOpen && (
              <motion.div 
                className="dropdown-menu glass-morphism"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
              >
                <motion.div variants={itemVariants}>
                  <NavLink to="/history" className="dropdown-item">{t("History", "வரலாறு")}</NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink to="/schedule" className="dropdown-item">{t("Worship & Prayer", "வழிபாடு")}</NavLink>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div 
          className="nav-item dropdown"
          onMouseEnter={() => setRaphaelOpen(true)}
          onMouseLeave={() => setRaphaelOpen(false)}
        >
          <div className="dropdown-trigger">
            {t("Archangel Raphael", "புனித ரபேல் அதிதூதர்")} <ChevronDown size={14} />
          </div>
          <AnimatePresence>
            {raphaelOpen && (
              <motion.div 
                className="dropdown-menu glass-morphism"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
              >
                <motion.div variants={itemVariants}>
                  <NavLink to="/raphael/history" className="dropdown-item">{t("History", "வரலாறு")}</NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink to="/raphael/schedule" className="dropdown-item">{t("Prayer Timings", "ஜெப நேரங்கள்")}</NavLink>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
            {t("Gallery", "புகைப்பட தொகுப்பு")} <ChevronDown size={14} />
          </div>
          <AnimatePresence>
            {galleryOpen && (
              <motion.div 
                className="dropdown-menu glass-morphism"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
              >
                <motion.div variants={itemVariants}>
                  <NavLink to="/gallery/michael" className="dropdown-item">{t("Michael Photos", "மிக்கேல் படங்கள்")}</NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink to="/gallery/raphael" className="dropdown-item">{t("Raphael Photos", "ரபேல் படங்கள்")}</NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink to="/gallery/videos" className="dropdown-item">{t("Videos", "வீடியோக்கள்")}</NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink to="/gallery/songs" className="dropdown-item">{t("Songs", "பாடல்கள்")}</NavLink>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
            {t("Leaders", "தலைவர்கள்")} <ChevronDown size={14} />
          </div>
          <AnimatePresence>
            {leadersOpen && (
              <motion.div 
                className="dropdown-menu glass-morphism"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
              >
                <motion.div variants={itemVariants}>
                  <NavLink to="/leaders" className="dropdown-item">{t("Village Leaders", "ஊர் தலைவர்கள்")}</NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink to="/welfare" className="dropdown-item">{t("Welfare Forum", "நற்பணி மன்றம்")}</NavLink>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          {t("Contact", "தொடர்பு")}
        </NavLink>
      </div>

      <style>{`
        .navbar-container {
          background: var(--bg-main);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 5%;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 2px solid var(--glass-border);
          box-shadow: var(--shadow-sm);
        }
 
        .nav-links {
          display: flex;
          gap: 0.8rem;
          max-width: 1600px;
        }
 
        .nav-item {
          padding: 1.4rem 1.2rem;
          font-family: var(--ui-font);
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          font-size: 0.82rem;
          letter-spacing: 1.5px;
          transition: var(--transition-smooth);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          position: relative;
        }
 
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 50%;
          width: 0;
          height: 3px;
          background: var(--primary);
          transition: var(--transition-smooth);
          transform: translateX(-50%);
        }
 
        .nav-item:hover, .nav-item.active {
          color: var(--primary);
        }
 
        .nav-item:hover::after, .nav-item.active::after {
          width: 50%;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          width: 100%;
        }
 
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 220px;
          background: white;
          padding: 0.8rem;
          border-radius: 0 0 16px 16px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          animation: slideUp 0.3s ease;
        }
 
        .dropdown-item {
          padding: 0.8rem 1.2rem;
          border-radius: 8px;
          color: var(--text-main);
          font-size: 0.85rem;
          font-family: var(--ui-font);
          transition: var(--transition-smooth);
        }
 
        .dropdown-item:hover {
          background: var(--bg-soft);
          color: var(--primary);
          padding-left: 1.5rem;
        }
 
        .lang-toggle-btn {
          margin-left: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          box-shadow: var(--shadow-sm);
        }
 
        .lang-toggle-btn:hover {
          background: var(--secondary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
 
        @media (max-width: 1024px) {
          .navbar-container {
            padding: 1rem;
          }
          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
          }
          .nav-item {
            padding: 0.7rem 0.6rem;
            font-size: 0.75rem;
          }
          .lang-toggle-btn {
            margin: 1rem 0 0 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
