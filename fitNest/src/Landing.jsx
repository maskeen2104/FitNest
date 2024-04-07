// import React from 'react'

// import { Helmet } from 'react-helmet'
// import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';


// import './Landing.css'

// const Landing = (props) => {
//   let navigate = useNavigate();
//   return (
//     <div className="landing-page-container">
//       <Helmet>
//         <title>main</title>
//       </Helmet>
//       <div className="landing-page-landing-page">
//         <div className="landing-page-depth0-frame0">
//           <div className="landing-page-depth1-frame0">
//             <div className="landing-page-depth2-frame0">
//               <div className="landing-page-depth3-frame0">
//                 <div className="landing-page-depth4-frame0">
//                   <div className="landing-page-depth5-frame0">
//                     <img
//                       src="\src\images\vector-0.svg"
//                       alt="Depth6Frame0110"
//                       className="landing-page-depth6-frame0"
//                     />
//                   </div>
//                   <div className="landing-page-depth5-frame1">
//                     <div className="landing-page-depth6-frame001">
//                       <span className="landing-page-text">
//                         <span>FitNest</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="landing-page-depth2-frame1">
//               <div className="landing-page-depth3-frame01">
//                 <div className="landing-page-depth4-frame02">
//                   <div className="landing-page-depth5-frame03">
//                     <div className="landing-page-depth6-frame008">
//                     <img src = "/src/images/gym.jpg" className="idk"></img>
//                       <div className="landing-page-depth7-frame002">
//                         <div className="landing-page-depth8-frame0">
//                           <div className="landing-page-depth9-frame0">
//                             <div className="landing-page-depth10-frame0">
//                               <div className="landing-page-depth11-frame0">
//                                 <span className="landing-page-text10">
//                                   <span>Discover the benefits of Vitality</span>
//                                 </span>
//                               </div>
//                             </div>
//                             <div className="landing-page-depth10-frame1">
//                               <div className="landing-page-depth11-frame01">
//                                 <span className="landing-page-text12">
//                                   <span>
//                                     Unlock your potential with a personalized
//                                     wellness journey. Get started with a
//                                     challenge or explore the app to find what
//                                     works best for you.
//                                   </span>
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="landing-page-depth8-frame1">
//                           <button className="landing-page-start-journey-button" onClick={() => navigate("/login")}>
//                             <div className="landing-page-depth10-frame01">
//                               <div className="landing-page-depth11-frame02">
//                                 <span className="landing-page-text14">
//                                   <span>Start your journey</span>
//                                 </span>
//                               </div>
//                             </div>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="landing-page-depth4-frame11">
//                   <div className="landing-page-depth5-frame04">
//                     <div className="landing-page-depth6-frame009">
//                       <span className="landing-page-text16">
//                         <span>Featured Challenges</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="landing-page-depth4-frame21">
//                   <div className="landing-page-depth5-frame05">
//                     <div className="landing-page-depth6-frame010">
//                     <img src = "\src\images\meditation.png"></img>
//                       <div className="landing-page-depth7-frame003"></div>
//                     </div>
//                     <div className="landing-page-depth6-frame1">
//                       <div className="landing-page-depth7-frame004">
//                         <span className="landing-page-text18">
//                           <span>Meditation Challenge</span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="landing-page-depth5-frame13">
//                     <div className="landing-page-depth6-frame011">
//                     <img src = "\src\images\yoga.png"></img>
//                       <div className="landing-page-depth7-frame005"></div>
//                     </div>
//                     <div className="landing-page-depth6-frame11">
//                       <div className="landing-page-depth7-frame006">
//                         <span className="landing-page-text20">
//                           <span>Yoga Challenge</span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="landing-page-depth5-frame21">
//                     <div className="landing-page-depth6-frame012">
//                     <img src = "\src\images\sleep.png"></img>
//                       <div className="landing-page-depth7-frame007"></div>
//                     </div>
//                     <div className="landing-page-depth6-frame12">
//                       <div className="landing-page-depth7-frame008">
//                         <span className="landing-page-text22">
//                           <span>Sleep Challenge</span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="landing-page-depth5-frame31">
//                     <div className="landing-page-depth6-frame013">
//                     <img src = "\src\images\gratitude.png"></img>
//                       <div className="landing-page-depth7-frame009"></div>
//                     </div>
//                     <div className="landing-page-depth6-frame13">
//                       <div className="landing-page-depth7-frame010">
//                         <span className="landing-page-text24">
//                           <span>Gratitude Challenge</span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="landing-page-depth5-frame5">
//                     <div className="landing-page-depth6-frame014">
//                     <img src = "\src\images\walking.png"></img>
//                       <div className="landing-page-depth7-frame011"></div>
//                     </div>
//                     <span className="landing-page-text26">
//                       <span>Walking Challenge</span>
//                     </span>
//                     <div className="landing-page-depth6-frame14">
//                       <div className="landing-page-depth7-frame012">
//                       </div>
//                     </div>
//                   </div>
//                   <div className="landing-page-depth5-frame6">
//                     <div className="landing-page-depth6-frame15">
//                       <div className="landing-page-depth7-frame013"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




// export default Landing

// 


import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

// Body Component
const Body = ({ navigate }) => {
  return (
    <div className="landing-page-container">
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
                    <div className="galileodesign-depth3-frame1">
                  <div className="galileodesign-depth4-frame01">
                    <button className="galileodesign-homebutton"onClick={()=> navigate("/dashboard")}>
                      <div className="galileodesign-depth6-frame002">
                        <span className="galileodesign-text02">
                          <span >Home</span>
                        </span>
                      </div>
                    </button>
                    <button className="galileodesign-pointbutton">
                      <div className="galileodesign-depth6-frame003">
                        <span className="galileodesign-text04">
                          <span>Points</span>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="galileodesign-depth4-frame2"></div>
                </div>
                  </div>
          </div>
        </div>
        <hr />

    
      <Helmet>
        <title>Main</title>
      </Helmet>
      
      <div className="content-section">
        <div className="image-overlay">
          <img src="/src/images/mainImage.jpg" alt="Gym" className="feature-image" style = {{ marginLeft : "-100px"}}></img>
          <div className="overlay-text" style = {{ marginLeft : "-20px"}}>
            <h1>FitNest</h1>
            <p>Unlock your potential with a personalized wellness journey. Get started with a challenge or explore the app to find what works best for you.</p>
            <button className="start-journey-button" onClick={() => navigate("/login")}>Start your journey</button>
          </div>
        </div>
      </div>
      
      {/* Challenges Section omitted for brevity */}
    </div>

  );
};

// Main Landing Component
const Landing = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <Body navigate={navigate} />
    </div>
  );
};

export default Landing;
