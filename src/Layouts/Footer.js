import React from 'react'
import { BiChevronRight, BiLogoTwitter, BiLogoFacebook, BiLogoLinkedin, BiLogoSkype, BiLogoInstagram,} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   <>
    <footer id="footer">
      {/* <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>WeLearn</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"><BiChevronRight/></i> <Link to="#">Home</Link></li>
                <li><i className="bx bx-chevron-right"><BiChevronRight/></i> <Link to="#">About us</Link></li>
                <li><i className="bx bx-chevron-right"><BiChevronRight/></i> <Link to="#">Services</Link></li>
                <li><i className="bx bx-chevron-right"><BiChevronRight/></i> <Link to="#">Terms of service</Link></li>
                <li><i className="bx bx-chevron-right"><BiChevronRight/></i> <Link to="#">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              <div className="social-links mt-3">
                <Link to="/twitter" className="twitter"><i className="bx bxl-twitter"><BiLogoTwitter/></i></Link>
                <Link to="/facebook" className="facebook"><i className="bx bxl-facebook"><BiLogoFacebook/></i></Link>
                <Link to="/instagram" className="instagram"><i className="bx bxl-instagram"><BiLogoInstagram/></i></Link>
                <Link to="googleplus" className="google-plus"><i className="bx bxl-skype"><BiLogoSkype/></i></Link>
                <Link to="linkedin" className="linkedin"><i className="bx bxl-linkedin"><BiLogoLinkedin/></i></Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container py-4 d-flex justify-content-center">
        <div className="copyright">
          &copy; Copyright <strong><span>WeLearn</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>

    
   </>
  )
}
