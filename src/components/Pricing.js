import React from 'react'
import { BiCheck, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';


import 'aos/dist/aos.css'; 
import AOS from 'aos';

export default function Pricing() {

  AOS.init();
  
  return (
    <>
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-4 box" data-aos="fade-right">
            <h3>Free</h3>
            <h4>$0<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check"><BiCheck /></i> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check"><BiCheck /></i> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check"><BiCheck /></i> Nulla at volutpat diam uteera</li>
              <li className="na"><i className="bx bx-x"> <BiX/></i> <span>Pharetra massa massa ultricies</span></li>
              <li className="na"><i className="bx bx-x"><BiX/></i> <span>Massa ultricies mi quis hendrerit</span></li>
            </ul>
            <Link to="/" className="get-started-btn">Get Started</Link>
          </div>

          <div className="col-lg-4 box featured" data-aos="fade-up">
            <h3>Business</h3>
            <h4>$29<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check"><BiCheck/></i>  Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check"><BiCheck/></i>  Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check"><BiCheck/></i>  Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check"><BiCheck/></i>  Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check"><BiCheck/></i>  Massa ultricies mi quis hendrerit</li>
            </ul>
            <Link to="/" className="get-started-btn">Get Started</Link>
          </div>

          <div className="col-lg-4 box" data-aos="fade-left">
            <h3>Developer</h3>
            <h4>$49<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check"><BiCheck/></i> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check"><BiCheck/></i> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check"><BiCheck/></i> Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check"><BiCheck/></i> Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check"><BiCheck/></i> Massa ultricies mi quis hendrerit</li>
            </ul>
            <Link to="/" className="get-started-btn">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
