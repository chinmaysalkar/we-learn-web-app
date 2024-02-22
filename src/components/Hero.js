import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import heroimg from '../assets/Images/hero-img.png'

import 'aos/dist/aos.css'; 
import AOS from 'aos';



export default function Hero() {

    useEffect(() => {
        AOS.init({
          delay: 200
        });
      }, []); 

  return (
    <>
        <section id="hero" className="d-flex align-items-center">

        <div className="container">
        <div className="row">
            <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
            <div>
                <h1>We Learn, We Excel</h1>
                <h2>Dive into WeLearn, where each lesson is a steppingstone to
                  greatness. Explore with us, as learning guides the way to
                  success. Your journey to excellence starts here. </h2>
                <Link to="" className="download-btn mb-3"><FontAwesomeIcon icon={faGooglePlay} /> Google Play</Link>
                <Link to="" className="download-btn"><FontAwesomeIcon icon={faApple} /> App Store</Link>
            </div>
            </div>
            <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
            <img src={heroimg} className="img-fluid" alt="" />
            </div>
        </div>
        </div>

        </section>
    </>
  )
}
