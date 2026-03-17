import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("Thank you for your message! We will get back to you soon.", "உங்கள் செய்திக்கு நன்றி! விரைவில் உங்களைத் தொடர்பு கொள்வோம்."));
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Contact Us", "தொடர்பு கொள்ள")}</h1>
        <p>{t("Reach out for prayers, service inquiries, or visits. We are here to serve you.", "ஜெபங்கள், சேவை விசாரணைகள் அல்லது வருகைகளுக்கு எங்களைத் தொடர்பு கொள்ளவும். உங்களுக்கு சேவை செய்ய நாங்கள் இங்கு இருக்கிறோம்.")}</p>
      </header>

      <div className="contact-main-grid">
        <div className="contact-form-section">
          <div className="form-container gold-border glass-morphism shadow-premium">
            <div className="form-header">
              <MessageSquare className="form-icon" />
              <h2>{t("Send a Message", "செய்தி அனுப்புங்கள்")}</h2>
            </div>
            <form onSubmit={handleSubmit} className="actual-form">
              <div className="form-row">
                <div className="form-group">
                  <label>{t("Full Name", "முழு பெயர்")}</label>
                  <input 
                    type="text" 
                    required 
                    placeholder={t("Your Name", "உங்கள் பெயர்")}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>{t("Email Address", "மின்னஞ்சல் முகவரி")}</label>
                  <input 
                    type="email" 
                    required 
                    placeholder={t("example@mail.com", "உதாரணம்@mail.com")}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Phone Number", "தொலைபேசி எண்")}</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>{t("Subject", "பொருள்")}</label>
                  <input 
                    type="text" 
                    placeholder={t("Prayer Request, Inquiry, etc.", "ஜெப உதவி, விசாரணை போன்றவை.")}
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{t("Your Message", "உங்கள் செய்தி")}</label>
                <textarea 
                  rows="6" 
                  required 
                  placeholder={t("How can we help you?", "நாங்கள் உங்களுக்கு எவ்வாறு உதவலாம்?")}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn premium-gradient">
                <Send size={18} /> {t("Send Message", "செய்தி அனுப்பு")}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-details-section">
          <div className="details-container">
            <div className="detail-box gold-border glass-morphism">
              <MapPin className="detail-icon" />
              <div className="detail-content">
                <h3>{t("Location", "இருப்பிடம்")}</h3>
                <p>{t("Ettunayakkanpatti,", "எட்டுநாயக்கன்பட்டி,")}</p>
                <p>{t("Thoothukudi District, Tamil Nadu 628 720", "தூத்துக்குடி மாவட்டம், தமிழ்நாடு 628 720")}</p>
              </div>
            </div>

            <div className="detail-box gold-border glass-morphism">
              <Phone className="detail-icon" />
              <div className="detail-content">
                <h3>{t("Call Us", "அழைக்கவும்")}</h3>
                <p>+91 98765 43210</p>
                <p>+91 0461 234567</p>
              </div>
            </div>

            <div className="detail-box gold-border glass-morphism">
              <Mail className="detail-icon" />
              <div className="detail-content">
                <h3>{t("Email Us", "மின்னஞ்சல்")}</h3>
                <p>info@stmichaelchurch.org</p>
              </div>
            </div>

            <div className="detail-box gold-border glass-morphism">
              <Clock className="detail-icon" />
              <div className="detail-content">
                <h3>{t("Office Hours", "அலுவலக நேரம்")}</h3>
                <p>{t("Mon - Sat: 9 AM - 7 PM", "திங்கள் - சனி: காலை 9 - இரவு 7")}</p>
                <p>{t("Sun: 8 AM - 12 PM", "ஞாயிறு: காலை 8 - மதியம் 12")}</p>
              </div>
            </div>
            
            <div className="detail-box gold-border glass-morphism">
              <Globe className="detail-icon" />
              <div className="detail-content">
                <h3>{t("Languages", "மொழிகள்")}</h3>
                <p>{t("Tamil, English", "தமிழ், ஆங்கிலம்")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-width-map shadow-premium gold-border">
         <iframe 
            title={t("Detailed Church Map", "விரிவான ஆலய வரைபடம்")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.570725833113!2d77.94291845!3d9.0811415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01535eb6ef7ed5%3A0x5c46e219e1645bd8!2sEttunayakkanpatti%2C%20Tamil%20Nadu%20628720!5e0!3m2!1sen!2sin!4v1710526488000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
      </div>

      <style>{`
        .contact-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 800px;
          margin-inline: auto;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .form-container {
          padding: 4rem;
          border-radius: 24px;
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .form-icon {
          color: #8b0000;
          width: 32px;
          height: 32px;
        }

        .form-header h2 {
          font-size: 2rem;
          margin: 0;
        }

        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .form-group label {
          font-weight: 700;
          color: #2c3e50;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-group input, .form-group textarea {
          padding: 1rem;
          border: 2px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: #8b0000;
          background: rgba(139, 0, 0, 0.02);
        }

        .submit-btn {
          padding: 1.2rem;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(139, 0, 0, 0.2);
        }

        .details-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-box {
          padding: 2rem;
          border-radius: 20px;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          transition: transform 0.3s ease;
        }

        .detail-box:hover {
          transform: translateX(10px);
        }

        .detail-icon {
          color: #8b0000;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          margin-top: 0.3rem;
        }

        .detail-content h3 {
          font-size: 1.2rem;
          color: #8b0000;
          margin-bottom: 0.5rem;
        }

        .detail-content p {
          color: #2c3e50;
          font-weight: 500;
          line-height: 1.6;
        }

        .full-width-map {
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 4rem;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
          .form-container {
            padding: 2rem;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;
