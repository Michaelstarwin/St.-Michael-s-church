import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Users, HandHelping, Phone, Award, ShieldCheck, Zap } from 'lucide-react';

import leader1 from '../assets/CharityCouncil1.png';
import leader2 from '../assets/CharityCouncil2.jpg';
import leader3 from '../assets/CharityCouncil3.jpeg';
import leader4 from '../assets/CharityCouncil4.jpg';
import leader5 from '../assets/CharityCouncil5.jpg';

const Welfare = () => {
  const { t } = useLanguage();

  
  const activities = [
    {
      title: t("Community Support", "சமூக ஆதரவு"),
      desc: t("Providing assistance to families in need within our village.", "எங்கள் கிராமத்தில் தேவைப்படும் குடும்பங்களுக்கு உதவி வழங்குதல்."),
      icon: <Heart size={32} />,
      color: "#e74c3c",
      benefit: t("Social Care", "சமூகப் பாதுகாப்பு")
    },
    {
      title: t("Youth Guidance", "இளைஞர் வழிகாட்டுதல்"),
      desc: t("Empowering the next generation through education and moral support.", "கல்வி மற்றும் தார்மீக ஆதரவு மூலம் அடுத்த தலைமுறைக்கு அதிகாரம் அளித்தல்."),
      icon: <Users size={32} />,
      color: "#3498db",
      benefit: t("Education", "கல்வி வழிகாட்டுதல்")
    },
    {
      title: t("Village Development", "கிராம வளர்ச்சி"),
      desc: t("Collaborating on projects that improve village infrastructure.", "கிராம உள்கட்டமைப்பை மேம்படுத்தும் திட்டங்களில் ஒத்துழைத்தல்."),
      icon: <HandHelping size={32} />,
      color: "#27ae60",
      benefit: t("Growth", "கிராம வளர்ச்சி")
    }
  ];

  const leaders = [
    {
      photo: leader1,
      name: t("Mr. Anthonysamy", "திரு. அந்தோணி சாமி"),
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
          className="header-icon-wrap"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12 }}
        >
          <ShieldCheck size={48} color="#8b0000" />
        </motion.div>
        <h1>{t("Welfare Forum", "நற்பணி மன்றம்")}</h1>
        <p>{t("Working together for the betterment of Ettunayakkanpatti", "எட்டுநாயக்கன்பட்டியின் முன்னேற்றத்திற்காக இணைந்து பணியாற்றுதல்")}</p>
      </header>

      <section className="welfare-intro premium-card shadow-ultra">
        <div className="intro-content">
          <div className="intro-badge">{t("Mission", "நோக்கம்")}</div>
          <h2>{t("Serving with Love", "அன்புடன் சேவையாற்றுதல்")}</h2>
          <p>
            {t(
              "The St. Michael's Welfare Forum is dedicated to the holistic development of our village. Inspired by our faith, we strive to uplift every resident through various social and spiritual initiatives.",
              "புனித மிக்கேல் நற்பணி மன்றம் எங்கள் கிராமத்தின் முழுமையான வளர்ச்சிக்கு அர்ப்பணிக்கப்பட்டுள்ளது. எங்கள் நம்பிக்கையினால் ஈர்க்கப்பட்டு, பல்வேறு சமூக மற்றும் ஆன்மீக முயற்சிகள் மூலம் ஒவ்வொரு குடியிருப்பாளரையும் மேம்படுத்த நாங்கள் முயற்சி செய்கிறோம்."
            )}
          </p>
        </div>
        <div className="intro-decor" />
      </section>

      {/* Revamped Activity Cards */}
      <div className="activities-modern-grid">
        {activities.map((item, index) => (
          <motion.div 
            key={index} 
            className="modern-activity-card"
            whileHover={{ y: -12 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="card-top-accent" style={{ backgroundColor: item.color }} />
            <div className="card-icon-box" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="card-benefit-tag" style={{ color: item.color, backgroundColor: `${item.color}15` }}>
              <Zap size={12} />
              {item.benefit}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)` }} />
          </motion.div>
        ))}
      </div>

      {/* Prominent Leaders Section */}
      <section className="welfare-leaders-section">
        <div className="welfare-leaders-header">
          <div className="leaders-badge">{t("Leadership", "தலைமை")}</div>
          <h2>{t("Forum Leaders", "மன்றத் தலைவர்கள்")}</h2>
          <p>{t("The dedicated committee steering our village welfare", "கிராமத்தின் நலனை வழிநடத்தும் அர்ப்பணிப்புள்ள குழு")}</p>
          <div className="header-line" />
        </div>

        <div className="welfare-leaders-container">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className={`welfare-leader-card-premium ${leader.featured ? 'featured-card' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="leader-photo-outer">
                <div className="leader-photo-inner">
                  <img src={leader.photo} alt={leader.name} />
                </div>
                {leader.featured && <div className="featured-star"><Award size={14} /></div>}
              </div>
              
              <div className="leader-meta">
                <span className="leader-tag">{leader.designation}</span>
                <h3 className="leader-name">{leader.name}</h3>
                <a href={`tel:${leader.contact.replace(/\s/g, '')}`} className="leader-call-btn">
                  <Phone size={14} />
                  <span>{leader.contact}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .welfare-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-icon-wrap {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(139,0,0,0.05);
          border-radius: 50%;
        }

        .page-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #1a1a2e;
        }

        .page-header p {
          color: #666;
          font-size: 1.1rem;
        }

        /* ── Intro Card ── */
        .welfare-intro.premium-card {
          position: relative;
          padding: 4rem;
          border-radius: 30px;
          text-align: center;
          margin-bottom: 5rem;
          background: #fff;
          overflow: hidden;
          border: 1px solid rgba(139,0,0,0.1);
        }

        .intro-content {
          position: relative;
          z-index: 2;
        }

        .intro-badge {
          display: inline-block;
          padding: 0.4rem 1.4rem;
          background: #8b0000;
          color: #d4af37;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .welfare-intro h2 {
          color: #1a1a2e;
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
        }

        .welfare-intro p {
          font-size: 1.25rem;
          line-height: 1.8;
          max-width: 850px;
          margin: 0 auto;
          color: #444;
        }

        .intro-decor {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139,0,0,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Modern Activity Cards ── */
        .activities-modern-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        .modern-activity-card {
          position: relative;
          background: #fff;
          padding: 3rem 2rem;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
        }

        .card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
        }

        .card-icon-box {
          width: 70px;
          height: 70px;
          background: rgba(0,0,0,0.03);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: transform 0.4s ease;
        }

        .modern-activity-card:hover .card-icon-box {
          transform: scale(1.1) rotate(5deg);
          background: #f8f9fa;
        }

        .card-benefit-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.9rem;
          border-radius: 30px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .modern-activity-card h3 {
          font-size: 1.4rem;
          color: #1a1a2e;
          margin-bottom: 1rem;
        }

        .modern-activity-card p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .modern-activity-card:hover .card-glow {
          opacity: 1;
        }

        /* ── Leaders Section Redesign ── */
        .welfare-leaders-section {
          padding-top: 4rem;
        }

        .welfare-leaders-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .leaders-badge {
          display: inline-block;
          color: #8b0000;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 2px solid #d4af37;
          padding-bottom: 4px;
          margin-bottom: 1rem;
        }

        .welfare-leaders-header h2 {
          font-size: 2.2rem;
          color: #1a1a2e;
          margin-bottom: 0.8rem;
        }

        .welfare-leaders-header p {
          color: #777;
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .welfare-leaders-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .welfare-leader-card-premium {
          background: #fff;
          border-radius: 30px;
          padding: 3rem 2rem;
          text-align: center;
          border: 1px solid rgba(139,0,0,0.1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .welfare-leader-card-premium:hover {
          border-color: #d4af37;
          box-shadow: 0 20px 60px rgba(139,0,0,0.12);
        }

        .featured-card {
          background: linear-gradient(to bottom, #fff, #fefae066);
          border-color: rgba(212,175,55,0.4);
        }

        .leader-photo-outer {
          position: relative;
          margin-bottom: 2rem;
        }

        .leader-photo-inner {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          overflow: hidden;
          padding: 5px;
          background: linear-gradient(135deg, #d4af37, #8b0000);
          box-shadow: 0 12px 35px rgba(139,0,0,0.25);
        }

        .leader-photo-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .featured-star {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 28px;
          height: 28px;
          background: #d4af37;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .leader-tag {
          display: block;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #8b0000;
          letter-spacing: 1px;
          margin-bottom: 0.4rem;
        }

        .leader-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 1.2rem;
          line-height: 1.3;
        }

        .leader-call-btn {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          background: #f8f9fa;
          color: #555;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .leader-call-btn:hover {
          background: #8b0000;
          color: #fff;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .welfare-leaders-container { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        }
 
        @media (max-width: 768px) {
          .welfare-intro.premium-card { padding: 2rem 1.5rem; margin: 0 1rem 3rem; border-radius: 20px; }
          .welfare-intro h2 { font-size: 1.6rem; }
          .welfare-intro p { font-size: 1rem; line-height: 1.6; }
          .activities-modern-grid { 
            grid-template-columns: 1fr; 
            padding: 0 1.2rem;
            gap: 1.5rem;
          }
          .modern-activity-card { padding: 2rem 1.5rem; }
          .welfare-leaders-container { grid-template-columns: repeat(2, 1fr); padding: 0 1rem; }
          .welfare-leader-card-premium { padding: 2rem 1rem; }
          .leader-photo-inner { width: 110px; height: 110px; }
          .leader-name { font-size: 0.85rem; }
        }
 
        @media (max-width: 480px) {
          .welfare-leaders-container { grid-template-columns: 1fr; }
          .page-header h1 { font-size: 2.1rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default Welfare;
