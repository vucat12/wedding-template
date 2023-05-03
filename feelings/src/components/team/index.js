import React from "react";
import { Link } from 'react-router-dom'
import Teams from '../../api/team'
import SectionTitle from '../../components/SectionTitle'




const TeamSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className={`wpo-team-section section-padding ${props.pt}`}>
      <div className="container">
        <SectionTitle topTitle={'Our Team'} MainTitle={'Meet Our Planners'} />
        <div className="wpo-team-wrap">
          <div className="row">
            {Teams.slice(0, 6).map((Team, tm) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={tm}>
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={Team.tImg} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3><Link onClick={ClickHandler} to={`/team-single/${Team.id}`}>{Team.name}</Link></h3>
                      <span>{Team.title}</span>
                      <ul>
                        <li><Link onClick={ClickHandler} to="/"> <i className="ti-facebook"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="/"> <i className="ti-twitter-alt"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="/"> <i className="ti-linkedin"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="/"> <i className="ti-instagram"></i></Link></li>
                      </ul>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection;