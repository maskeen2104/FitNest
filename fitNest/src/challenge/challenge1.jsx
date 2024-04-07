import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import "./challenge1.css";

const PushUps = () => {
  const location = useLocation();
  const [dataAdded, setEntireData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const message = location.state ? location.state.message : null;



  const handleSubmit = () => {
    navigate('/anotherPageChallenge1');
  };

  useEffect(() => {
    const getChallengeRequirements = async () => {
      try {
        const response = await fetch("http://localhost:30049/userlist");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEntireData(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getChallengeRequirements();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const ProgressBar = ({ progress }) => (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }} />
    </div>
  );

  return (
    <div className="container">
      <section className="challenge-info">
        <h1 className="title" style = {{ fontSize: "30px", marginLeft: "-20px"}}>Push up challenge </h1>
        {message && message === "Sorry, you will come back stronger" ? (
            <div className="Message" style={{ color: "red", marginLeft: "40%", marginTop: "90px", fontSize: "20px" }}>
                {message && <p>{message}</p>}
                {console.log(message)}
            </div>
        ) : (
            <div className="Message" style={{ color: "green", marginLeft: "40%", marginTop: "90px" }}>
                {message && <p>{message}</p>}
                {console.log(message)}
            </div>
        )}
        {dataAdded.length > 0 && (
          <p className="description" style = {{ fontSize: "20px"}}>
            Do {dataAdded[0].challenges[0].pushUpsToDo} push-ups every day for 30 days. Track your progress and see
            real-time results with our camera feature.
          </p>
        )}

        <div className="progress-info">
          <div className="progress-details">
            <span className="completed-days" style = {{ fontSize: "20px", marginLeft: "-200px"}}>
              {dataAdded[0].challenges[0].daysCompleted}/30 Days Completed
            </span>
            <span className="progress-percentage" style = {{ fontSize: "20px", marginLeft: "-50%"}}> {dataAdded[0].challenges[0].progress}</span>
          </div>
          <ProgressBar progress={dataAdded[0].challenges[0].progress} />
        </div>
        <button className="start-button" onClick={handleSubmit} style = {{ height: "80px", marginLeft: "450px"}}>Start Challenge</button>
        <button className="not-now-button" style = {{ height: "80px"}}>Not Now</button>
      </section>
    </div>
  );
};

export default PushUps;
