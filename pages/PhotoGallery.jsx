import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const PhotoGallery = () => {
  const { t } = useLanguage();

  const photos = Object.entries(imageModules)
    .filter(([path]) => !path.includes('vite.svg') && !path.includes('react.svg'))
    .map(([path, module]) => {
      const fileName = path.split('/').pop().split('.')[0];
      return {
        src: module.default,
        title: t(fileName, fileName) // Default to filename for now
      };
    });

  return (
    <motion.div 
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Photo Gallery", "புகைப்படத் தொகுப்பு")}</h1>
        <p>{t("Moments of faith and celebration at Ettunayakkanpatti", "எட்டுநாயக்கன்பட்டியில் நம்பிக்கை மற்றும் கொண்டாட்டத்தின் தருணங்கள்")}</p>
      </header>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <motion.div 
            key={index} 
            className="photo-card shadow-premium gold-border"
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={photo.src} alt={photo.title} />
            <div className="photo-overlay">
              <p>{photo.title}</p>
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

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .photo-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          cursor: pointer;
        }

        .photo-card img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .photo-card:hover img {
          transform: scale(1.1);
          opacity: 0.7;
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          padding: 1.5rem;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .photo-card:hover .photo-overlay {
          opacity: 1;
        }

        .photo-overlay p {
          font-family: 'Tenor Sans', sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .photo-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
};

export default PhotoGallery;
