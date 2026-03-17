import { motion } from 'framer-motion';
import logoIcon from '../assets/icon.png';

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <motion.div 
        className="loading-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="loading-header">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            St. Michael the Archangel Church
          </motion.h1>
          <motion.h2 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Ettunayakkanpatti
          </motion.h2>
        </div>

        <div className="image-animation-container">
          <motion.div 
            className="loading-spinner-circle"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
          <motion.img 
            src={logoIcon} 
            alt="St. Michael" 
            className="st-michael-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
          />
        </div>

        <div className="loading-footer">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Vazhga Valamudan
          </motion.h2>
          <motion.h3 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Welcome to All
          </motion.h3>
        </div>
      </motion.div>

      <style>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .loading-header h1 {
          font-family: 'Cinzel', serif;
          color: #8b0000;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .loading-header h2 {
          font-family: 'Tenor Sans', sans-serif;
          color: #d4af37;
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .image-animation-container {
          position: relative;
          width: 380px;
          height: 380px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .st-michael-image {
          width: 300px;
          height: 300px;
          object-fit: contain;
          border-radius: 50%;
          border: 4px solid #d4af37;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
          z-index: 2;
        }

        .loading-spinner-circle {
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top: 3px solid #8b0000;
          border-right: 3px solid #d4af37;
          z-index: 1;
        }

        .loading-footer h2 {
          font-family: 'Cinzel', serif;
          color: #8b0000;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .loading-footer h3 {
          font-family: 'Tenor Sans', sans-serif;
          color: #555;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        @media (max-width: 768px) {
          .loading-header h1 { font-size: 1.8rem; }
          .loading-header h2 { font-size: 1.2rem; }
          .image-animation-container { width: 260px; height: 260px; }
          .st-michael-image { width: 220px; height: 220px; }
          .loading-spinner-circle { width: 240px; height: 240px; }
          .loading-footer h2 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
