import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import m1 from '../assets/michael_gallery_1.png';
import m2 from '../assets/michael_gallery_2.png';
import m3 from '../assets/michael_gallery_3.png';
import m4 from '../assets/michael_gallery_4.png';
import m5 from '../assets/micheal.png';
import m6 from '../assets/church.png';

const michaelPhotos = [
  { src: m1, caption: "Archangel Michael – Warrior of Heaven" },
  { src: m2, caption: "Saint Michael – Defender of the Faith" },
  { src: m3, caption: "Archangel Michael – Heavenly Battle" },
  { src: m4, caption: "Saint Michael – Guardian Protector" },
  { src: m5, caption: "Archangel Michael – Our Patron Saint" },
  { src: m6, caption: "St. Michael's Church – Ettunayakkanpatti" },
];

const MichaelGallery = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="mgallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Michael Photos", "மிக்கேல் புகைப்படங்கள்")}</h1>
        <p>{t("Sacred images of Archangel Michael, our patron and protector", "நம் திருமைகேல் அதிதூதரின் புனிதப் படங்கள்")}</p>
      </header>

      <div className="mgallery-grid">
        {michaelPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className="mgallery-card shadow-premium gold-border"
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={photo.src} alt={photo.caption} />
            <div className="mgallery-overlay">
              <p>{t(photo.caption, photo.caption)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .mgallery-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 6rem;
        }
 
        .page-header h1 {
          font-size: var(--fs-display);
          margin-bottom: 1.5rem;
        }
 
        .page-header p {
          font-size: var(--fs-base);
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .mgallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .mgallery-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          cursor: pointer;
        }

        .mgallery-card img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          transition: transform 0.5s ease, opacity 0.4s ease;
        }

        .mgallery-card:hover img {
          transform: scale(1.08);
          opacity: 0.7;
        }

        .mgallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(139,0,0,0.82));
          padding: 1.5rem;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mgallery-card:hover .mgallery-overlay {
          opacity: 1;
        }

        .mgallery-overlay p {
          font-family: 'Tenor Sans', sans-serif;
          font-weight: 700;
          letter-spacing: 0.5px;
          font-size: var(--fs-base);
        }

        @media (max-width: 1024px) {
          .mgallery-page { padding: 40px 1.5rem; }
          .page-header { margin-bottom: 4rem; }
          .mgallery-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
        }
 
        @media (max-width: 480px) {
          .mgallery-grid { grid-template-columns: 1fr; }
          .mgallery-card img { height: 280px; }
        }
      `}</style>
    </motion.div>
  );
};

export default MichaelGallery;
