import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const History = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="history-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="history-header">
        <h1>{t("History of St. Michael's Church", "புனித மிக்கேல் ஆலயத்தின் வரலாறு")}</h1>
        <p className="location">{t("Ettunayakkanpatti", "எட்டுநாயக்கன்பட்டி")}</p>
      </header>

      <section className="history-content">
        <div className="history-item">
          <h2>1600s AD</h2>
          <p>
            {t(
              "The Church of Our Lady of Heaven (Thuya Paraloga Annai Aalayam) was constructed in the 1600s AD, and the residents of Kamanaickenpatti, Ettunayakkanpatti, Kuruvinatham, and Sevalpatti villages all worshipped there.",
              "தூய பரலோக அன்னை ஆலயம் (Thuya Paraloga Annai Aalayam) கி.பி 1600களில் கட்டப்பட்டது, மேலும் காமநாயக்கன்பட்டி, எட்டுநாயக்கன்பட்டி, குருவிநத்தம் மற்றும் செவல்பட்டி கிராம மக்கள் அனைவரும் அங்கு வழிபட்டனர்."
            )}
          </p>
        </div>

        <div className="history-item">
          <h2>1863 AD</h2>
          <p>
            {t(
              "A dispute arose between the people of the Nadar community and the people of the Pillai community. On December 1, 1863, members of the Pillai community received a sum of ₹1,633 from the Nadar community and transferred all assets and rights pertaining to the Church of Our Lady of Heaven to the Nadars. The Pillais subsequently established a separate church in Kuruvinatham.",
              "நாடார் சமூக மக்களுக்கும் பிள்ளை சமூக மக்களுக்கும் இடையே ஒரு கருத்து வேறுபாடு ஏற்பட்டது. டிசம்பர் 1, 1863 இல், பிள்ளை சமூகத்தினர் நாடார் சமூகத்திடமிருந்து ₹1,633 தொகையைப் பெற்றுக்கொண்டனர், மேலும் தூய பரலோக அன்னை ஆலயத்தின் அனைத்து சொத்துக்களையும் உரிமைகளையும் நாடார்களிடம் ஒப்படைத்தனர். அதனைத் தொடர்ந்து பிள்ளை சமூகத்தினர் குருவிநத்தத்தில் தங்களுக்கு எனத் தனி ஆலயத்தை நிறுவினர்."
            )}
          </p>
        </div>

        <div className="history-item">
          <h2>1880s AD</h2>
          <p>
            {t(
              "Having experienced the protective grace of Saint Michael the Archangel, the people of Ettunayakkanpatti constructed a small chapel dedicated to him—a modest structure featuring a tiled, sloping roof. Devotees from neighboring towns began to visit the chapel, and the fame of Saint Michael the Archangel started to spread far and wide.",
              "புனித மிக்கேல் அதிதூதரின் பாதுகாப்பு அருளை அனுபவித்த எட்டுநாயக்கன்பட்டி மக்கள் அவருக்கு என ஒரு சிறிய சிற்றாலயத்தைக் கட்டினர்—இது ஓடு வேயப்பட்ட, சரிவான கூரையைக் கொண்ட ஒரு எளிய அமைப்பாகும். அண்டை ஊர்களிலிருந்து பக்தர்கள் இச்சிற்றாலயத்திற்கு வரத் தொடங்கினர், மேலும் புனித மிக்கேல் அதிதூதரின் புகழ் பரவத் தொடங்கியது."
            )}
          </p>
        </div>

        <div className="history-item">
          <h2>2004 AD - Present</h2>
          <p>
            {t(
              "In the year 2004, the construction of a magnificent and grand church dedicated to Saint Michael the Archangel was completed. Despite limited financial resources, the people of Ettunayakkanpatti replaced the chapel's simple roof with a magnificent, multi-storied tower structure. Upon completing this transformation, they were abundantly blessed, and the people rejoiced in their newfound prosperity.",
              "2004 ஆம் ஆண்டில், புனித மிக்கேல் அதிதூதருக்கென ஒரு பிரமாண்டமான மற்றும் பெரிய ஆலயத்தின் கட்டுமானம் நிறைவடைந்தது. குறைந்த நிதி ஆதாரங்கள் இருந்தபோதிலும், எட்டுநாயக்கன்பட்டி மக்கள் சிற்றாலயத்தின் எளிய கூரைக்கு பதிலாக ஒரு பிரமாண்டமான பல்அடுக்கு கோபுர அமைப்பை உருவாக்கினர். இந்த மாற்றத்தை நிறைவு செய்தவுடன், அவர்கள் மிகுதியாக ஆசீர்வதிக்கப்பட்டனர், மேலும் மக்கள் தங்கள் வாழ்வில் புதிய செழிப்பைக் கண்டனர்."
            )}
          </p>
        </div>
      </section>

      <section className="important-dates gold-border glass-morphism">
        <h2>{t("Important Dates", "முக்கிய தேதிகள்")}</h2>
        <ul>
          <li><strong>{t("Annual Festival:", "ஆண்டு விழா:")}</strong> {t("September 29th", "செப்டம்பர் 29")}</li>
          <li><strong>{t("Flag Hoisting:", "கொடியேற்றம்:")}</strong> {t("September 20th", "செப்டம்பர் 20")}</li>
          <li><strong>{t("Mother Church Feast:", "தாய் ஆலயத் திருவிழா:")}</strong> {t("August 15th", "ஆகஸ்ட் 15")}</li>
        </ul>
      </section>

      <style>{`
        .history-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .history-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .history-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .location {
          font-family: 'Tenor Sans', sans-serif;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 700;
        }

        .history-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
        }

        .history-content::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #d4af37;
          transform: translateX(-50%);
          opacity: 0.3;
        }

        .history-item {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          position: relative;
          width: 80%;
          margin: 0 auto;
          border: 1px solid rgba(139, 0, 0, 0.1);
          transition: var(--transition-smooth);
        }

        .history-item:hover {
          transform: translateY(-5px);
          border-color: #8b0000;
        }

        .history-item h2 {
          color: #8b0000;
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .important-dates {
          margin-top: 5rem;
          padding: 3rem;
          text-align: center;
          border-radius: 20px;
        }

        .important-dates ul {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .important-dates li {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .history-item { width: 100%; }
          .important-dates ul { flex-direction: column; gap: 1rem; }
          .history-content::before { display: none; }
        }
      `}</style>
    </motion.div>
  );
};

export default History;
