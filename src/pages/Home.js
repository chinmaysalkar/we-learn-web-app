import React,{useState, useEffect} from 'react'
import Header from '../Layouts/Header'
import Hero from '../components/Hero'
import AppFeatures from '../components/AppFeatures'
import Details from '../components/Details'
import Gallery from '../components/Gallery'
// import Testimonials from '../components/Testimonials'
import Contacts from '../components/Contacts'
// import Pricing from '../components/Pricing'
// import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Footer from '../Layouts/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


  return (
    <>
    <Header/>
    <Hero/>
    <AppFeatures/>
    <Details/>
    <Gallery/>
    <Team/>
    {/* <Testimonials/> */}
    {/* <Pricing/> */}
    {/* <FAQ/> */}
    <Contacts/>
    <Footer/>
    <div
      className={`back-to-top ${isVisible ? 'active' : ''}`}
      style={{
        position: 'fixed',
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        right: '15px',
        bottom: '15px',
        zIndex: 996,
        background: isVisible ? '#748ec6' : '#5777ba',
        width: '40px',
        height: '40px',
        borderRadius: '50px',
        transition: 'all 0.4s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
      onClick={handleScrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '24px', color: '#fff', lineHeight: 0 }} />
    </div>

    </>
  )
}
