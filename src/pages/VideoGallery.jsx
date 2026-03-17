import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play, Video, Star, ShieldCheck } from 'lucide-react';

const VideoGallery = () => {
  const { t } = useLanguage();

  const videos = [
    { 
      title: t("Feast Day 2024 Highlights", "திருவிழா 2024 சிறப்பம்சங்கள்"), 
      id: "VIDEO_ID_1",
      tag: t("Highlights", "சிறப்பம்சங்கள்")
    },
    { 
      title: t("Tuesday Special Mass Devotion", "செவ்வாய்கிழமை சிறப்பு திருப்பலி வழிபாடு"), 
      id: "VIDEO_ID_2",
      tag: t("Devotion", "வழிபாடு")
    },
    { 
      title: t("History of St. Michael's Church", "புனித மிக்கேல் ஆலயத்தின் வரலாறு"), 
      id: "VIDEO_ID_3",
      tag: t("Documentary", "ஆவணப்படம்")
    },
  ];

  return (
    <motion.div 
      className="video-gallery-page"
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
          <Video size={14} />
          <span>{t("Cinematic Moments", "ஆன்மீகத் திரைப்பயணம்")}</span>
          <Video size={14} />
        </motion.div>
        <h1 className="premium-title">{t("Video Gallery", "வீடியோ தொகுப்பு")}</h1>
        <p className="premium-subtitle">{t("Spiritual journeys and celebrations in motion", "நடமாடும் ஆன்மீகப் பயணங்கள் மற்றும் கொண்டாட்டங்கள்")}</p>
        <div className="header-divider" />
      </header>

      <div className="video-premium-list">
        {videos.map((video, index) => (
          <motion.div 
            key={index} 
            className="premium-video-card shadow-ultra"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="video-visual-box">
              <div className="visual-placeholder">
                <div className="sacred-play-ring">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="video-visual-tag">
                <Star size={12} />
                {video.tag}
              </div>
            </div>

            <div className="video-content-box">
              <span className="video-index">0{index + 1}</span>
              <h3 className="video-display-title">{video.title}</h3>
              <div className="video-footer">
                <button className="premium-watch-btn">
                  <Play size={14} fill="currentColor" />
                  {t("Watch Now", "இப்போது பாருங்கள்")}
                </button>
                <div className="video-divider-line" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .video-gallery-page {
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

        .video-premium-list {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .premium-video-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
          border-radius: 40px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          min-height: 400px;
        }

        .premium-video-card:nth-child(even) {
          direction: rtl;
        }

        .premium-video-card:nth-child(even) .video-content-box {
          direction: ltr;
          text-align: left;
        }

        .video-visual-box {
          position: relative;
          background: #000;
          overflow: hidden;
          cursor: pointer;
        }

        .visual-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a2e 0%, #000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .sacred-play-ring {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          position: relative;
          z-index: 2;
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .premium-video-card:hover .sacred-play-ring {
          background: var(--secondary);
          color: var(--primary);
          transform: scale(1.1);
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
        }

        .video-visual-tag {
          position: absolute;
          top: 30px;
          left: 30px;
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          z-index: 3;
        }

        .video-content-box {
          padding: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .video-index {
          font-size: var(--fs-display);
          font-weight: 900;
          color: var(--bg-soft);
          position: absolute;
          top: 2rem;
          right: 3rem;
          line-height: 1;
          opacity: 0.5;
        }

        .video-display-title {
          font-size: var(--fs-xl);
          color: var(--primary);
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
          line-height: 1.3;
        }

        .video-footer {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .premium-watch-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2.2rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-premium);
        }

        .premium-watch-btn:hover {
          background: var(--secondary);
          color: var(--primary);
          transform: translateY(-5px);
        }

        .video-divider-line {
          flex: 1;
          height: 1px;
          background: var(--glass-border);
        }

        @media (max-width: 1024px) {
          .video-premium-list { gap: 3rem; }
          .premium-video-card { grid-template-columns: 1fr; min-height: auto; border-radius: 24px; }
          .premium-video-card:nth-child(even) { direction: ltr; }
          .visual-placeholder { height: 260px; }
          .video-content-box { padding: 3rem 1.5rem; }
          .video-display-title { font-size: var(--fs-lg); }
          .video-index { font-size: var(--fs-xl); }
          .sacred-play-ring { width: 80px; height: 80px; }
        }
 
        @media (max-width: 480px) {
          .video-gallery-page { padding: 40px 1.2rem; }
          .page-header { margin-bottom: 4rem; }
          .visual-placeholder { height: 200px; }
        }
      `}</style>
    </motion.div>
  );
};

export default VideoGallery;
