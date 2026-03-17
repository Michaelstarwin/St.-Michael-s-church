import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { AudioProvider } from './context/AudioContext';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';

// Pages
import Home from './pages/Home';
import History from './pages/History';
import Schedule from './pages/Schedule';
import Leaders from './pages/Leaders';
import Welfare from './pages/Welfare';
import Sharing from './pages/Sharing';
import Events from './pages/Events';
import Contact from './pages/Contact';
import PhotoGallery from './pages/PhotoGallery';
import MichaelGallery from './pages/MichaelGallery';
import RaphaelGallery from './pages/RaphaelGallery';
import VideoGallery from './pages/VideoGallery';
import SongGallery from './pages/SongGallery';
import RaphaelHistory from './pages/RaphaelHistory';
import RaphaelSchedule from './pages/RaphaelSchedule';
import Festivals from './pages/Festivals';

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div id="root">
      <ScrollToTop />
      <Header />
      <Navbar />
      <Sidebar />
      <main className="content-area">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/leaders" element={<Leaders />} />
              <Route path="/welfare" element={<Welfare />} />
              <Route path="/sharing" element={<Sharing />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery/videos" element={<VideoGallery />} />
              <Route path="/gallery/songs" element={<SongGallery />} />
              <Route path="/gallery/michael" element={<MichaelGallery />} />
              <Route path="/gallery/raphael" element={<RaphaelGallery />} />
              <Route path="/raphael/history" element={<RaphaelHistory />} />
              <Route path="/raphael/schedule" element={<RaphaelSchedule />} />
              <Route path="/festivals" element={<Festivals />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <GlobalAudioPlayer />

      <style>{`
        .content-area {
          flex: 1;
          padding: 2rem 5%;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AudioProvider>
        <Router>
          <AppContent />
        </Router>
      </AudioProvider>
    </LanguageProvider>
  );
}

export default App;
