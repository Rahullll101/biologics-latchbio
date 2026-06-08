import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import ChemistryPage from './pages/ChemistryPage';
import GptPage from './pages/GptPage';
import SolutionsPage from './pages/SolutionsPage';
import TargetExplorerPage from './pages/TargetExplorerPage';
import VirtualScreeningPage from './pages/VirtualScreeningPage';
import LeadOptimizationPage from './pages/LeadOptimizationPage';
import WetLabValidationPage from './pages/WetLabValidationPage';
import DigitalTwinPage from './pages/DigitalTwinPage';
import DrugDevelopmentPage from './pages/DrugDevelopmentPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/platform" element={<LandingPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/gpt" element={<GptPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/target-explorer" element={<TargetExplorerPage />} />
        <Route path="/virtual-screening" element={<VirtualScreeningPage />} />
        <Route path="/lead-optimization" element={<LeadOptimizationPage />} />
        <Route path="/wet-lab" element={<WetLabValidationPage />} />
        <Route path="/digital-twin" element={<DigitalTwinPage />} />
        <Route path="/drug-development" element={<DrugDevelopmentPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
