import React from 'react'
import { Link } from 'react-router-dom';

export default function Team() {
    const teamMembers = [
        { name: "Walter White", position: "Chief Executive Officer", imageSrc: "assets/img/team/team-1.jpg" },
        { name: "Sarah Jhonson", position: "Product Manager", imageSrc: "assets/img/team/team-2.jpg" },
        { name: "William Anderson", position: "CTO", imageSrc: "assets/img/team/team-3.jpg" },
        { name: "Amanda Jepson", position: "Accountant", imageSrc: "assets/img/team/team-4.jpg" }
      ];
  return (
    <>
    <section id="team" className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          {/* <h2>Team</h2> */}
          <h2>Our Great Team</h2>
        </div>

        <div className="row" data-aos="fade-left">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="member" data-aos="zoom-in" data-aos-delay={100 + 100 * index}>
                <div className="pic">
                  <img src={member.imageSrc} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <div className="social">
                    <Link to={member.socialtwitter}><i className="bi bi-twitter"></i></Link>
                    <Link to=""><i className="bi bi-facebook"></i></Link>
                    <Link to=""><i className="bi bi-instagram"></i></Link>
                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
