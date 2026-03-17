import React from 'react';
import { useLanguage } from '../context/LanguageContext';

import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column footer-info">
          <h3>{t("St. Michael's Church", "புனித மிக்கேல் ஆலயம்")}</h3>
          <p className="footer-place">{t("Thoodhar Nagar", "தூதர் நகர்")}</p>
          <p>{t("Ettunayakkanpatti, Thoothukudi District,", "எட்டுநாயக்கன்பட்டி, தூத்துக்குடி மாவட்டம்,")}</p>
          <p>{t("Tamil Nadu 628 720", "தமிழ்நாடு 628 720")}</p>
          <p className="footer-tagline">"{t("Vazhga Valamudan", "வாழ்க வளமுடன்")}"</p>
        </div>

        <div className="footer-column footer-map-square">
          <h4>{t("Find Us", "எங்களைக் கண்டறிய")}</h4>
          <div className="map-wrapper shadow-premium">
            <iframe 
              title={t("Church Map Square", "ஆலய வரைபடம்")}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.282903332454!2d77.94291845!3d9.0811415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01535eb6ef7ed5%3A0x5c46e219e1645bd8!2sEttunayakkanpatti%2C%20Tamil%20Nadu%20628720!5e0!3m2!1sen!2sin!4v1710526488000!5m2!1sen!2sin" 
              width="150" 
              height="150" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="footer-column footer-links">
          <h4>{t("Quick Links", "விரைவு இணைப்புகள்")}</h4>
          <ul>
            <li><Link to="/">{t("Home", "முகப்பு")}</Link></li>
            <li><Link to="/history">{t("History", "வரலாறு")}</Link></li>
            <li><Link to="/schedule">{t("Worship", "வழிபாடு")}</Link></li>
            <li><Link to="/events">{t("Events", "நிகழ்வுகள்")}</Link></li>
            <li><Link to="/gallery/photos">{t("Gallery", "புகைப்படங்கள்")}</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>{t("Contact Details", "தொடர்பு விவரங்கள்")}</h4>
          <p>{t("Phone: +91 98765 43210", "தொலைபேசி: +91 98765 43210")}</p>
          <p>{t("Email: info@stmichaelchurch.org", "மின்னஞ்சல்: info@stmichaelchurch.org")}</p>
          <p>{t("Location: Ettunayakkanpatti", "இடம்: எட்டுநாயக்கன்பட்டி")}</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} {t("St. Michael's Church, Ettunayakkanpatti. All Rights Reserved.", "புனித மிக்கேல் ஆலயம், எட்டுநாயக்கன்பட்டி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.")}</p>
          <div className="divider">|</div>
          <p>
            {t("Developed and Designed by", "உருவாக்கியவர் மற்றும் வடிவமைத்தவர்")} <a href="https://boldvizbyte.com" target="_blank" rel="noopener noreferrer" className="credit-link">BoldVizByte</a>
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #1a237e;
          color: white;
          padding: 3rem 5% 1rem;
          margin-top: auto;
          border-top: 4px solid #d4af37;
        }

        .footer-content {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-column {
          flex: 1;
          min-width: 200px;
        }

        .footer-info h3 {
          color: #d4af37;
          margin-bottom: 1rem;
        }

        .footer-info p {
          color: #ecf0f1;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .footer-tagline {
          margin-top: 1rem;
          font-style: italic;
          color: #d4af37;
          font-weight: 700;
        }

        .footer-map-square {
           display: flex;
           flex-direction: column;
           align-items: center;
           min-width: 160px;
        }

        .map-wrapper {
          border: 3px solid #d4af37;
          border-radius: 12px;
          line-height: 0;
        }

        .footer-links h4, .footer-contact h4, .footer-map-square h4 {
          color: #d4af37;
          margin-bottom: 1.2rem;
          font-size: 1.1rem;
        }

        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-links a {
          color: #ecf0f1;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #d4af37;
        }

        .footer-contact p {
          color: #ecf0f1;
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: #bdc3c7;
        }

        .divider {
          opacity: 0.5;
        }

        .credit-link {
          color: #d4af37;
          text-decoration: none;
          font-weight: 700;
          transition: border-bottom 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .credit-link:hover {
          border-bottom: 1px solid #d4af37;
        }

        @media (max-width: 900px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-column {
            min-width: 100%;
          }
           .footer-bottom-content {
            flex-direction: column;
            gap: 0.5rem;
          }
          .divider { display: none; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
