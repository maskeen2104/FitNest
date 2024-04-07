import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import './Dashboard.css'




const Dashboard = (props) => {
  const [entireData, setEntireData] = useState([]);
  const navigate = useNavigate();
  const [pushUps, setPushUps] = useState([]);
  const [pullUps, setPullUps] = useState([]);

  
  const handlePush = () => {
    navigate("/challenge1");
};

const handleClickPullUps = () => {
  navigate("/challenge2");
};

  useEffect(() => {
  const getTheData = async() => {
          const response = await fetch("http://localhost:30049/userlist");
          if (!response.ok) {
            throw new error(`Http error:${response.status}`)
          } 
          const data = await response.json()
          const filteredData = data.filter(item => item.challenges[0].name === "pushUps");
          const filteredData2 = data.filter(item => item.challenges[0].name === "pullUps");
          console.log(data);
          setPushUps(filteredData);
          setPullUps(filteredData2);
          setEntireData(data);
          console.log(filteredData);
          console.log(filteredData2);
        }
        getTheData()
  }, [])
  return (
      <div className="galileodesign-container">
        <Helmet>
          <title>exported project</title>
        </Helmet>
        { entireData.length > 0 && (
        <div className="galileodesign-galileodesign">
          <div className="galileodesign-depth0-frame0">
            <div className="galileodesign-depth1-frame0">
              <div className="galileodesign-depth2-frame0">
                <div className="galileodesign-depth3-frame0">
                  <div className="galileodesign-depth4-frame0">
                    <div className="galileodesign-depth5-frame0">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3798a9d0b87570754db1150e552bd05cfe9bd70eadfc7764a0f07862ac781ae?apiKey=6dc1b1172a21495ea8a406717dc53c8f&"
                    alt="Depth6Frame06252"
                    className="galileodesign-depth6-frame0"/>
                    </div>
                    <div className="galileodesign-depth5-frame1">
                      <div className="galileodesign-depth6-frame001">
                        <span className="galileodesign-text">
                          <span>FitNest</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="galileodesign-depth3-frame1">
                  <div className="galileodesign-depth4-frame01">
                    <button className="galileodesign-homebutton"onClick={()=> navigate("/dashboard")}>
                      <div className="galileodesign-depth6-frame002">
                        <span className="galileodesign-text02">
                          <span >Home</span>
                        </span>
                      </div>
                    </button>
                    <button className="galileodesign-pointbutton" onClick={()=> navigate("/explore")}>
                      <div className="galileodesign-depth6-frame003">
                        <span className="galileodesign-text04">
                          <span>Explore</span>
                        </span>
                      </div>
                    </button>
                    <button className="galileodesign-pointbutton">
                      <div className="galileodesign-depth6-frame003">
                        <img src="/src/images/coin.png" alt="Coin" className="coin-icon" />
                        <span className="galileodesign-text04">
                          <span>Points</span>
                        </span>
                      </div>
                    </button>
                    <img src="/src/images/pf.jpeg" alt="Profile" className="profile-img" />
                  </div>
                  <div className="galileodesign-depth4-frame2"></div>
                </div>
              </div>
              <div className="galileodesign-depth2-frame1">
                <div className="galileodesign-depth3-frame01">
                  <div className="galileodesign-title">
                    <div className="galileodesign-depth5-frame002">
                      <div className="galileodesign-depth6-frame005">
                        <div className="galileodesign-depth7-frame0">
                          <span className="galileodesign-text08">
                            <span>Challenges</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="galileodesign-subheading1">
                      <div className="galileodesign-depth6-frame006">
                        <span className="galileodesign-text10">
                        In Progress
                        </span>
                      </div>
                  </div>
                  <button className="galileodesign-depth4-frame21" onClick = {handlePush}>
                    <div className="galileodesign-depth5-frame004">
                      <div className="galileodesign-depth6-frame007"></div>
                      <div className="galileodesign-depth6-frame2">
                        <div className="galileodesign-depth7-frame001">
                          <div className="galileodesign-depth8-frame0">
                            <span className="galileodesign-text12">
                              <span>Do {pushUps[0].challenges[0].pushUpsToDo} push ups today</span>
                            </span>
                          </div>
                        </div>
                        <div className="galileodesign-depth7-frame1">
                          <div className="galileodesign-depth8-frame001">
                            <span className="galileodesign-text14">
                              <span>{pushUps[0].challenges[0].daysCompleted} / {pushUps[0].challenges[0].pushUpsToDo}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="galileodesign-depth5-frame12">
                      <div className="galileodesign-depth6-frame008">
                        <div className="galileodesign-depth7-frame002">
                          <img
                            src= {"/src/images/push-up-icon.jpg"}
                            alt="Depth8Frame06258"
                            className="galileodesign-img-format"></img>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="galileodesign-depth4-frame4" onClick = {handleClickPullUps}>
                    <div className="galileodesign-depth5-frame006">
                      <div className="galileodesign-depth6-frame010"></div>
                      <div className="galileodesign-depth6-frame21">
                        <div className="galileodesign-depth7-frame003">
                          <div className="galileodesign-depth8-frame003">
                            <span className="galileodesign-text16">
                              <span>
                                Do {pullUps[0].challenges[0].pushUpsToDo} pull ups today
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="galileodesign-depth7-frame11">
                          <div className="galileodesign-depth8-frame004">
                            <span className="galileodesign-text18">
                              <span> {pullUps[0].challenges[0].daysCompleted} / {pullUps[0].challenges[0].pushUpsToDo} </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="galileodesign-depth5-frame13">
                      <div className="galileodesign-depth6-frame011">
                        <div className="galileodesign-depth7-frame004">
                          <img
                            src={"/src/images/pull-up-icon.jpg"}
                            alt="Depth8Frame06260"
                            className="galileodesign-img-format"
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div className="galileodesign-depth4-frame6">
                    <div className="galileodesign-depth5-frame008">
                      <div className="galileodesign-depth6-frame013">
                        <span className="galileodesign-text20">
                          <span>Completed</span>
                          
                        </span>
                      </div>
                    </div>
                    
                  </div>
                  <button className="galileodesign-depth4-frame7">
                    <div className="galileodesign-depth5-frame009">
                      <div className="galileodesign-depth6-frame014"></div>
                      <div className="galileodesign-depth6-frame22">
                        <div className="galileodesign-depth7-frame005">
                          <div className="galileodesign-depth8-frame006">
                            <span className="galileodesign-text22">
                              <span>Do 5 sit ups today</span>
                            </span>
                          </div>
                        </div>
                        <div className="galileodesign-depth7-frame12">
                          <div className="galileodesign-depth8-frame007">
                            <span className="galileodesign-text24">
                              <span>3/5</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="galileodesign-depth5-frame14">
                      <div className="galileodesign-depth6-frame015">
                        <div className="galileodesign-depth7-frame006">
                          <img
                            src= {"/src/images/sit-up-icon.jpg"}
                            alt="Depth8Frame06263"
                            className="galileodesign-img-format"
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>

  )
}

export default Dashboard