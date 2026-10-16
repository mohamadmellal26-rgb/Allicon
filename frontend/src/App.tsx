import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/header';
import HeroSection from './component/heroSection';
import IconStyles from './component/IconStyles';
import TopIcons from './component/TopIcons';
import TopStickers from './component/TopStickers';
import IconFontsBanner from './component/IconFontsBanner';
import ProfessionalTools from './component/ProfessionalTools';
import WhatsNew from './component/WhatsNew';
import FigmaPluginBanner from './component/FigmaPluginBanner';
import Footer from './component/Footer';
import Authors from './component/authors/authors';
import IconsPage from './component/IconsPage/IconsPage';
import InterfaceIcons from './component/interfaceIcons/interfaceIcons';
import { IconDetails } from './component/IconDetailModal/IconDetailModal'; // استدعاء صفحة التفاصيل الجديدة
import Auth from './component/autherLogin/auth';

const HomePage = () => (
  <>
    <HeroSection />
    <IconStyles />
    <TopIcons />
    <TopStickers />
    <IconFontsBanner />
    <ProfessionalTools />
    <WhatsNew />
    <FigmaPluginBanner />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/icons" element={<IconsPage />} />
        <Route path="/interface-icons" element={<InterfaceIcons />} />
        {/* مسار تفاصيل الأيقونة بناءً على الـ ID */}
        <Route path="/icons/:id" element={<IconDetails />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;