import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Award, Star } from 'lucide-react';

import leader1 from '../assets/VillageLeaders1.png';
import leader2 from '../assets/VillageLeaders2.png';
import leader3 from '../assets/VillageLeaders3.png';
import leader4 from '../assets/VillageLeaders4.png';
import leader5 from '../assets/VillageLeaders5.png';

const Leaders = () => {
  const { t } = useLanguage();

  const committees = [
    {
      photo: leader1,
      role: t("President", "தலைவர்"),
      name: t("Mr. Anthonysamy", "திரு. அந்தோணி சாமி"),
      contact: "+91 98765 43210",
      isPrimary: true,
    },
    {
      photo: leader2,
      role: t("Vice President", "துணைத் தலைவர்"),
      name: t("Mr. Sebastiar", "திரு. செபஸ்தியார்"),
      contact: "+91 98765 43211",
    },
    {
      photo: leader3,
      role: t("Secretary", "செயலாளர்"),
      name: t("Mr. Aruldas", "திரு. அருள்தாஸ்"),
      contact: "+91 98765 43212",
    },
    {
      photo: leader4,
      role: t("Treasurer", "பொருளாளர்"),
      name: t("Mr. Pandiyaraj", "திரு. பாண்டியராஜ்"),
      contact: "+91 98765 43213",
    },
    {
      photo: leader5,
      role: t("Member", "உறுப்பினர்"),
      name: t("Mr. Chinnathuraj", "திரு. சின்னத்துரை"),
      contact: "+91 98765 43214",
    }
  ];

  const president = committees[0];
  const rest = committees.slice(1);

  return (
    <motion.div
      className="leaders-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page Header */}
      <header className="leaders-page-header">
        <motion.div 
          className="sacred-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Star size={14} />
          <span>{t("Leadership", "தலைமை")}</span>
          <Star size={14} />
        </motion.div>
        <h1 className="premium-title">{t("Village Leaders", "ஊர் தலைவர்கள்")}</h1>
        <p className="premium-subtitle">{t("The dedicated committee serving our church and community", "எங்கள் ஆலயம் மற்றும் சமூகத்திற்கு சேவை செய்யும் அர்ப்பணிப்புள்ள குழு")}</p>
        <div className="header-divider" />
      </header>

      {/* President — Hero Card */}
      <motion.div 
        className="premium-president-card shadow-ultra"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="card-accent-glow" />
        <div className="president-visual">
          <div className="photo-halo">
            <img src={president.photo} alt={president.name} className="president-img" />
          </div>
          <div className="honor-badge">
            <Award size={20} />
          </div>
        </div>
        
        <div className="president-details">
          <span className="premium-role-tag">{president.role}</span>
          <h2 className="president-display-name">{president.name}</h2>
          <div className="contact-action-box">
             <a href={`tel:${president.contact.replace(/\s/g, '')}`} className="action-link">
               <Phone size={16} />
               {president.contact}
             </a>
          </div>
        </div>
      </motion.div>

      {/* Rest of committee */}
      <div className="premium-leaders-grid">
        {rest.map((leader, index) => (
          <motion.div 
            key={index} 
            className="premium-leader-card shadow-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="leader-img-box">
              <img src={leader.photo} alt={leader.name} />
              <div className="img-vignette" />
            </div>
            <div className="leader-meta">
              <span className="small-role">{leader.role}</span>
              <h3>{leader.name}</h3>
              <a href={`tel:${leader.contact.replace(/\s/g, '')}`} className="compact-contact">
                <Phone size={14} />
                {leader.contact}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .leaders-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 5%;
        }

        .leaders-page-header {
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

        /* President Card */
        .premium-president-card {
          position: relative;
          background: var(--primary);
          border-radius: 40px;
          padding: 5rem;
          display: flex;
          align-items: center;
          gap: 5rem;
          margin-bottom: 6rem;
          overflow: hidden;
          color: white;
        }

        .card-accent-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          top: -200px;
          left: -100px;
        }

        .president-visual {
          position: relative;
          z-index: 1;
        }

        .photo-halo {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 6px solid var(--secondary);
          padding: 10px;
          background: rgba(255, 255, 255, 0.1);
        }

        .president-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: var(--shadow-ultra);
        }

        .honor-badge {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: var(--secondary);
          color: var(--primary);
          padding: 12px;
          border-radius: 50%;
          border: 4px solid var(--primary);
        }

        .premium-role-tag {
          display: inline-block;
          background: var(--secondary);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
        }

        .president-display-name {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: white;
        }

        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: white;
          text-decoration: none;
          font-family: var(--ui-font);
          font-weight: 600;
          opacity: 0.8;
          transition: var(--transition-smooth);
        }

        .action-link:hover {
          opacity: 1;
          color: var(--secondary);
        }

        /* Committee Grid */
        .premium-leaders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 3rem;
        }

        .premium-leader-card {
          background: white;
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .leader-img-box {
          height: 300px;
          position: relative;
        }

        .leader-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .img-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(transparent 60%, rgba(139, 0, 0, 0.4));
        }

        .leader-meta {
          padding: 2.5rem;
          text-align: center;
        }

        .small-role {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.8rem;
        }

        .leader-meta h3 {
          font-size: 1.4rem;
          margin-bottom: 1.2rem;
        }

        .compact-contact {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          text-decoration: none;
          padding: 0.5rem 1.2rem;
          background: var(--bg-soft);
          border-radius: 20px;
          transition: var(--transition-smooth);
        }

        .compact-contact:hover {
          background: var(--primary);
          color: white;
        }

        @media (max-width: 1024px) {
          .premium-president-card {
            flex-direction: column;
            text-align: center;
            padding: 4rem 2rem;
            gap: 3rem;
          }
          .photo-halo { width: 180px; height: 180px; }
          .president-display-name { font-size: 2rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default Leaders;
