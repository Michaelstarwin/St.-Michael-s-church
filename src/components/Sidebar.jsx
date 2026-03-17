import { Facebook, Phone, Mail, Instagram, Youtube, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const socialLinks = [
    { icon: <Facebook size={12} />, url: 'https://facebook.com', label: t('Facebook', 'பேஸ்புக்'), color: '#1877F2' },
    { icon: <Phone size={12} />, url: 'tel:+910000000000', label: t('Call', 'அழைப்பு'), color: '#25D366' },
    { icon: <Mail size={12} />, url: 'mailto:contact@church.com', label: t('Email', 'மின்னஞ்சல்'), color: '#EA4335' },
    { icon: <Instagram size={12} />, url: 'https://instagram.com', label: t('Instagram', 'இன்ஸ்டாகிராம்'), color: '#E4405F' },
    { icon: <Youtube size={12} />, url: 'https://youtube.com', label: t('YouTube', 'யுடியூப்'), color: '#FF0000' },
  ];

  return (
    <aside className="social-sidebar">
      <button 
        className="social-icon lang-sidebar-small" 
        onClick={toggleLanguage}
        title={t("Switch to Tamil", "ஆங்கிலத்திற்கு மாற்றவும்")}
      >
        <Globe size={12} />
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
          right: 10px;
          top: 60%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          z-index: 1000;
          padding: 0.3rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 40px;
          border: 1px solid rgba(212, 175, 55, 0.15);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
 
        .social-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--secondary);
          color: var(--primary);
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
 
        .social-icon:hover {
          background: var(--primary);
          color: white;
          transform: scale(1.1) translateX(-3px);
          box-shadow: 0 5px 15px rgba(139, 0, 0, 0.3);
        }
 
        .tooltip {
          position: absolute;
          right: 120%;
          background: var(--primary);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-family: var(--ui-font);
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-md);
        }
 
        .social-icon:hover .tooltip {
          opacity: 1;
          visibility: visible;
          right: 130%;
        }
 
        .lang-sidebar-small {
          background: #8b0000;
          border: none;
          cursor: pointer;
          color: white !important;
          flex-direction: column;
          gap: 1px;
          padding: 4px 0;
          height: auto !important;
          min-height: 32px;
          --hover-color: #d4af37;
        }

        .lang-sidebar-small:hover, .lang-sidebar-small:active {
          background: #d4af37;
        }

        .lang-sidebar-small * {
          color: white !important;
        }

        .lang-mini-tag {
          font-size: 0.45rem;
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
