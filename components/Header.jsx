import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/icon.png';
import church from '../assets/church.png';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-logo-left">
          <img src={logo} alt={t("St. Michael Tower", "புனித மிக்கேல் கோபுரம்")} />
        </div>
        
        <div className="header-center-text">
          <p className="line-1">{t("The Official Website of", "இதன் அதிகாரப்பூர்வ இணையதளம்")}</p>
          <p className="line-2">{t("St. Michael's Church", "புனித மிக்கேல் அதிதூதர் ஆலயம்")}</p>
          <p className="line-place">{t("Thoothar Nagar", "தூதர் நகர்")}</p>
          <p className="line-3">
            {t(
              "Ettunayakkanpatti, Thoothukudi District, Tamil Nadu 628 720",
              "எட்டுநாயக்கன்பட்டி, தூத்துக்குடி மாவட்டம், தமிழ்நாடு 628 720"
            )}
          </p>
        </div>

        <div className="header-logo-right">
          <img src={church} alt={t("Mother Church", "தாய் ஆலயம்")} />
        </div>
      </div>

      <style>{`
        .site-header {
          background: linear-gradient(to bottom, #ffffff, #fefae0);
          border-bottom: 2px solid #d4af37;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .site-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% -20%, rgba(212, 175, 55, 0.15), transparent 70%);
          pointer-events: none;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 5%;
          max-width: 1400px;
          margin: 0 auto;
          gap: 2rem;
        }

        .header-logo-left img,
        .header-logo-right img {
          width: 170px;
          height: 170px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #d4af37;
          box-shadow: 0 8px 30px rgba(139, 0, 0, 0.25);
          transition: transform 0.3s ease;
        }

        .header-logo-left img:hover,
        .header-logo-right img:hover {
          transform: scale(1.05);
        }

        .header-center-text {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .line-1 {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 1rem;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .line-2 {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          color: #8b0000;
          font-size: 2rem;
          line-height: 1.2;
        }

        .line-place {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 1.2rem;
          color: #8b0000;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .line-3 {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #2c3e50;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .header-top {
            flex-direction: column;
            gap: 0.8rem;
            padding: 1rem;
          }
          .line-1 { font-size: 0.8rem; letter-spacing: 1px; }
          .line-2 { font-size: 1.3rem; }
          .line-place { font-size: 1rem; }
          .line-3 { font-size: 0.75rem; line-height: 1.4; padding: 0 10px; }
          .header-logo-left img,
          .header-logo-right img {
            width: 70px;
            height: 70px;
            border-width: 2px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
