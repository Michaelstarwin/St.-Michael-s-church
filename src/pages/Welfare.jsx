import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, GraduationCap, Cross, HeartPulse, Star, Users } from 'lucide-react';

// Import images for welfare leaders
import leader1 from '../assets/CharityCouncil1.png';
import leader2 from '../assets/CharityCouncil2.jpg';
import leader3 from '../assets/CharityCouncil3.jpeg';
import leader4 from '../assets/CharityCouncil4.jpg';
import leader5 from '../assets/CharityCouncil5.jpg';

const Welfare = () => {
  const { t } = useLanguage();

  const activities = [
    {
      title: t("Marriage Assistance", "திருமண உதவி"),
      desc: t("Providing financial support for marriages in underprivileged families.", "பின்தங்கிய குடும்பங்களில் நடைபெறும் திருமணங்களுக்கு நிதி உதவி வழங்குதல்."),
      icon: <Heart size={24} />,
      color: "#e91e63",
      benefit: t("Social Support", "சமூக ஆதரவு")
    },
    {
      title: t("Educational Aid", "கல்வி உதவி"),
      desc: t("Scholarships and supplies for students to ensure bright futures.", "மாணவர்களின் ஒளிமயமான எதிர்காலத்தை உறுதி செய்ய கல்வி உதவித்தொகை மற்றும் உபகரணங்கள்."),
      icon: <GraduationCap size={24} />,
      color: "#2196f3",
      benefit: t("Empowerment", "அதிகாரமளித்தல்")
    },
    {
      title: t("Medical Help", "மருத்துவ உதவி"),
      desc: t("Helping with medical expenses and organizing health camps.", "மருத்துவச் செலவுகளுக்கு உதவுதல் மற்றும் சுகாதார முகாம்களை ஏற்பாடு செய்தல்."),
      icon: <Cross size={24} />,
      color: "#f44336",
      benefit: t("Health Care", "சுகாதார பராமரிப்பு")
    },
    {
      title: t("General Welfare", "பொது நலன்"),
      desc: t("Supporting local community development and individual needs.", "உள்ளூர் சமூக மேம்பாடு மற்றும் தனிநபர் தேவைகளை ஆதரித்தல்."),
      icon: <HeartPulse size={24} />,
      color: "#4caf50",
      benefit: t("Community Care", "சமூக பராமரிப்பு")
    }
  ];

  const leaders = [
    {
      photo: leader1,
      name: t("Mr. Anthonysamy", "திரு. அந்தோணிசாமி"),
      designation: t("President", "தலைவர்"),
      contact: "+91 98765 43210",
      featured: true
    },
    {
      photo: leader2,
      name: t("Mr. Sebastiar", "திரு. செபஸ்தியார்"),
      designation: t("Vice President", "துணைத் தலைவர்"),
      contact: "+91 98765 43211"
    },
    {
      photo: leader3,
      name: t("Mr. Aruldas", "திரு. அருள்தாஸ்"),
      designation: t("Secretary", "செயலாளர்"),
      contact: "+91 98765 43212"
    },
    {
      photo: leader4,
      name: t("Mr. Pandiyaraj", "திரு. பாண்டியராஜ்"),
      designation: t("Treasurer", "பொருளாளர்"),
      contact: "+91 98765 43213"
    },
    {
      photo: leader5,
      name: t("Mr. Chinnathuraj", "திரு. சின்னத்துரை"),
      designation: t("Member", "உறுப்பினர்"),
      contact: "+91 98765 43214"
    }
  ];

  return (
    <motion.div 
      className="welfare-page"
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
          <Heart size={14} />
          <span>{t("St. Michael Welfare Forum", "புனித மிக்கேல் நற்பணி மன்றம்")}</span>
          <Heart size={14} />
        </motion.div>
        <h1 className="premium-title">{t("Empowering Our Community", "எங்கள் சமூகத்தை உயர்த்துவது")}</h1>
        <p className="premium-subtitle">{t("Dedicated to the social and spiritual upliftment of Ettunayakkanpatti", "எட்டுநாயக்கன்பட்டியின் சமூக மற்றும் ஆன்மீக மேம்பாட்டிற்காக அர்ப்பணிக்கப்பட்டது")}</p>
        <div className="header-divider" />
      </header>

      <section className="welfare-intro-section">
        <div className="welfare-intro premium-card shadow-premium">
          <h2>{t("Our Mission", "எங்கள் நோக்கம்")}</h2>
          <p>
            {t(
              "St. Michael Welfare Forum (Narpani Mandram) serves as a beacon of hope and support in Ettunayakkanpatti. Since its inception, we have been committed to providing holistic aid to the needy, ensuring that no member of our community faces life's challenges alone. Through your support and the intercession of Archangel Michael, we continue to grow in our service of love.",
              "புனித மிக்கேல் நற்பணி மன்றம் எட்டுநாயக்கன்பட்டியில் நம்பிக்கை மற்றும் ஆதரவின் அடையாளமாக செயல்படுகிறது. அதன் தொடக்கத்திலிருந்தே, தேவையுள்ளவர்களுக்கு முழுமையான உதவியை வழங்க நாங்கள் கடமைப்பட்டுள்ளோம். உங்கள் ஆதரவு மற்றும் அதிதூதர் மிக்கேலின் வேண்டுதல்கள் மூலம், நாங்கள் அன்பின் சேவையில் தொடர்ந்து வளர்கிறோம்."
            )}
          </p>
          <div className="intro-accent-glow" />
        </div>
      </section>

      <section className="activities-section">
        <div className="section-header">
          <span className="section-tag">{t("Impact", "தாக்கம்")}</span>
          <h2>{t("Welfare Activities", "நற்பணி நடவடிக்கைகள்")}</h2>
        </div>

        <div className="activities-premium-grid">
          {activities.map((item, index) => (
            <motion.div 
              key={index} 
              className="premium-activity-card shadow-premium"
              whileHover={{ y: -12 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="activity-icon-box" style={{ background: `${item.color}10`, color: item.color }}>
                {item.icon}
              </div>
              <span className="benefit-pill" style={{ background: `${item.color}10`, color: item.color }}>{item.benefit}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="card-accent" style={{ background: item.color }} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="council-section">
        <div className="section-header">
          <span className="section-tag">{t("Leadership", "தலைமை")}</span>
          <h2>{t("Charity Council", "அறக்கட்டளைக் குழு")}</h2>
        </div>

        <div className="welfare-leaders-grid">
          {leaders.map((leader, index) => (
            <motion.div 
              key={index} 
              className={`welfare-leader-card ${leader.featured ? 'featured-card shadow-ultra' : 'shadow-premium'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="leader-visual">
                <div className="photo-inner">
                  <img src={leader.photo} alt={leader.name} />
                </div>
                {leader.featured && <div className="featured-badge"><Users size={16} /></div>}
              </div>
              <div className="leader-info">
                <span className="role-tag">{leader.designation}</span>
                <h3>{leader.name}</h3>
                <p className="leader-contact">{leader.contact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .welfare-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 5%;
        }

        .page-header {
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

        .welfare-intro-section {
          margin-bottom: 8rem;
        }

        .welfare-intro.premium-card {
          background: white;
          padding: 5rem;
          border-radius: 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .welfare-intro h2 {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          color: var(--primary);
        }

        .welfare-intro p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .intro-accent-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 0, 0, 0.05) 0%, transparent 70%);
          bottom: -200px;
          right: -100px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-tag {
          color: var(--secondary);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
        }

        .activities-premium-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-bottom: 8rem;
        }

        .premium-activity-card {
          background: white;
          padding: 4rem 2.5rem;
          border-radius: 32px;
          text-align: center;
          border: 1px solid var(--glass-border);
          position: relative;
          overflow: hidden;
        }

        .activity-icon-box {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .benefit-pill {
          display: inline-block;
          padding: 0.4rem 1.2rem;
          border-radius: 40px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .premium-activity-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .premium-activity-card p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0.5;
        }

        .council-section {
          margin-bottom: 4rem;
        }

        .welfare-leaders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
        }

        .welfare-leader-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 32px;
          text-align: center;
          border: 1px solid var(--glass-border);
          position: relative;
        }

        .featured-card {
          background: var(--bg-soft);
          border-color: var(--secondary);
        }

        .leader-visual {
          width: 140px;
          height: 140px;
          margin: 0 auto 1.5rem;
          position: relative;
        }

        .photo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--secondary);
          padding: 6px;
          background: white;
        }

        .photo-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .featured-badge {
          position: absolute;
          bottom: 5px;
          right: 5px;
          background: var(--secondary);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
        }

        .role-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.8rem;
        }

        .leader-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .leader-contact {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .premium-title { font-size: 2.5rem; }
          .welfare-intro.premium-card { padding: 3rem 1.5rem; }
          .welfare-leader-card { padding: 2.5rem 1.5rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default Welfare;
