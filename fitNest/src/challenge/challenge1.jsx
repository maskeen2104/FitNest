import React, { useState, useEffect } from "react";
import "./challenge1.css"
const PushUps = () => {
    const [dataAdded, setEntireData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                setError(error.message);
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
        return <div>Error fetching data: {error}</div>;
    }

    const ProgressBar = ({ progress }) => (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
    );
    
    const Button = ({ children, className }) => (
      <button className={`button ${className}`}>{children}</button>
    );
        
      return (
        <main className="container">
          <section className="challenge-info">
            <h1 className="title">Push up challenge</h1>
            
            {dataAdded.length > 0 && (
              <p className="description">
              Do {dataAdded[0].challenges[0].pushUpsToDo} push-ups every day for 30 days. Track your progress and see
              real-time results with our camera feature.
              </p>
            )}

            <div className="progress-info">
              <div className="progress-details">
                <span className="completed-days">
                  1/30 Days Completed
                </span>
                <span className="progress-percentage">{dataAdded[0].challenges[0].progress}%</span>
              </div>
              <ProgressBar progress={dataAdded[0].challenges[0].progress} />
            </div>
            <Button className="start-button">Start Challenge</Button>
            <Button className="not-now-button">Not Now</Button>
          </section>
        </main>
      );
    }

export default PushUps;
