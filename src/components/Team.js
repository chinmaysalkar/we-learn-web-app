import React from 'react'
import { Link } from 'react-router-dom';
import { BiLogoTwitter, BiLogoFacebook, BiLogoLinkedin, BiLogoSkype, BiLogoInstagram,} from 'react-icons/bi';
import team1 from '../assets/Images/team/team-1.jpg'
import team2 from '../assets/Images/team/team-2.jpg'
import team3 from '../assets/Images/team/team-3.jpg'
import team4 from '../assets/Images/team/team-4.jpg'


export default function Team() {
    const teamMembers = [
        { name: "Walter White", position: "Chief Executive Officer", imageSrc: team1, twitter:" ", facebook:" ", instagram:" ",linkedin:" " },
        { name: "Sarah Jhonson", position: "Product Manager", imageSrc: team2, twitter:" ", facebook:" ", instagram:" ",linkedin:" " },
        { name: "William Anderson", position: "CTO", imageSrc: team3, twitter:" ", facebook:" ", instagram:" ",linkedin:" " },
        { name: "Amanda Jepson", position: "Accountant", imageSrc: team4, twitter:" ", facebook:" ", instagram:" ",linkedin:" " }
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
            <div className="col-lg-3 col-md-6 mb-2" key={index}>
              <div className="member" data-aos="zoom-in" data-aos-delay={100 + 100 * index}>
                <div className="pic">
                  <img src={member.imageSrc} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <div className="social">
                    <Link to={member.twitter}><i className="bi bi-twitter"><BiLogoTwitter/></i></Link>
                    <Link to={member.facebook}><i className="bi bi-facebook"><BiLogoFacebook/></i></Link>
                    <Link to={member.instagram}><i className="bi bi-instagram"><BiLogoInstagram/></i></Link>
                    <Link to={member.linkedin}><i className="bi bi-linkedin"><BiLogoLinkedin/></i></Link>
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
