import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Send, Upload } from 'lucide-react';

const Sharing = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo: null,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("Thank you for sharing your testimonial!", "உங்கள் சாட்சியத்தைப் பகிர்ந்தமைக்கு நன்றி!"));
    setFormData({ name: '', email: '', photo: null, message: '' });
  };

  return (
    <motion.div 
      className="sharing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Sharing & Testimonials", "பகிர்வு மற்றும் சாட்சிகள்")}</h1>
        <p>{t("Share your experiences of grace and faith with our community", "இறை அருள் மற்றும் நம்பிக்கையின் உங்கள் அனுபவங்களை எங்கள் சமூகத்துடன் பகிர்ந்து கொள்ளுங்கள்")}</p>
      </header>

      <div className="sharing-container">
        <section className="testimonials-list">
          <h2>{t("Voices of Faith", "நம்பிக்கையின் குரல்கள்")}</h2>
          <div className="testimonial-grid">
            {/* Sample Testimonial */}
            <div className="testimonial-card gold-border glass-morphism">
              <p>"{t("Living in Ettunayakkanpatti has been a blessing. St. Michael has protected our family and helped us prosper.", "எட்டுநாயக்கன்பட்டியில் வாழ்வது ஒரு பாக்கியம். புனித மிக்கேல் எங்கள் குடும்பத்தைப் பாதுகாத்து நாங்கள் செழிக்க உதவினார்.")}"</p>
              <div className="testimonial-author">
                <span>- {t("A Devotee", "ஒரு பக்தர்")}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sharing-form-section">
          <h2>{t("Submit Your Entry", "உங்கள் பதிவை சமர்ப்பிக்கவும்")}</h2>
          <form className="sharing-form gold-border" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t("Name", "பெயர்")}</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>{t("Email", "மின்னஞ்சல்")}</label>
              <input 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>{t("Photo Upload", "புகைப்படத்தைப் பதிவேற்றவும்")}</label>
              <div className="file-input-wrapper">
                <Upload size={20} />
                <span>{formData.photo ? formData.photo.name : t("Choose Image", "படத்தைத் தேர்ந்தெடுக்கவும்")}</span>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, photo: e.target.files[0]})}
                />
              </div>
            </div>
            <div className="form-group">
              <label>{t("Your Experience", "உங்கள் அனுபவம்")}</label>
              <textarea 
                rows="5" 
                required
                placeholder={t("Share your grace experience...", "உங்கள் அருள் அனுபவத்தைப் பகிர்ந்து கொள்ளுங்கள்...")}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn premium-gradient">
              <Send size={18} /> {t("Submit", "சமர்ப்பி")}
            </button>
          </form>
        </section>
      </div>

      <style>{`
        .sharing-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .sharing-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .testimonials-list h2, .sharing-form-section h2 {
          margin-bottom: 2rem;
          font-size: 1.8rem;
          color: #8b0000;
        }

        .testimonial-card {
          padding: 2rem;
          border-radius: 15px;
          font-style: italic;
          line-height: 1.8;
          color: #555;
        }

        .testimonial-author {
          margin-top: 1.5rem;
          text-align: right;
          font-weight: 700;
          color: #8b0000;
          font-style: normal;
        }

        .sharing-form {
          padding: 3rem;
          border-radius: 20px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #2c3e50;
        }

        .form-group input, .form-group textarea {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: #8b0000;
        }

        .file-input-wrapper {
          position: relative;
          padding: 1rem;
          border: 2px dashed #d4af37;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          color: #d4af37;
          transition: background 0.3s ease;
        }

        .file-input-wrapper:hover {
          background: rgba(212, 175, 55, 0.05);
        }

        .file-input-wrapper input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: transform 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(139, 0, 0, 0.3);
        }

        @media (max-width: 900px) {
          .sharing-container { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
};

export default Sharing;
