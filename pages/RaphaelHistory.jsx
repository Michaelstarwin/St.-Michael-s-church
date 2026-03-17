import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const RaphaelHistory = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="history-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="page-header">
        <h1>{t("Archangel Raphael History", "புனித ரபேல் அதிதூதர் வரலாறு")}</h1>
        <p>{t("The Divine Healer and Companion of Travelers", "தெய்வீக குணப்படுத்துபவர் மற்றும் பயணிகளின் துணை")}</p>
      </header>

      <section className="history-content glass-morphism gold-border shadow-premium">
        <div className="history-section">
          <h2>{t("Divine Mission & Name", "தெய்வீகப் பணி மற்றும் பெயர்")}</h2>
          <p>
            {t(
              "St. Raphael is one of the seven Archangels who stand before the throne of God. His name profoundly means 'God heals' or 'Divine Healer'. He is one of only three archangels specifically mentioned by name in the Bible, alongside Michael and Gabriel.",
              "புனித ரபேல் ஆண்டவரின் சிம்மாசனத்திற்கு முன் நிற்கும் ஏழு அதிதூதர்களில் ஒருவர். அவருடைய பெயருக்கு 'கடவுள் குணப்படுத்துகிறார்' என்று பொருள். விவிலியத்தில் பெயரால் குறிப்பிடப்பட்டுள்ள மூன்று அதிதூதர்களில் இவரும் ஒருவர்."
            )}
          </p>
        </div>

        <div className="history-section">
          <h2>{t("The Journey with Tobiah", "தோபியாவுடன் பயணம்")}</h2>
          <p>
            {t(
              "The primary account of St. Raphael's mission is found in the Book of Tobit. Disguised as 'Azariah', he served as a guide and protector for Tobiah on a dangerous journey. He taught Tobiah how to catch a fish and use its organs for medicinal and spiritual protection.",
              "தோபித்து நூலில் புனித ரபேலின் பணி விவரிக்கப்பட்டுள்ளது. 'அசரியா' என்ற பெயரில் மறைந்து, தோபியாவுக்கு ஒரு பயணத்தில் வழிகாட்டியாகவும் பாதுகாவலராகவும் இருந்தார். ஒரு மீனைப் பிடித்து அதன் உறுப்புகளை மருந்தாகவும் பாதுகாப்பாகவும் எவ்வாறு பயன்படுத்துவது என்று அவர் தோபியாவுக்குக் கற்றுக் கொடுத்தார்."
            )}
          </p>
        </div>

        <div className="history-section">
          <h2>{t("Miracles of Healing", "குணப்படுத்தும் அற்புதங்கள்")}</h2>
          <p>
            {t(
              "Through Raphael's guidance, Tobit's blindness was cured and Sarah was delivered from demonic affliction. After these miracles, he revealed his true identity as an Archangel sent by God to heal and deliver. He is also traditionally associated with the stirring of the healing waters at the Pool of Bethesda (John 5:1-4).",
              "ரபேலின் வழிகாட்டுதலின் மூலம், தோபித்துவின் குருட்டுத்தன்மை நீங்கியது மற்றும் சாராள் தீய சக்தியிலிருந்து விடுவிக்கப்பட்டார். இந்த அற்புதங்களுக்குப் பிறகு, அவர் கடவுளால் அனுப்பப்பட்ட அதிதூதர் என்பதை வெளிப்படுத்தினார். பெதஸ்தா குளத்தில் குணப்படுத்தும் நீரை அசைக்கும் தூதராகவும் அவர் பாரம்பரியமாகக் கருதப்படுகிறார்."
            )}
          </p>
        </div>

        <div className="history-section">
          <h2>{t("Patronage", "பாதுகாவல்")}</h2>
          <p>
            {t(
              "As a guide and healer, St. Raphael is invoked as the patron saint of travelers, the blind, physicians, nurses, medical workers, and happy meetings. He is a source of divine remedy and strength in times of suffering and uncertainty.",
              "வழிகாட்டியாகவும் குணப்படுத்துபவராகவும், புனித ரபேல் பயணிகள், பார்வையற்றோர், மருத்துவர்கள், செவிலியர்கள் மற்றும் மகிழ்ச்சியான சந்திப்புகளின் பாதுகாவலராக வேண்டப்படுகிறார். அவர் துன்ப நேரங்களில் தெய்வீக தீர்வாகவும் பலமாகவும் இருக்கிறார்."
            )}
          </p>
        </div>
      </section>

      <style>{`
        .history-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .history-content {
          padding: 3rem;
          border-radius: 20px;
        }

        .history-section {
          margin-bottom: 3rem;
        }

        .history-section:last-child {
          margin-bottom: 0;
        }

        .history-section h2 {
          color: #8b0000;
          margin-bottom: 1rem;
          font-family: 'Cinzel', serif;
        }

        .history-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #2c3e50;
        }

        @media (max-width: 768px) {
          .history-content { padding: 1.5rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default RaphaelHistory;
