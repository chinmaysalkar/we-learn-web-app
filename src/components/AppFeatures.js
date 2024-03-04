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
        <div className="section-title mt-3">
          <h2>App Features</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row no-gutters">
          <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                {/* Feature 1 */}
                <div className="col-md-6 icon-box" data-aos="fade-up">
                  <i className="bx bx-receipt"><BiReceipt /></i>                 
                  <h4>Take Notes in between Lectures</h4>
                  <p>Seamlessly note down important points or ideas without interrupting
                  your video playback by simply clicking on the "Take Notes" button,
                  ensuring uninterrupted learning & content consumption.</p>
                </div>
                {/* Feature 2 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-cube-alt"><BiCubeAlt /></i>                  
                  <h4>Discussion Forum</h4>
                  <p>Stay connected with teachers through instant messaging within the
                  app, facilitating quick communication, doubt solving and collaboration.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-images"> <BiImage /></i>                
                  <h4>Multiple Tests</h4>
                  <p>Access a wide variety of tests covering different topics & skill levels,
                  providing students with ample opportunities to apply the learned
                  concepts, test their knowledge and progress effectively.</p>
                </div>
                {/* Feature 4 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-shield"> <BiShield /></i>                
                  <h4>Study Reminders</h4>
                  <p>Plan and organize your learning sessions efficiently by scheduling study
                    times, setting goals, and receiving reminders, empowering students to
                    stay on track and maximize productivity.</p>
                </div>
                {/* Feature 5 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-atom"><BiAtom /></i>
                  <h4>In-App Video Downloads</h4>
                  <p>Easily save your favorite videos for offline viewing directly within the
                    app, ensuring access to content even without an internet connection,
                    perfect for on-the-go learning.
                    </p>
                </div>
                {/* Feature 6 */}
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-id-card"><BiCard /></i> 
                  <h4>Test Result Analysis</h4>
                  <p>Receive comprehensive insights into your test performance, including
                    strengths, weaknesses, and areas for improvement, empowering
                    students to make informed study decisions and track progress
                    effectively.</p>
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
