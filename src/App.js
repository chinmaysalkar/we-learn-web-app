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

function App() {
  return (
   <>
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero" element={<Hero />} />
    <Route path="/appfeatures" element={<AppFeatures />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/team" element={<Team />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/contact" element={<Contacts />} />
  </Routes>
</Router>
   </>
  );
}

export default App;
