import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useAudio } from '../context/AudioContext';
import { Music, Play, Pause, Volume2, Sparkles, Waves } from 'lucide-react';

import songIconImg from '../assets/song Icon.png';

const SongGallery = () => {
  const { t } = useLanguage();
  const { isPlaying, currentTrackIndex, playTrack, tracks, currentTime, duration } = useAudio();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 120 } }
  };

  return (
    <motion.div 
      className="songs-experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Immersive Atmospheric Background */}
      <div className="atmospheric-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        
        {/* Divine Light Rays */}
        <div className="light-rays">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="ray"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                rotate: [i * 30, i * 30 + 10, i * 30]
              }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${Math.random() * 100}vh`, 
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: ['-10vh', '110vh'],
              opacity: [0, 0.4, 0],
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`]
            }}
            transition={{ 
              duration: 20 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 2 
            }}
          >
            <Sparkles size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>

      <div className="content-wrapper">
        <header className="page-header">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 5 }}
            transition={{ type: 'spring', damping: 15 }}
            className="header-icon-glow"
          >
            <img src={songIconImg} alt="Songs" className="header-custom-icon" />
            <motion.div 
              className="glow-ring"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("Spiritual Songs & Hymns", "ஆன்மீகப் பாடல்கள் மற்றும் கீதங்கள்")}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t("Experience the peace of sacred music", "புனித இசையின் அமைதியை அனுபவியுங்கள்")}
          </motion.p>
        </header>

        <section className="songs-grid-container">
          <motion.div 
            className="songs-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tracks.map((song, index) => (
              <motion.div 
                key={song.id} 
                variants={itemVariants}
                className={`song-card-premium ${currentTrackIndex === index ? 'active' : ''}`}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => playTrack(index)}
              >
                <div className="card-inner glass-morphism shadow-premium">
                  <div className="play-indicator">
                    {currentTrackIndex === index && isPlaying ? (
                      <motion.div 
                        className="visualizer-mini"
                        animate={{ opacity: 1 }}
                      >
                        {[...Array(4)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="v-bar"
                            animate={{ height: ['20%', '100%', '40%', '80%', '20%'] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <div className="icon-circle">
                        <Music className="m-icon" size={24} />
                      </div>
                    )}
                  </div>
                  
                  <div className="song-info">
                    <h3>{t(song.title, song.taTitle)}</h3>
                    <div className="footer-meta">
                      <span className="church-tag">{t("St. Michael's", "புனித மிக்கேல்")}</span>
                      <span className="dur">{song.durationStr}</span>
                    </div>
                  </div>

                  <button className={`action-btn ${currentTrackIndex === index && isPlaying ? 'playing' : ''}`}>
                    {currentTrackIndex === index && isPlaying ? <Pause size={28} /> : <Play size={28} />}
                  </button>
                  
                  {/* Luminous Halo for active card */}
                  {currentTrackIndex === index && isPlaying && (
                    <motion.div 
                      className="luminous-halo"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: 360
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  
                  {/* Progress Glow for active card */}
                  {currentTrackIndex === index && (
                    <motion.div 
                      className="progress-glow"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Extensive Center Animation for "Now Playing" */}
        <AnimatePresence>
          {currentTrackIndex !== null && isPlaying && (
            <motion.div 
              className="immersive-now-playing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
               <div className="visualizer-container">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="viz-bar-large"
                      animate={{ 
                        height: [
                          `${Math.random() * 40 + 20}%`, 
                          `${Math.random() * 60 + 40}%`, 
                          `${Math.random() * 40 + 10}%`
                        ] 
                      }}
                      transition={{ 
                        duration: 0.4 + Math.random() * 0.4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  ))}
               </div>
               <motion.div 
                className="floating-hymn-text"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
               >
                 <Waves size={20} className="wave-icon" />
                 <span>{t("Feeling the Harmony", "நல்லிணக்கத்தை உணர்தல்")}</span>
                 <Waves size={20} className="wave-icon" />
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .songs-experience {
          min-height: 100vh;
          padding: 2rem 0 8rem;
          position: relative;
          overflow: hidden;
        }

        .atmospheric-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: #fdfcfb;
        }

        .gradient-sphere {
          position: absolute;
          filter: blur(80px);
          opacity: 0.4;
          border-radius: 50%;
        }

        .sphere-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #8b0000 0%, transparent 70%);
          top: -100px;
          right: -100px;
        }

        .sphere-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #d4af37 0%, transparent 70%);
          bottom: -50px;
          left: -50px;
        }

        .light-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 200%;
          background: linear-gradient(to top, transparent, rgba(212, 175, 55, 0.2), transparent);
          transform-origin: top;
        }

        .floating-particle {
          position: absolute;
          color: rgba(139, 0, 0, 0.2);
          pointer-events: none;
        }

        .header-icon-glow {
          position: relative;
          display: inline-flex;
          padding: 1.5rem;
          background: white;
          border-radius: 50%;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
          cursor: pointer;
          overflow: hidden;
          border: 2px solid rgba(212, 175, 55, 0.3);
        }

        .header-custom-icon {
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 50%;
        }

        .glow-ring {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          border: 2px solid #8b0000;
          border-radius: 50%;
        }

        .page-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .page-header h1 {
          font-family: 'Cinzel', serif;
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: #1a1a2e;
          letter-spacing: 2px;
        }

        .songs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .song-card-premium {
          cursor: pointer;
          position: relative;
        }

        .card-inner {
          padding: 2rem;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .song-card-premium.active .card-inner {
          background: rgba(139, 0, 0, 0.05);
          border-color: #8b0000;
          box-shadow: 0 15px 35px rgba(139, 0, 0, 0.1);
        }

        .icon-circle {
          width: 64px;
          height: 64px;
          background: #f8f9fa;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.05);
          color: #8b0000;
        }

        .visualizer-mini {
          width: 64px;
          height: 64px;
          background: #8b0000;
          border-radius: 20px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 4px;
          padding-bottom: 12px;
        }

        .v-bar {
          width: 4px;
          background: white;
          border-radius: 2px;
        }

        .song-info {
          flex: 1;
        }

        .song-info h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 0.5rem 0;
        }

        .footer-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .church-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: #8b0000;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .dur {
          font-size: 0.9rem;
          color: #888;
        }

        .action-btn {
          background: transparent;
          border: none;
          color: #8b0000;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .action-btn.playing {
          color: #d4af37;
        }

        .progress-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(to right, #8b0000, #d4af37);
          box-shadow: 0 -2px 10px rgba(139, 0, 0, 0.3);
        }

        .luminous-halo {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        .immersive-now-playing {
          margin-top: 6rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .visualizer-container {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 80px;
          padding: 2rem;
          background: rgba(139, 0, 0, 0.02);
          border-radius: 40px;
        }

        .viz-bar-large {
          width: 8px;
          background: linear-gradient(to bottom, #d4af37, #8b0000);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(139, 0, 0, 0.1);
        }

        .floating-hymn-text {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #1a1a2e;
          font-style: italic;
          opacity: 0.7;
          font-family: 'Inter', sans-serif;
        }

        .wave-icon {
          color: #8b0000;
        }

        @media (max-width: 768px) {
          .page-header { margin-bottom: 3rem; }
          .page-header h1 { font-size: 2rem; letter-spacing: 1px; }
          .page-header p { font-size: 0.9rem; padding: 0 1.5rem; }
          .header-icon-glow { padding: 1.2rem; margin-bottom: 1.5rem; }
          .header-custom-icon { width: 70px; height: 70px; }
          
          .songs-grid { 
            grid-template-columns: 1fr; 
            padding: 0 1.2rem;
            gap: 1.8rem;
          }
          .card-inner { padding: 1.2rem; gap: 1rem; }
          .icon-circle, .visualizer-mini { width: 50px; height: 50px; border-radius: 12px; }
          .song-info h3 { font-size: 1.15rem; }
          
          .immersive-now-playing { margin-top: 4rem; }
          .visualizer-container { height: 50px; gap: 4px; padding: 1rem; }
          .viz-bar-large { width: 4px; }
          .floating-hymn-text { font-size: 0.85rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default SongGallery;
