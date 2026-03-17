import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import micheal from '../assets/micheal.png';

const Home = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="hero-section">
        <div className="hero-text">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t("Welcome to St. Michael the Archangel Church", "புனித மிக்கேல் அதிதூதர் ஆலயத்திற்கு உங்களை வரவேற்கிறோம்")}
          </motion.h1>
          <p className="subtitle">
            {t("Experience Divine Grace and Community in Ettunayakkanpatti", "எட்டுநாயக்கன்பட்டியில் இறை அருள் மற்றும் சமூகத்தை அனுபவியுங்கள்")}
          </p>
        </div>
        <motion.img 
          src={micheal} 
          alt={t("St. Michael the Archangel Statue", "புனித மிக்கேல் அதிதூதர் சிலை")} 
          className="hero-image shadow-premium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </section>

      <section className="welcome-message">
        <h2>{t("Our Mission", "எங்கள் நோக்கம்")}</h2>
        <p>
          {t(
            "To spread the message of love, faith, and service through the protective grace of Saint Michael the Archangel. We welcome all devotees to join our community and experience the spiritual resurgence that has transformed our village.",
            "புனித மிக்கேல் அதிதூதரின் பாதுகாப்பு அருளின் மூலம் அன்பு, நம்பிக்கை மற்றும் சேவையின் செய்தியை பரப்புவது. எங்கள் சமூகத்தில் இணையவும், எங்கள் கிராமத்தை மாற்றியமைத்த ஆன்மீக விழிப்புணர்வை அனுபவிக்கவும் அனைத்து பக்தர்களையும் நாங்கள் வரவேற்கிறோம்."
          )}
        </p>
      </section>

      <div className="features-grid">
        <div className="feature-card gold-border glass-morphism">
          <h3>{t("Daily Prayer", "தினசரி ஜெபம்")}</h3>
          <p>{t("7:00 PM every day", "ஒவ்வொரு நாளும் இரவு 7:00 மணிக்கு")}</p>
        </div>
        <div className="feature-card gold-border glass-morphism">
          <h3>{t("Holy Mass", "திருப்பலி")}</h3>
          <p>{t("Every Tuesday", "ஒவ்வொரு செவ்வாய்கிழமையும்")}</p>
        </div>
        <div className="feature-card gold-border glass-morphism">
          <h3>{t("Annual Feast", "ஆண்டு திருவிழா")}</h3>
          <p>{t("September 29th", "செப்டம்பர் 29 அன்று")}</p>
        </div>
      </div>

      <style>{`
        .home-page {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          padding-bottom: 4rem;
        }

        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          background: linear-gradient(rgba(139, 0, 0, 0.05), rgba(255, 255, 255, 0));
          padding: 3rem;
          border-radius: 20px;
        }

        .hero-text {
          flex: 1;
          text-align: left;
        }

        .hero-text h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #555;
          max-width: 500px;
        }

        .hero-image {
          width: 400px;
          height: 500px;
          object-fit: cover;
          border-radius: 15px;
          border: 4px solid #d4af37;
        }

        .welcome-message {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .welcome-message h2 {
          margin-bottom: 1.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          text-align: center;
          border-radius: 15px;
          transition: var(--transition-smooth);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          background: rgba(139, 0, 0, 0.05);
        }

        .feature-card h3 {
          margin-bottom: 1rem;
          font-size: 1.4rem;
        }

        @media (max-width: 1024px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
            gap: 3rem;
          }
          .hero-text {
            text-align: center;
          }
          .hero-text h1 {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
          }
          .subtitle {
            margin: 0 auto;
            font-size: 1.1rem;
          }
          .hero-image {
            width: 100%;
            height: auto;
            max-height: 400px;
            max-width: 320px;
            margin: 0 auto;
          }
          .features-grid {
            grid-template-columns: 1fr;
            padding: 0 1rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Home;
