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
      <header className="premium-schedule-header">
        <motion.div 
          className="sacred-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Clock size={14} />
          <span>{t("Timing", "நேரம்")}</span>
          <Clock size={14} />
        </motion.div>
        <h1 className="premium-title">{t("Divine Schedule", "திருவழிபாட்டு அட்டவணை")}</h1>
        <p className="premium-subtitle">{t("Join us in spiritual devotion and sacred ceremonies", "ஆன்மீக பக்தியில் எங்களுடன் சேருங்கள்")}</p>
        <div className="header-divider" />
      </header>

      <div className="premium-schedule-grid">
        {schedules.map((item, index) => (
          <motion.div 
            key={index}
            className="premium-schedule-card shadow-premium"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="icon-halo">{item.icon}</div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="time-display">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="special-notice-box shadow-ultra"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="notice-inner">
          <h3>{t("Special Services", "சிறப்பு சேவைகள்")}</h3>
          <p>
            {t(
              "For special intentions, house blessings, or private mass requests, please contact the Parish Office.",
              "சிறப்பு நோக்கங்கள், இல்ல ஆசீர்வாதம் அல்லது தனிப்பட்ட திருப்பலி கோரிக்கைகளுக்கு, தயவுசெய்து பங்கு அலுவலகத்தைத் தொடர்பு கொள்ளவும்."
            )}
          </p>
        </div>
      </motion.div>

      <style>{`
        .schedule-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 5%;
        }

        .premium-schedule-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .sacred-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--bg-soft);
          color: var(--primary);
          padding: 0.6rem 2rem;
          border-radius: 40px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          border: 1px solid var(--glass-border);
        }

        .premium-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        .premium-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        .header-divider {
          width: 80px;
          height: 4px;
          background: var(--secondary);
          margin: 0 auto;
          border-radius: 2px;
        }

        .premium-schedule-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-bottom: 8rem;
        }

        .premium-schedule-card {
          background: white;
          padding: 3.5rem 2.5rem;
          border-radius: 32px;
          display: flex;
          align-items: center;
          gap: 2rem;
          border: 1px solid var(--glass-border);
          transition: var(--transition-smooth);
        }

        .icon-halo {
          width: 70px;
          height: 70px;
          background: var(--bg-soft);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }

        .premium-schedule-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .time-display {
          font-family: var(--display-font);
          font-weight: 800;
          color: var(--primary);
          font-size: 1.1rem;
        }

        .special-notice-box {
          background: var(--primary);
          color: white;
          padding: 5rem;
          border-radius: 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .notice-inner {
          position: relative;
          z-index: 1;
        }

        .special-notice-box h3 {
          color: var(--secondary);
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .special-notice-box p {
          font-size: 1.25rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .premium-schedule-card { flex-direction: column; text-align: center; padding: 3rem; }
          .special-notice-box { padding: 3rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default Schedule;
