// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import * as React from "react";
// import './App.css'

// const challenges = [
//   {
//     id: 1,
//     title: "Meditation Challenge",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/85bd73fa56896ddf5334617ceb37002a351db7a36228713b8d0a3860a2ef5d9c?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
//   },
//   {
//     id: 2,
//     title: "Yoga Challenge",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/458f7e1c909a9d30b025b2bc227a9abc828ba0c22112c9942faf5e3d7435b69d?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
//   },
//   {
//     id: 3,
//     title: "Sleep Challenge",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cd704b9442d24bad6b92aeceef4a1cc53bf69f8e8ebbcd9a3b5ee9125cab452?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
//   },
//   {
//     id: 4,
//     title: "Gratitude Challenge",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/842467d7999f2740c7242ecadce05c84fa9e73a4dfa559f80ca180ee63f7d5ca?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
//   },
//   {
//     id: 5,
//     title: "Mindfulness Challenge",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8143367f76678281c255c3d792933f052af32bf0ef69992796892bae5b392708?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
//   },
//   {
//     id: 6,
//     title: "Body Scan Challenge",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46925e5ce1571d04e84eeedd03c5afaaa6a7a99b4a6b191519defa43c9efd79?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
//   },
//   {
//     id: 7,
//     title: "Walking Challenge",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/adb824f4e1db7cd923ad3ad5e1cf9ae82ceffee68c8d928a1c9ab0b52915b82b?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
//   },
// ];

// const ChallengeCard = ({ title, image }) => (
//   <div className="challenge-card">
//     <img src={image} alt={title} className="challenge-image" />
//     <div className="challenge-title">{title}</div>
//   </div>
// );

// const Header = () => (
//   <header className="header">
//     <div className="logo">
//       <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa1ec83fdac5933ea96a929298e9e0bd9006e96f566e1bcb10702f10368a170?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="FitNest Logo" className="logo-image" />
//       <div className="logo-text">FitNest</div>
//     </div>
//     <nav className="navigation">
//       <div className="nav-item">Explore</div>
//       <div className="nav-item">Challenges</div>
//       <div className="nav-item">Feed</div>
//       <div className="nav-item">TBD</div>
//     </nav>
//     <div className="user-actions">
//       <div className="user-icon">
//         <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/937f7392e09497d9a402696add4e51d28e422cdc0986410abbf5b5001d045f90?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="User Icon" className="user-icon-image" />
//       </div>
//       <div className="notification-icon">
//         <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f10782b393c964ec92f82aa9dbed35db5cc46523bbd1cf8c7b26ed564b8720e?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="Notification Icon" className="notification-icon-image" />
//       </div>
//       <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07664fd767e5ea0d3566eea6971d4479183169a1bb05ab358c86d74aedd83e27?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="User Avatar" className="user-avatar" />
//     </div>
//   </header>
// );

// const Hero = () => (
//   <section className="hero">
//     <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aece9f331c078a9ad5178da18b944320058387abd6ef34d54e98c599b4777dda?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="Hero Background" className="hero-background" />
//     <div className="hero-content">
//       <h1 className="hero-title">Discover the benefits of Vitality</h1>
//       <p className="hero-description">
//         Unlock your potential with a personalized wellness journey. Get started with a challenge or explore the app to
//         find what works best for you.
//       </p>
//       <div className="hero-cta">
//         <div className="cta-text">Start your journey</div>
//       </div>
//     </div>
//   </section>
// );

// function Landing() {
//   return (
//     <>
//       <div className="app">
//         <div className="app-container">
//           <div className="app-content">
//             <Header />
//             <Hero />
//             <div className="featured-challenges">
//               <h2 className="section-title">Featured Challenges</h2>
//             </div>
//             <div className="challenge-list">
//               <div className="challenge-row">
//                 {challenges.slice(0, 5).map((challenge) => (
//                   <ChallengeCard key={challenge.id} title={challenge.title} image={challenge.image} />
//                 ))}
//               </div>
//               <div className="challenge-row">
//                 {challenges.slice(5).map((challenge) => (
//                   <ChallengeCard key={challenge.id} title={challenge.title} image={challenge.image} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import './App.css'

// export const Landing = () => {
//   return (
//     <div className="depth-frame">
//       <div className="div">
//         <div className="depth-frame-wrapper">
//           <div className="div-wrapper">
//             <div className="depth-frame-wrapper-2">
//               <div className="div-2">
//                 <div className="depth-frame-wrapper-3">
//                   <div className="div-3">
//                     <div className="depth-frame-wrapper-4">
//                       <div className="div-wrapper-2">
//                         <p className="text-wrapper">Discover the benefits of Vitality</p>
//                       </div>
//                     </div>
//                     <div className="depth-frame-wrapper-5">
//                       <div className="div-wrapper-2">
//                         <p className="p">
//                           Unlock your potential with a personalized wellness journey. Get started with a challenge or
//                           explore the app to find what works best for you.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="start-journey-button-wrapper">
//                   <div className="start-journey-button">
//                     <div className="depth-frame-wrapper-6">
//                       <div className="div-wrapper-2">
//                         <div className="text-wrapper-2">Start your journey</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="depth-frame-wrapper-7">
//           <div className="depth-frame-wrapper-8">
//             <div className="div-wrapper-3">
//               <div className="text-wrapper-3">Featured Challenges</div>
//             </div>
//           </div>
//         </div>
//         <div className="div-4">
//           <div className="div-5">
//             <div className="depth-frame-wrapper-9">
//               <div className="div-6" />
//             </div>
//             <div className="depth-frame-wrapper-10">
//               <div className="div-wrapper-4">
//                 <div className="text-wrapper-4">Meditation Challenge</div>
//               </div>
//             </div>
//           </div>
//           <div className="div-7">
//             <div className="depth-frame-wrapper-9">
//               <div className="div-8" />
//             </div>
//             <div className="depth-frame-wrapper-10">
//               <div className="div-wrapper-4">
//                 <div className="text-wrapper-4">Yoga Challenge</div>
//               </div>
//             </div>
//           </div>
//           <div className="div-9">
//             <div className="depth-frame-wrapper-9">
//               <div className="div-10" />
//             </div>
//             <div className="depth-frame-wrapper-10">
//               <div className="div-wrapper-4">
//                 <div className="text-wrapper-4">Sleep Challenge</div>
//               </div>
//             </div>
//           </div>
//           <div className="div-11">
//             <div className="depth-frame-wrapper-9">
//               <div className="div-12" />
//             </div>
//             <div className="depth-frame-wrapper-10">
//               <div className="div-wrapper-4">
//                 <div className="text-wrapper-5">Gratitude Challenge</div>
//               </div>
//             </div>
//           </div>
//           <div className="div-13">
//             <div className="depth-frame-wrapper-9">
//               <div className="div-14" />
//             </div>
//             <div className="depth-frame-wrapper-11">
//               <div className="div-wrapper-5">
//                 <div className="text-wrapper-6">Mindfulness Challenge</div>
//               </div>
//             </div>
//           </div>
//           <div className="div-15">
//             <div className="depth-frame-wrapper-9">
//               <div className="div-16" />
//             </div>
//             <div className="depth-frame-wrapper-10">
//               <div className="div-wrapper-4">
//                 <div className="text-wrapper-6">Body Scan Challenge</div>
//               </div>
//             </div>
//           </div>
//           <div className="div-17">
//             <div className="depth-frame-wrapper-9">
//               <div className="div-18" />
//             </div>
//             <div className="depth-frame-wrapper-10">
//               <div className="div-wrapper-4">
//                 <div className="text-wrapper-5">Walking Challenge</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import "./App.css";

// export const Landing = () => {
//     return (
//         <div className="landing-page">
//             <div className="depth-frame">
//                 <div className="div">
//                     <div className="depth-frame-2">
//                         <div className="depth-frame-wrapper">
//                             <div className="depth-frame-3">
//                                 <div className="div-wrapper">
//                                     <div className="overlap-group-wrapper">
//                                         <div className="overlap-group">
//                                             <img className="vector" alt="Vector" src="\src\images\vector-0.svg" />
//                                             <img className="img" alt="Vector" src="\src\images\vector-1.svg" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-4">
//                                     <div className="depth-frame-5">
//                                         <img className="fit-nest" alt="Fit nest" src="\src\images\fit-nest.png" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="depth-frame-6">
//                             <div className="depth-frame-7">
//                                 <div className="depth-frame-8">
//                                     <div className="depth-frame-9">
//                                         <div className="text-wrapper">Explore</div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-10">
//                                     <div className="depth-frame-9">
//                                         <div className="text-wrapper-2">Challenges</div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-11">
//                                     <div className="depth-frame-9">
//                                         <div className="text-wrapper-3">Feed</div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-12">
//                                     <div className="depth-frame-9">
//                                         <div className="text-wrapper">TBD</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="depth-frame-13">
//                                 <div className="depth-frame-14">
//                                     <div className="depth-frame-15">
//                                         <div className="vector-wrapper">
//                                             <img className="vector-2" alt="Vector" src="\src\images\image.svg" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-14">
//                                     <div className="depth-frame-15">
//                                         <div className="vector-wrapper">
//                                             <img className="vector-3" alt="Vector" src="\src\images\bell.svg" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="depth-frame-16" />
//                         </div>
//                     </div>
//                     <div className="depth-frame-17">
//                         <div className="depth-frame-18">
//                             <div className="depth-frame-19">
//                                 <div className="depth-frame-20">
//                                     <div className="img-wrapper">
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="depth-frame-22">
//                                 <div className="depth-frame-23">
//                                     <div className="depth-frame-5">
//                                         <div className="text-wrapper-4">Featured Challenges</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="depth-frame-24">
//                                 <div className="depth-frame-25">
//                                     <div className="depth-frame-26">
//                                         <div className="depth-frame-27" />
//                                     </div>
//                                     <div className="depth-frame-28">
//                                         <div className="depth-frame-29">
//                                             <div className="text-wrapper-5">Meditation Challenge</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-30">
//                                     <div className="depth-frame-26">
//                                         <div className="depth-frame-31" />
//                                     </div>
//                                     <div className="depth-frame-28">
//                                         <div className="depth-frame-29">
//                                             <div className="text-wrapper-5">Yoga Challenge</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-32">
//                                     <div className="depth-frame-26">
//                                         <div className="depth-frame-33" />
//                                     </div>
//                                     <div className="depth-frame-28">
//                                         <div className="depth-frame-29">
//                                             <div className="text-wrapper-5">Sleep Challenge</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-34">
//                                     <div className="depth-frame-26">
//                                         <div className="depth-frame-35" />
//                                     </div>
//                                     <div className="depth-frame-28">
//                                         <div className="depth-frame-29">
//                                             <div className="text-wrapper-6">Gratitude Challenge</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-36">
//                                     <div className="depth-frame-37">
//                                         <div className="depth-frame-38">
//                                             <div className="depth-frame-39">
//                                                 <div className="depth-frame-26">
//                                                     <div className="depth-frame-40" />
//                                                 </div>
//                                                 <div className="depth-frame-28">
//                                                     <div className="depth-frame-29">
//                                                         <div className="text-wrapper-6">Walking Challenge</div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="depth-frame-41">
//                                     <div className="depth-frame-42" />
//                                     <div className="depth-frame-28">
//                                         <div className="depth-frame-29">
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

import React from 'react'

import { Helmet } from 'react-helmet'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';


import './Landing.css'

const Landing = (props) => {
  let navigate = useNavigate();
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>main</title>
      </Helmet>
      <div className="landing-page-landing-page">
        <div className="landing-page-depth0-frame0">
          <div className="landing-page-depth1-frame0">
            <div className="landing-page-depth2-frame0">
              <div className="landing-page-depth3-frame0">
                <div className="landing-page-depth4-frame0">
                  <div className="landing-page-depth5-frame0">
                    <img
                      src="\src\images\vector-0.svg"
                      alt="Depth6Frame0110"
                      className="landing-page-depth6-frame0"
                    />
                  </div>
                  <div className="landing-page-depth5-frame1">
                    <div className="landing-page-depth6-frame001">
                      <span className="landing-page-text">
                        <span>FitNest</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landing-page-depth3-frame1">
                <div className="landing-page-depth4-frame01">
                  <div className="landing-page-depth5-frame01">
                    <div className="landing-page-depth6-frame002">
                      <span className="landing-page-text02">
                        <span>Explore</span>
                      </span>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame11">
                    <div className="landing-page-depth6-frame003">
                      <span className="landing-page-text04">
                        <span>Challenges</span>
                      </span>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame2">
                    <div className="landing-page-depth6-frame004">
                      <span className="landing-page-text06">
                        <span>Feed</span>
                      </span>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame3">
                    <div className="landing-page-depth6-frame005">
                      <span className="landing-page-text08">
                        <span>TBD</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="landing-page-depth4-frame1">
                  <div className="landing-page-depth5-frame02">
                    <div className="landing-page-depth6-frame006">
                      <img
                        src="/src/images/image.svg"
                        alt="Depth7Frame0135"
                        className="landing-page-depth7-frame0"
                      />
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame12">
                    <div className="landing-page-depth6-frame007">
                      <img
                        src="/src/images/bell.svg"
                        alt="Depth7Frame0140"
                        className="landing-page-depth7-frame001"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="landing-page-depth4-frame2"></div>
              </div>
            </div>
            <div className="landing-page-depth2-frame1">
              <div className="landing-page-depth3-frame01">
                <div className="landing-page-depth4-frame02">
                  <div className="landing-page-depth5-frame03">
                    <div className="landing-page-depth6-frame008">
                    <img src = "/src/images/gym.jpg" className="idk"></img>
                      <div className="landing-page-depth7-frame002">
                        <div className="landing-page-depth8-frame0">
                          <div className="landing-page-depth9-frame0">
                            <div className="landing-page-depth10-frame0">
                              <div className="landing-page-depth11-frame0">
                                <span className="landing-page-text10">
                                  <span>Discover the benefits of Vitality</span>
                                </span>
                              </div>
                            </div>
                            <div className="landing-page-depth10-frame1">
                              <div className="landing-page-depth11-frame01">
                                <span className="landing-page-text12">
                                  <span>
                                    Unlock your potential with a personalized
                                    wellness journey. Get started with a
                                    challenge or explore the app to find what
                                    works best for you.
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="landing-page-depth8-frame1">
                          <button className="landing-page-start-journey-button" onClick={() => navigate("/login")}>
                            <div className="landing-page-depth10-frame01">
                              <div className="landing-page-depth11-frame02">
                                <span className="landing-page-text14">
                                  <span>Start your journey</span>
                                </span>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-page-depth4-frame11">
                  <div className="landing-page-depth5-frame04">
                    <div className="landing-page-depth6-frame009">
                      <span className="landing-page-text16">
                        <span>Featured Challenges</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="landing-page-depth4-frame21">
                  <div className="landing-page-depth5-frame05">
                    <div className="landing-page-depth6-frame010">
                    <img src = "\src\images\meditation.png"></img>
                      <div className="landing-page-depth7-frame003"></div>
                    </div>
                    <div className="landing-page-depth6-frame1">
                      <div className="landing-page-depth7-frame004">
                        <span className="landing-page-text18">
                          <span>Meditation Challenge</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame13">
                    <div className="landing-page-depth6-frame011">
                    <img src = "\src\images\yoga.png"></img>
                      <div className="landing-page-depth7-frame005"></div>
                    </div>
                    <div className="landing-page-depth6-frame11">
                      <div className="landing-page-depth7-frame006">
                        <span className="landing-page-text20">
                          <span>Yoga Challenge</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame21">
                    <div className="landing-page-depth6-frame012">
                    <img src = "\src\images\sleep.png"></img>
                      <div className="landing-page-depth7-frame007"></div>
                    </div>
                    <div className="landing-page-depth6-frame12">
                      <div className="landing-page-depth7-frame008">
                        <span className="landing-page-text22">
                          <span>Sleep Challenge</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame31">
                    <div className="landing-page-depth6-frame013">
                    <img src = "\src\images\gratitude.png"></img>
                      <div className="landing-page-depth7-frame009"></div>
                    </div>
                    <div className="landing-page-depth6-frame13">
                      <div className="landing-page-depth7-frame010">
                        <span className="landing-page-text24">
                          <span>Gratitude Challenge</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame5">
                    <div className="landing-page-depth6-frame014">
                    <img src = "\src\images\walking.png"></img>
                      <div className="landing-page-depth7-frame011"></div>
                    </div>
                    <span className="landing-page-text26">
                      <span>Walking Challenge</span>
                    </span>
                    <div className="landing-page-depth6-frame14">
                      <div className="landing-page-depth7-frame012">
                      </div>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame6">
                    <div className="landing-page-depth6-frame15">
                      <div className="landing-page-depth7-frame013"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Landing

