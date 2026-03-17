import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Globe, Star } from 'lucide-react';
import feastImg from '../assets/Feast.jpeg';
import flagImg from '../assets/Flag.png';
import massImg from '../assets/Mass.jpeg';

const Events = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t("Annual Feast Celebration", "ஆண்டுத் திருவிழா கொண்டாட்டம்"),
      image: feastImg,
      tag: t("Major Festival", "பெரிய திருவிழா"),
      description: t(
        "A grand celebration in honor of St. Michael the Archangel. The festival features special masses, traditional processions, and cultural events that bring the entire village together in faith and joy. It is a time of spiritual renewal and community bonding.",
        "புனித மிக்கேல் அதிதூதரை சிறப்பிக்கும் பிரமாண்டமான கொண்டாட்டம். இந்தத் திருவிழாவில் சிறப்புத் திருப்பலிகள், பாரம்பரிய ஊர்வலங்கள் மற்றும் கலாச்சார நிகழ்வுகள் இடம்பெறுகின்றன, இவை முழு கிராமத்தையும் நம்பிக்கை மற்றும் மகிழ்ச்சியுடன் ஒன்றிணைக்கின்றன. இது ஆன்மீக புதுப்பித்தல் மற்றும் சமூக பிணைப்புக்கான நேரம்."
      )
    },
    {
      title: t("Flag Hoisting Ceremony", "கொடியேற்றும் விழா"),
      image: flagImg,
      tag: t("Spiritual Journey", "ஆன்மீகப் பயணம்"),
      description: t(
        "The auspicious beginning of the annual festival season. The flag of St. Michael is hoisted with great devotion, signaling the start of the ten-day spiritual journey leading up to the feast day. Many devotees from surrounding areas participate in this sacred event.",
        "ஆண்டுத் திருவிழா காலத்தின் மங்களகரமான ஆரம்பம். புனித மிக்கேலின் கொடி மிகுந்த பக்தியுடன் ஏற்றப்படுகிறது, இது பெருவிழா வரை நீடிக்கும் பத்து நாள் ஆன்மீகப் பயணத்தின் தொடக்கத்தைக் குறிக்கிறது. சுற்றியுள்ள பகுதிகளிலிருந்து பல பக்தர்கள் இந்த புனித நிகழ்வில் பங்கேற்கின்றனர்."
      )
    },
    {
      title: t("Tuesday Special Mass", "செவ்வாய்கிழமை சிறப்பு திருப்பலி"),
      image: massImg,
      tag: t("Weekly Devotion", "வாராந்திர வழிபாடு"),
      description: t(
        "Special devotion to St. Michael every Tuesday. People flock to the church to seek blessings and offer thanks for the protective grace they have experienced. These weekly gatherings are a testimony to the enduring faith of our people.",
        "ஒவ்வொரு செவ்வாய்கிழமையும் புனித மிக்கேலுக்கு அர்ப்பணிக்கப்பட்ட சிறப்பு வழிபாடு. மக்கள் ஆசீர்வாதங்களைத் தேடவும், அவர்கள் அனுபவித்த பாதுகாப்பு அருளுக்கு நன்றி தெரிவிக்கவும் ஆலயத்திற்குத் திரழ்கின்றனர். இந்த வாராந்திர கூட்டங்கள் நம் மக்களின் நீடித்த நம்பிக்கைக்குச் சான்றாகும்."
      )
    }
  ];

  return (
    <motion.div 
      className="events-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <motion.div 
           className="sacred-badge"
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
        >
          <Calendar size={14} />
          <span>{t("Community Events", "சமூக நிகழ்வுகள்")}</span>
          <Calendar size={14} />
        </motion.div>
        <h1 className="premium-title">{t("Upcoming & Past Events", "வரவிருக்கும் மற்றும் கடந்த கால நிகழ்வுகள்")}</h1>
        <p className="premium-subtitle">{t("Celebrating our faith through community gatherings", "சமூகக் கூட்டங்கள் மூலம் நமது நம்பிக்கையைக் கொண்டாடுதல்")}</p>
        <div className="header-divider" />
      </header>

      <div className="events-premium-list">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className="premium-event-card shadow-ultra"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="event-visual">
              <img src={event.image} alt={event.title} className="event-img" />
              <div className="img-overlay" />
              <div className="event-floating-tag">
                <Star size={12} />
                {event.tag}
              </div>
            </div>

            <div className="event-content">
              <span className="event-index">0{index + 1}</span>
              <h2 className="event-display-title">{event.title}</h2>
              <p className="event-premium-desc">{event.description}</p>
              <div className="event-footer">
                <div className="event-marker" />
                <span className="marker-text">{t("Sacred Tradition", "புனித பாரம்பரியம்")}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .events-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 5%;
        }

        .page-header {
          text-align: center;
          margin-bottom: 8rem;
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
          font-size: var(--fs-display);
          margin-bottom: 1.5rem;
        }

        .premium-subtitle {
          color: var(--text-muted);
          font-size: var(--fs-base);
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

        .events-premium-list {
          display: flex;
          flex-direction: column;
          gap: 10rem;
        }

        .premium-event-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          background: white;
          border-radius: 40px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          min-height: 500px;
        }

        .premium-event-card:nth-child(even) {
          direction: rtl;
        }

        .premium-event-card:nth-child(even) .event-content {
          direction: ltr;
          text-align: left;
        }

        .event-visual {
          position: relative;
          overflow: hidden;
        }

        .event-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }

        .premium-event-card:hover .event-img {
          transform: scale(1.05);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent);
        }

        .event-floating-tag {
          position: absolute;
          top: 30px;
          left: 30px;
          background: var(--secondary);
          color: var(--primary);
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: var(--shadow-premium);
        }

        .event-content {
          padding: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .event-index {
          font-size: 5rem;
          font-weight: 900;
          color: var(--bg-soft);
          position: absolute;
          top: 2rem;
          right: 3rem;
          line-height: 1;
        }

        .event-display-title {
          font-size: var(--fs-xl);
          color: var(--primary);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .event-premium-desc {
          font-size: var(--fs-base);
          line-height: 2;
          color: var(--text-muted);
          margin-bottom: 3rem;
          text-align: justify;
        }

        .event-footer {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: auto;
        }

        .event-marker {
          width: 40px;
          height: 2px;
          background: var(--secondary);
        }

        .marker-text {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--secondary);
        }

        @media (max-width: 1024px) {
          .events-premium-list { gap: 5rem; }
          .premium-event-card {
            grid-template-columns: 1fr;
            min-height: auto;
            border-radius: 24px;
          }
          .premium-event-card:nth-child(even) {
            direction: ltr;
          }
          .event-visual {
            height: 300px;
          }
          .event-content {
            padding: 3rem 1.5rem;
          }
          .event-display-title {
            font-size: var(--fs-lg);
          }
          .event-index {
            font-size: var(--fs-xl);
            opacity: 0.1;
          }
        }
 
        @media (max-width: 480px) {
          .events-page { padding: 40px 1.2rem; }
          .page-header { margin-bottom: 4rem; }
          .event-visual { height: 220px; }
        }
      `}</style>
    </motion.div>
  );
};

export default Events;
