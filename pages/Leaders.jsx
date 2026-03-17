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
          className="header-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <Star size={16} />
          {t("Leadership", "தலைமை")}
          <Star size={16} />
        </motion.div>
        <h1>{t("Village Leaders", "ஊர் தலைவர்கள்")}</h1>
        <p>{t("The dedicated committee serving our church and community", "எங்கள் ஆலயம் மற்றும் சமூகத்திற்கு சேவை செய்யும் அர்ப்பணிப்புள்ள குழு")}</p>
        <div className="header-divider"><span /></div>
      </header>

      {/* President — Hero Card */}
      <motion.div
        className="president-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
      >
        <div className="president-glow" />
        <div className="president-photo-ring">
          <div className="president-photo-wrap">
            <img src={president.photo} alt={president.name} className="president-photo" />
          </div>
          <div className="president-badge-ring">
            <Award size={18} />
          </div>
        </div>
        <div className="president-info">
          <span className="president-role-tag">{president.role}</span>
          <h2 className="president-name">{president.name}</h2>
          <a href={`tel:${president.contact.replace(/\s/g, '')}`} className="president-contact">
            <Phone size={15} />
            {president.contact}
          </a>
        </div>
      </motion.div>

      {/* Rest of committee */}
      <div className="leaders-grid">
        {rest.map((leader, index) => (
          <motion.div
            key={index}
            className="leader-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="leader-photo-wrap">
              <img src={leader.photo} alt={leader.name} className="leader-photo" />
              <div className="leader-photo-overlay" />
            </div>
            <div className="leader-card-body">
              <span className="leader-role">{leader.role}</span>
              <h3 className="leader-name">{leader.name}</h3>
              <a href={`tel:${leader.contact.replace(/\s/g, '')}`} className="leader-contact">
                <Phone size={13} />
                <span>{leader.contact}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .leaders-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 0 4rem;
        }

        /* ── Header ── */
        .leaders-page-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #8b0000, #c0392b);
          color: #d4af37;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.4rem 1.2rem;
          border-radius: 30px;
          margin-bottom: 1.2rem;
        }

        .leaders-page-header h1 {
          font-size: 2.6rem;
          margin-bottom: 0.6rem;
        }

        .leaders-page-header p {
          color: #777;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .header-divider {
          display: flex;
          justify-content: center;
        }

        .header-divider span {
          display: block;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          border-radius: 2px;
        }

        /* ── President Hero Card ── */
        .president-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.8rem;
          background: linear-gradient(145deg, #1a0000 0%, #3d0000 50%, #1a0000 100%);
          border-radius: 28px;
          padding: 3rem 2rem;
          margin-bottom: 3rem;
          overflow: hidden;
          cursor: default;
          box-shadow: 0 20px 60px rgba(139,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.3);
        }

        .president-glow {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .president-photo-ring {
          position: relative;
          flex-shrink: 0;
        }

        .president-photo-wrap {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #d4af37;
          box-shadow:
            0 0 0 8px rgba(212,175,55,0.15),
            0 0 40px rgba(212,175,55,0.3),
            0 10px 30px rgba(0,0,0,0.5);
        }

        .president-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .president-badge-ring {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a0000;
          border: 3px solid #1a0000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .president-info {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .president-role-tag {
          display: inline-block;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          color: #1a0000;
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.35rem 1.2rem;
          border-radius: 30px;
          margin-bottom: 0.8rem;
        }

        .president-name {
          font-size: 1.7rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .president-contact {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212,175,55,0.15);
          border: 1px solid rgba(212,175,55,0.4);
          color: #d4af37;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.55rem 1.4rem;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .president-contact:hover {
          background: #d4af37;
          color: #1a0000;
        }

        @media (min-width: 600px) {
          .president-card {
            flex-direction: row;
            padding: 3rem 3.5rem;
            gap: 3rem;
          }
          .president-info {
            text-align: left;
          }
        }

        /* ── Committee Grid ── */
        .leaders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 1.8rem;
        }

        .leader-card {
          background: #ffffff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 6px 30px rgba(0,0,0,0.08);
          border: 1px solid rgba(212,175,55,0.25);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
        }

        .leader-card:hover {
          box-shadow: 0 16px 50px rgba(139,0,0,0.16);
          border-color: rgba(212,175,55,0.6);
        }

        .leader-photo-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .leader-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }

        .leader-card:hover .leader-photo {
          transform: scale(1.06);
        }

        .leader-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(139,0,0,0.55) 100%);
          pointer-events: none;
        }

        .leader-card-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.2rem 1rem 1.4rem;
          gap: 0.35rem;
        }

        .leader-role {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8b0000;
          background: rgba(139,0,0,0.07);
          padding: 0.25rem 0.8rem;
          border-radius: 20px;
        }

        .leader-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0.1rem 0;
        }

        .leader-contact {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #555;
          text-decoration: none;
          background: rgba(139,0,0,0.06);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          transition: all 0.2s ease;
          margin-top: 0.2rem;
          white-space: nowrap;
        }

        .leader-contact:hover {
          background: #8b0000;
          color: white;
        }

        @media (max-width: 768px) {
          .leaders-page-header { margin-bottom: 2.5rem; padding: 0 1rem; }
          .leaders-page-header h1 { font-size: 2.1rem; }
          .leaders-grid { 
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); 
            gap: 1rem;
            padding: 0 1rem;
          }
          .leader-photo-wrap { height: 180px; }
          .leader-name { font-size: 0.95rem; }
          .leader-role { font-size: 0.65rem; }
          .leader-contact { font-size: 0.7rem; padding: 0.25rem 0.6rem; }
          .president-card { 
            padding: 2rem 1.5rem; 
            margin: 0 1rem 2.5rem;
            border-radius: 20px;
          }
          .president-name { font-size: 1.4rem; }
        }
        @media (max-width: 480px) {
          .leaders-grid { grid-template-columns: 1fr; }
          .leader-photo-wrap { height: 240px; }
        }
      `}</style>
    </motion.div>
  );
};

export default Leaders;
