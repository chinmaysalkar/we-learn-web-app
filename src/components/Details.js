import React from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

import details1 from '../assets/Images/details-1.png'
import details2 from '../assets/Images/details-2.png'
import details3 from '../assets/Images/details-3.png'
import details4 from '../assets/Images/details-4.png'

import { BiCheck } from 'react-icons/bi';


export default function Details() {
    AOS.init();

  return (
    <>
    <section id="details" className="details">
      <div className="container">

        {/* First Content Row */}
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={details1} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>Take Notes During Video Playback.</h3>
           
            <ul>
              <li><i className="bi bi-check"><BiCheck /></i> Take notes seamlessly while watching educational videos.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Enhance understanding by noting down key points and concepts.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Facilitates active learning and engagement during lessons.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Enables students to review and reinforce learning at their own pace.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Promotes effective study habits and retention of information.</li>


            </ul>
            
          </div>
        </div>

        {/* Second Content Row */}
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src={details2} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Discussion Forum</h3>
             <ul>
              <li><i className="bi bi-check"><BiCheck /></i> Stay connected with teachers and peers within the learning environment.</li>         
              <li><i className="bi bi-check"><BiCheck /></i> Facilitates peer-to-peer learning and support.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Access to teachers for quick communication and doubt resolution. </li>      
              <li><i className="bi bi-check"><BiCheck /></i> Provides a sense of classroom and engagement among students.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Enhances the overall learning experience by fostering communication.</li>
            </ul>
          </div>
        </div>

        {/* Third Content Row */}
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={details3} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5" data-aos="fade-up">
            <h3>Multiple Tests & Test Result Analysis</h3>
            
            <ul>
              {/* Multiple Tests Points */}
              <li><i className="bi bi-check"><BiCheck /></i>  Access a variety of assessment formats, including quizzes, exams, and assignments.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Test comprehension, knowledge retention, and critical thinking skills.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Provides opportunities for self-assessment and progress tracking.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Offers a comprehensive evaluation of students' understanding and proficiency.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Promotes a well-rounded approach to learning and assessment.</li>

              {/* Test Result Analysis  points */}
              <li><i className="bi bi-check"><BiCheck /></i>  Receive detailed insights into test performance and areas of strength and improvement.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Identify weak areas and target them for further review and practice.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Track progress over time and monitor academic growth.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Provides actionable feedback to students for continuous improvement.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Facilitates data-driven decision-making for educators and students alike.</li>


            </ul>
          </div>
        </div>

        {/* Fourth Content Row */}
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src={details4} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Study Reminders  &  In-App Video Downloads</h3>
            <ul>
              {/* Study Reminders Points  */}
              <li><i className="bi bi-check"><BiCheck /></i> Plan and organize study sessions, assignments, and assessments.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Set personalized study goals and deadlines to stay on track.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Helps students manage their time effectively and prioritize tasks.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Allows for better time management and workload distribution.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Promotes accountability and discipline in academic pursuits.</li>

              {/* In-App Video Downloads  Points*/}
              <li><i className="bi bi-check"><BiCheck /></i> Download educational videos for offline viewing anytime, anywhere.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Overcome limitations of internet connectivity and access learning materials offline.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Enables flexibility in learning, especially in areas with limited internet access. </li>
              <li><i className="bi bi-check"><BiCheck /></i> Ensures uninterrupted learning experience, even in remote or offline environments. </li>
              <li><i className="bi bi-check"><BiCheck /></i> Enhances accessibility and convenience for students with varying learning needs. </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
