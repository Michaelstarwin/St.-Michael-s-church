import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import r1 from '../assets/raphael_gallery_1.png';
import r2 from '../assets/raphael_gallery_2.png';
import r3 from '../assets/About.jpg';
import r4 from '../assets/history2.jpeg';
import r5 from '../assets/2025-a.jpeg';
import r6 from '../assets/2025-b.jpeg';

const raphaelPhotos = [
  { src: r1, caption: "Archangel Raphael – The Divine Healer" },
  { src: r2, caption: "Archangel Raphael – Guide of Tobias" },
  { src: r3, caption: "Raphael Church – Sacred Grounds" },
  { src: r4, caption: "Archangel Raphael – Patron of Healing" },
  { src: r5, caption: "Archangel Raphael – Festival Celebration" },
  { src: r6, caption: "Archangel Raphael – Feast Day" },
];

const RaphaelGallery = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="rgallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Raphael Photos", "ரபேல் புகைப்படங்கள்")}</h1>
        <p>{t("Sacred images of Archangel Raphael, the divine healer", "திவ்ய குணமளிக்கும் ரபேல் அதிதூதரின் புனிதப் படங்கள்")}</p>
      </header>

      <div className="rgallery-grid">
        {raphaelPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className="rgallery-card shadow-premium gold-border"
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={photo.src} alt={photo.caption} />
            <div className="rgallery-overlay">
              <p>{t(photo.caption, photo.caption)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .rgallery-page {
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

        .rgallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .rgallery-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          cursor: pointer;
        }

        .rgallery-card img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          transition: transform 0.5s ease, opacity 0.4s ease;
        }

        .rgallery-card:hover img {
          transform: scale(1.08);
          opacity: 0.7;
        }

        .rgallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,80,60,0.82));
          padding: 1.5rem;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .rgallery-card:hover .rgallery-overlay {
          opacity: 1;
        }

        .rgallery-overlay p {
          font-family: 'Tenor Sans', sans-serif;
          font-weight: 700;
          letter-spacing: 0.5px;
          font-size: var(--fs-base);
        }

        @media (max-width: 1024px) {
          .rgallery-page { padding: 40px 1.5rem; }
          .page-header { margin-bottom: 4rem; }
          .rgallery-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
        }
 
        @media (max-width: 480px) {
          .rgallery-grid { grid-template-columns: 1fr; }
          .rgallery-card img { height: 280px; }
        }
      `}</style>
    </motion.div>
  );
};

export default RaphaelGallery;
