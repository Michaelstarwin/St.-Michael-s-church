import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import feastImg from '../assets/Feast.jpeg';
import flagImg from '../assets/Flag.png';
import massImg from '../assets/Mass.jpeg';

const Events = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t("Annual Feast Celebration", "ஆண்டுத் திருவிழா கொண்டாட்டம்"),
      image: feastImg,
      description: t(
        "A grand celebration in honor of St. Michael the Archangel. The festival features special masses, traditional processions, and cultural events that bring the entire village together in faith and joy. It is a time of spiritual renewal and community bonding.",
        "புனித மிக்கேல் அதிதூதரை சிறப்பிக்கும் பிரமாண்டமான கொண்டாட்டம். இந்தத் திருவிழாவில் சிறப்புத் திருப்பலிகள், பாரம்பரிய ஊர்வலங்கள் மற்றும் கலாச்சார நிகழ்வுகள் இடம்பெறுகின்றன, இவை முழு கிராமத்தையும் நம்பிக்கை மற்றும் மகிழ்ச்சியுடன் ஒன்றிணைக்கின்றன. இது ஆன்மீக புதுப்பித்தல் மற்றும் சமூக பிணைப்புக்கான நேரம்."
      )
    },
    {
      title: t("Flag Hoisting Ceremony", "கொடியேற்றும் விழா"),
      image: flagImg,
      description: t(
        "The auspicious beginning of the annual festival season. The flag of St. Michael is hoisted with great devotion, signaling the start of the ten-day spiritual journey leading up to the feast day. Many devotees from surrounding areas participate in this sacred event.",
        "ஆண்டுத் திருவிழா காலத்தின் மங்களகரமான ஆரம்பம். புனித மிக்கேலின் கொடி மிகுந்த பக்தியுடன் ஏற்றப்படுகிறது, இது பெருவிழா வரை நீடிக்கும் பத்து நாள் ஆன்மீகப் பயணத்தின் தொடக்கத்தைக் குறிக்கிறது. சுற்றியுள்ள பகுதிகளிலிருந்து பல பக்தர்கள் இந்த புனித நிகழ்வில் பங்கேற்கின்றனர்."
      )
    },
    {
      title: t("Tuesday Special Mass", "செவ்வாய்கிழமை சிறப்பு திருப்பலி"),
      image: massImg,
      description: t(
        "Special devotion to St. Michael every Tuesday. People flock to the church to seek blessings and offer thanks for the protective grace they have experienced. These weekly gatherings are a testimony to the enduring faith of our people.",
        "ஒவ்வொரு செவ்வாய்கிழமையும் புனித மிக்கேலுக்கு அர்ப்பணிக்கப்பட்ட சிறப்பு வழிபாடு. மக்கள் ஆசீர்வாதங்களைத் தேடவும், அவர்கள் அனுபவித்த பாதுகாப்பு அருளுக்கு நன்றி தெரிவிக்கவும் ஆலயத்திற்குத் திரள்கின்றனர். இந்த வாராந்திர கூட்டங்கள் நம் மக்களின் நீடித்த நம்பிக்கைக்குச் சான்றாகும்."
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
        <h1>{t("Upcoming & Past Events", "வரவிருக்கும் மற்றும் கடந்த கால நிகழ்வுகள்")}</h1>
        <p>{t("Celebrating our faith through community gatherings", "சமூகக் கூட்டங்கள் மூலம் நமது நம்பிக்கையைக் கொண்டாடுதல்")}</p>
      </header>

      <div className="events-list">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className="event-card gold-border glass-morphism"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-info">
              <h2>{event.title}</h2>
              <p className="event-description">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .events-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .event-card {
          display: flex;
          gap: 3rem;
          padding: 2rem;
          border-radius: 20px;
          align-items: center;
          overflow: hidden;
        }

        .event-card:nth-child(even) {
          flex-direction: row-reverse;
        }

        .event-image-container {
          flex: 1;
          min-width: 300px;
        }

        .event-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid #d4af37;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .event-info {
          flex: 1.5;
        }

        .event-info h2 {
          color: #8b0000;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .event-info h2::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50%;
          height: 2px;
          background: #d4af37;
        }

        .event-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          text-align: justify;
        }

        @media (max-width: 900px) {
          .event-card, .event-card:nth-child(even) {
            flex-direction: column;
            text-align: center;
          }
          .event-info h2::after {
            left: 25%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Events;
