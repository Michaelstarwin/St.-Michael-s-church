import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Clock, Calendar } from 'lucide-react';

const RaphaelSchedule = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="schedule-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Archangel Raphael Prayer Timings", "புனித ரபேல் அதிதூதர் ஜெப நேரங்கள்")}</h1>
        <p>{t("Join us in prayer and devotion", "ஜெபத்திலும் வழிபாட்டிலும் எங்களுடன் இணையுங்கள்")}</p>
      </header>

      <div className="schedule-container">
        <motion.div 
          className="schedule-card gold-border glass-morphism shadow-premium"
          whileHover={{ scale: 1.02 }}
        >
          <div className="schedule-header">
            <Calendar className="schedule-icon" />
            <h2>{t("Daily Prayers", "தினசரி ஜெபங்கள்")}</h2>
          </div>
          <div className="schedule-item">
            <Clock size={18} />
            <span>{t("Daily at 6:00 PM", "தினமும் மாலை 6:00 மணி")}</span>
          </div>
        </motion.div>

        <motion.div 
          className="schedule-card gold-border glass-morphism shadow-premium"
          whileHover={{ scale: 1.02 }}
        >
          <div className="schedule-header">
            <Calendar className="schedule-icon" />
            <h2>{t("Regular Novena", "வழக்கமான நவநாள்")}</h2>
          </div>
          <div className="schedule-item">
            <Clock size={18} />
            <span>{t("Every Saturday: 6:30 PM", "ஒவ்வொரு சனிக்கிழமை: மாலை 6:30")}</span>
          </div>
        </motion.div>

        <motion.div 
          className="schedule-card gold-border glass-morphism shadow-premium"
          whileHover={{ scale: 1.02 }}
        >
          <div className="schedule-header">
            <Calendar className="schedule-icon" />
            <h2>{t("Annual Feast Day", "ஆண்டுத் திருவிழா")}</h2>
          </div>
          <div className="schedule-item">
            <Clock size={18} />
            <span>{t("October 24th", "அக்டோபர் 24 ஆம் தேதி")}</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .schedule-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .schedule-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .schedule-card {
          padding: 2.5rem;
          border-radius: 20px;
        }

        .schedule-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: #8b0000;
        }

        .schedule-icon {
          width: 32px;
          height: 32px;
        }

        .schedule-card h2 {
          font-family: 'Cinzel', serif;
          margin: 0;
        }

        .schedule-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: #2c3e50;
        }

        @media (max-width: 768px) {
          .schedule-card { padding: 1.5rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default RaphaelSchedule;
