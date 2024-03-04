import './App.css';
import AppFeatures from './components/AppFeatures';
import Contacts from './components/Contacts';
import FAQ from './components/FAQ';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Home from './pages/Home';
import Team from './components/Team'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Termsofservice from './pages/Termsofservice';

function App() {
  return (
   <>
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/appfeatures" element={<AppFeatures />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/termsofservices" element={<Termsofservice />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
