import React from 'react'
import features from '../assets/Images/features.svg'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

import { BiCubeAlt, BiReceipt, BiShield, BiImage, BiAtom, BiCard } from 'react-icons/bi';



export default function AppFeatures() {
  AOS.init();
  
  return (
    <>
    <section id="appfeatures" className="features">
      <div className="container">
        <div className="section-title">
          <h2>App Features</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row no-gutters">
          <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                {/* Feature 1 */}
                <div className="col-md-6 icon-box" data-aos="fade-up">
                  <i className="bx bx-receipt"><BiReceipt /></i>                 
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                {/* Feature 2 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-cube-alt"><BiCubeAlt /></i>                  
                  <h4>Ullamco laboris nisi</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                {/* Feature 3 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-images"> <BiImage /></i>                
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
                {/* Feature 4 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-shield"> <BiShield /></i>                
                  <h4>Beatae veritatis</h4>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
                {/* Feature 5 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-atom"><BiAtom /></i>
                  <h4>Molestiae dolor</h4>
                  <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                </div>
                {/* Feature 6 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-id-card"><BiCard /></i> 
                  <h4>Explicabo consectetur</h4>
                  <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={features}className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>


    </>
  )
}
