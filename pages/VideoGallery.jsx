import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

const VideoGallery = () => {
  const { t } = useLanguage();

  const videos = [
    { title: t("Feast Day 2024 Highlights", "திருவிழா 2024 சிறப்பம்சங்கள்"), id: "VIDEO_ID_1" },
    { title: t("Tuesday Special Mass Devotion", "செவ்வாய்கிழமை சிறப்பு திருப்பலி வழிபாடு"), id: "VIDEO_ID_2" },
    { title: t("History of St. Michael's Church", "புனித மிக்கேல் ஆலயத்தின் வரலாறு"), id: "VIDEO_ID_3" },
  ];

  return (
    <motion.div 
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Video Gallery", "வீடியோ தொகுப்பு")}</h1>
        <p>{t("Spiritual journeys and celebrations in motion", "நடமாடும் ஆன்மீகப் பயணங்கள் மற்றும் கொண்டாட்டங்கள்")}</p>
      </header>

      <div className="video-grid">
        {videos.map((video, index) => (
          <motion.div 
            key={index} 
            className="video-card gold-border glass-morphism"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="video-placeholder">
              <Play size={48} className="play-icon" />
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <button className="watch-btn">{t("Watch Now", "இப்போது பாருங்கள்")}</button>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .gallery-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .video-card {
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .video-placeholder {
          height: 200px;
          background: #2c3e50;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #d4af37;
          position: relative;
        }

        .play-icon {
          transition: transform 0.3s ease;
        }

        .video-card:hover .play-icon {
          transform: scale(1.2);
        }

        .video-info {
          padding: 1.5rem;
          text-align: center;
        }

        .video-info h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #8b0000;
        }

        .watch-btn {
          padding: 0.6rem 1.5rem;
          border: 1px solid #d4af37;
          background: transparent;
          color: #8b0000;
          border-radius: 4px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .watch-btn:hover {
          background: #8b0000;
          color: white;
          border-color: #8b0000;
        }

        @media (max-width: 768px) {
          .video-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
};

export default VideoGallery;
