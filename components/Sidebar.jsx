import { Facebook, Phone, Mail, Instagram, Youtube, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const socialLinks = [
    { icon: <Facebook size={18} />, url: 'https://facebook.com', label: t('Facebook', 'பேஸ்புக்'), color: '#1877F2' },
    { icon: <Phone size={18} />, url: 'tel:+910000000000', label: t('Call', 'அழைப்பு'), color: '#25D366' },
    { icon: <Mail size={18} />, url: 'mailto:contact@church.com', label: t('Email', 'மின்னஞ்சல்'), color: '#EA4335' },
    { icon: <Instagram size={18} />, url: 'https://instagram.com', label: t('Instagram', 'இன்ஸ்டாகிராம்'), color: '#E4405F' },
    { icon: <Youtube size={18} />, url: 'https://youtube.com', label: t('YouTube', 'யுடியூப்'), color: '#FF0000' },
  ];

  return (
    <aside className="social-sidebar">
      <button 
        className="social-icon lang-sidebar-small" 
        onClick={toggleLanguage}
        title={t("Switch to Tamil", "ஆங்கிலத்திற்கு மாற்றவும்")}
      >
        <Globe size={18} />
        <span className="lang-mini-tag">{t("TA", "ஆங்")}</span>
      </button>

      <div className="sidebar-divider"></div>

      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
          style={{ '--hover-color': link.color }}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}

      <style>{`
        .social-sidebar {
          position: fixed;
          right: 0;
          top: 70%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          z-index: 1001;
          background: rgba(255, 255, 255, 0.95);
          padding: 0.8rem 0.4rem;
          border-radius: 10px 0 0 10px;
          border: 1px solid var(--glass-border);
          box-shadow: -3px 0 15px rgba(0,0,0,0.1);
          backdrop-filter: blur(8px);
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          color: #555;
          transition: all 0.3s ease;
          position: relative;
        }

        .social-icon:hover, .social-icon:active {
          color: white !important;
          background: var(--hover-color);
          transform: translateX(-3px);
        }

        .lang-sidebar-small {
          background: #8b0000;
          border: none;
          cursor: pointer;
          color: white !important;
          flex-direction: column;
          gap: 1px;
          padding: 5px 0;
          height: auto !important;
          min-height: 40px;
          --hover-color: #d4af37;
        }

        .lang-sidebar-small:hover, .lang-sidebar-small:active {
          background: #d4af37;
        }

        .lang-sidebar-small * {
          color: white !important;
        }

        .lang-mini-tag {
          font-size: 0.55rem;
          font-weight: 900;
          color: white !important;
        }

        .sidebar-divider {
          width: 60%;
          height: 1px;
          background: rgba(0,0,0,0.1);
          margin: 0.2rem auto;
        }

        @media (max-width: 768px) {
          .social-sidebar {
            top: 50%;
            bottom: auto;
            right: 0;
            transform: translateY(-50%);
            flex-direction: column;
            border-radius: 10px 0 0 10px;
            padding: 0.6rem 0.3rem;
            gap: 0.3rem;
            background: rgba(255, 255, 255, 0.9);
          }
          .social-icon {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
