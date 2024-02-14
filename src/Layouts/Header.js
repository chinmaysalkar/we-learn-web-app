import React, {useState, useEffect} from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import { faChevronRight, faChevronUp, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Header() {


  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log('Mobile menu toggled');
  };
  


  return (
    <>
      <header id="header" className={`fixed-top ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1><HashLink to="/">WeLearn</HashLink></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
        </div>

        <nav id="navbar " className={`navbar  ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul>
            <li><HashLink className={`nav-link scrollto ${activeLink === 'Home' ? 'active' : ''}`}
            to="#hero"
            onClick={() => handleLinkClick('Home')}>Home</HashLink></li>

            <li><HashLink className={`nav-link scrollto ${activeLink === 'AppFeatures' ? 'active' : ''}`}
            to="#appfeatures"
            onClick={() => handleLinkClick('AppFeatures')}>App Features</HashLink></li>

            <li><HashLink className={`nav-link scrollto ${activeLink === 'Gallery' ? 'active' : ''}`}
            to="#gallery"
            onClick={() => handleLinkClick('Gallery')}>Gallery</HashLink></li>

            <li><HashLink className={`nav-link scrollto ${activeLink === 'Team' ? 'active' : ''}`}
            to="#team"
            onClick={() => handleLinkClick('Team')}>Team</HashLink></li>

            {/* <li><HashLink className=className={`nav-link scrollto ${activeLink === 'Pricing' ? 'active' : ''}`}
            to="#pricing"
            onClick={() => handleLinkClick('Team')}>Pricing</HashLink></li> */}

            {/* <li><HashLink className={`nav-link scrollto ${activeLink === 'FAQ' ? 'active' : ''}`}
            to="#faq"
            onClick={() => handleLinkClick('Team')}>F.A.Q</HashLink></li> */}

            {/* <li className="dropdown"><a href="/"><span>Drop Down</span><FontAwesomeIcon icon={faChevronUp} className='mx-1'/></a>
              <ul>
                <li><a href="/">Drop Down 1</a></li>
                <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <FontAwesomeIcon icon={faChevronRight}/></a>
                  <ul>
                    <li><a href="/">Deep Drop Down 1</a></li>
                    <li><a href="/">Deep Drop Down 2</a></li>
                    <li><a href="/">Deep Drop Down 3</a></li>
                    <li><a href="/">Deep Drop Down 4</a></li>
                    <li><a href="/">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="/">Drop Down 2</a></li>
                <li><a href="/">Drop Down 3</a></li>
                <li><a href="/">Drop Down 4</a></li>
              </ul>
            </li> */}

            <li><HashLink className={`nav-link scrollto ${activeLink === 'Contact' ? 'active' : ''}`}
            to="#contact"
            onClick={() => handleLinkClick('Contact')}>Contact</HashLink></li>

            {/* <li><Link className="getstarted scrollto" to="/features">Get Started</Link></li> */}

          </ul>
          <FontAwesomeIcon icon={mobileMenuOpen ? faX : faBars} className='mobile-nav-toggle' onClick={toggleMobileMenu}/>
            {mobileMenuOpen && <FontAwesomeIcon icon={faX} className='mobile-nav-toggle' style={{color: 'white'}} onClick={toggleMobileMenu}/>}
        </nav>
      </div>
      </header>
    </>
  )
}
