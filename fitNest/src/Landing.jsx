import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './Landing.css';


const Header = () => {
  return (
    <Helmet>
      <title>Main</title>
    </Helmet>
  );
};


const Body = ({ navigate }) => {
  return (
    <div className="landing-page-container">
      <section className="content-section">
        <img src="/src/images/hopefully.jpeg" className="feature-image" alt="Main Feature" />
        <div className="intro-text">
          <h1 className="fitnest-heading">FitNest</h1> {/* Class specifically for "FitNest" */}
          <div className="intro-details">
            <p className='para'>SWEAT, EARN AND STYLE !</p>
            <button className="start-journey-button" onClick={() => navigate("/login")}>Start your journey</button>
          </div>
        </div>
      </section>
      <h2 className="h2">Featured Challenges</h2>
      <section className="challenges-section">
        <div className="challenge">
          <button onClick={() => navigate('/login')} className="challenge-button">
            <img src="/src/images/push-up-icon.jpg" alt="Push-up Challenge" className="challenge-image" />
          </button>
          <p className="challenge-title">Push-up Challenge</p>
        </div>
        <div className="challenge">
          <button onClick={() => navigate('/login')} className="challenge-button">
            <img src="/src/images/pull-up-icon.jpg" alt="Pull-up Challenge" className="challenge-image" />
          </button>
          <p className="challenge-title">Pull-up Challenge</p>
        </div>
        <div className="challenge">
          <button onClick={() => navigate('/login')} className="challenge-button">
            <img src="/src/images/sit-up-icon.jpg" alt="Sit-up Challenge" className="challenge-image" />
          </button>
          <p className="challenge-title">Sit-up Challenge</p>
        </div>
      </section>
    </div>
  );
};



const Landing = () => {
  let navigate = useNavigate();
  return (
    <>
      <Header />
      <Body navigate={navigate} />
    </>
  );
};
export default Landing;
