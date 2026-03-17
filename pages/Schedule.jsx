import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Clock, Calendar, Bell } from 'lucide-react';

const Schedule = () => {
  const { t } = useLanguage();

  const schedules = [
    {
      title: t("Weekly Holy Mass", "வாராந்திர திருப்பலி"),
      time: t("Every Tuesday", "ஒவ்வொரு செவ்வாய்கிழமை"),
      icon: <Bell className="schedule-icon" />,
    },
    {
      title: t("Daily Prayer Service", "தினசரி ஜெப வழிபாடு"),
      time: t("Daily at 7:00 PM", "தினமும் இரவு 7:00 மணிக்கு"),
      icon: <Clock className="schedule-icon" />,
    },
    {
      title: t("Annual Feast", "ஆண்டுத் திருவிழா"),
      time: t("September 29th", "செப்டம்பர் 29"),
      icon: <Calendar className="schedule-icon" />,
    },
    {
      title: t("Flag Hoisting", "கொடியேற்றம்"),
      time: t("September 20th", "செப்டம்பர் 20"),
      icon: <Bell className="schedule-icon" />,
    },
    {
      title: t("Mother Church Feast", "தாய் ஆலயத் திருவிழா"),
      time: t("August 15th (Our Lady of Heaven)", "ஆகஸ்ட் 15 (பரலோக அன்னை)"),
      icon: <Calendar className="schedule-icon" />,
    },
  ];

  return (
    <motion.div 
      className="schedule-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Worship & Prayer Schedule", "வணக்கம் மற்றும் வழிபாடு அட்டவணை")}</h1>
        <p>{t("Join us in spiritual devotion", "ஆன்மீக பக்தியில் எங்களுடன் சேருங்கள்")}</p>
      </header>

      <div className="schedule-grid">
        {schedules.map((item, index) => (
          <motion.div 
            key={index}
            className="schedule-card gold-border glass-morphism"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="time">{item.time}</p>
          </motion.div>
        ))}
      </div>

      <div className="special-notice premium-gradient shadow-premium">
        <h3>{t("Special Services", "சிறப்பு சேவைகள்")}</h3>
        <p>
          {t(
            "For special intentions, house blessings, or private mass requests, please contact the Parish Office.",
            "சிறப்பு நோக்கங்கள், இல்ல ஆசீர்வாதம் அல்லது தனிப்பட்ட திருப்பலி கோரிக்கைகளுக்கு, தயவுசெய்து பங்கு அலுவலகத்தைத் தொடர்பு கொள்ளவும்."
          )}
        </p>
      </div>

      <style>{`
        .schedule-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .schedule-card {
          padding: 2.5rem;
          text-align: center;
          border-radius: 20px;
          transition: var(--transition-smooth);
        }

        .schedule-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .icon-box {
          color: #8b0000;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .schedule-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
          color: #2c3e50;
        }

        .time {
          font-family: 'Tenor Sans', sans-serif;
          font-weight: 700;
          color: #8b0000;
          font-size: 1.2rem;
        }

        .special-notice {
          padding: 3rem;
          border-radius: 20px;
          text-align: center;
        }

        .special-notice h3 {
          color: #d4af37;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .schedule-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
};

export default Schedule;
