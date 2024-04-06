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

import React from "react";
import "./App.css";

export const Landing = () => {
    return (
        <div className="landing-page">
            <div className="depth-frame">
                <div className="div">
                    <div className="depth-frame-2">
                        <div className="depth-frame-wrapper">
                            <div className="depth-frame-3">
                                <div className="div-wrapper">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group">
                                            <img className="vector" alt="Vector" src="src/images/vector-0.svg" />
                                            <img className="img" alt="Vector" src="src/images/vector-1.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-4">
                                    <div className="depth-frame-5">
                                        <img className="fit-nest" alt="Fit nest" src="\src\images\fit-nest.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="depth-frame-6">
                            <div className="depth-frame-7">
                                <div className="depth-frame-8">
                                    <div className="depth-frame-9">
                                        <div className="text-wrapper">Explore</div>
                                    </div>
                                </div>
                                <div className="depth-frame-10">
                                    <div className="depth-frame-9">
                                        <div className="text-wrapper-2">Challenges</div>
                                    </div>
                                </div>
                                <div className="depth-frame-11">
                                    <div className="depth-frame-9">
                                        <div className="text-wrapper-3">Feed</div>
                                    </div>
                                </div>
                                <div className="depth-frame-12">
                                    <div className="depth-frame-9">
                                        <div className="text-wrapper">TBD</div>
                                    </div>
                                </div>
                            </div>
                            <div className="depth-frame-13">
                                <div className="depth-frame-14">
                                    <div className="depth-frame-15">
                                        <div className="vector-wrapper">
                                            <img className="vector-2" alt="Vector" src="image.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-14">
                                    <div className="depth-frame-15">
                                        <div className="vector-wrapper">
                                            <img className="vector-3" alt="Vector" src="vector-0-2.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="depth-frame-16" />
                        </div>
                    </div>
                    <div className="depth-frame-17">
                        <div className="depth-frame-18">
                            <div className="depth-frame-19">
                                <div className="depth-frame-20">
                                    <div className="img-wrapper">
                                        <img className="depth-frame-21" alt="Depth frame" src="depth-7-frame-0-2.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="depth-frame-22">
                                <div className="depth-frame-23">
                                    <div className="depth-frame-5">
                                        <div className="text-wrapper-4">Featured Challenges</div>
                                    </div>
                                </div>
                            </div>
                            <div className="depth-frame-24">
                                <div className="depth-frame-25">
                                    <div className="depth-frame-26">
                                        <div className="depth-frame-27" />
                                    </div>
                                    <div className="depth-frame-28">
                                        <div className="depth-frame-29">
                                            <div className="text-wrapper-5">Meditation Challenge</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-30">
                                    <div className="depth-frame-26">
                                        <div className="depth-frame-31" />
                                    </div>
                                    <div className="depth-frame-28">
                                        <div className="depth-frame-29">
                                            <div className="text-wrapper-5">Yoga Challenge</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-32">
                                    <div className="depth-frame-26">
                                        <div className="depth-frame-33" />
                                    </div>
                                    <div className="depth-frame-28">
                                        <div className="depth-frame-29">
                                            <div className="text-wrapper-5">Sleep Challenge</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-34">
                                    <div className="depth-frame-26">
                                        <div className="depth-frame-35" />
                                    </div>
                                    <div className="depth-frame-28">
                                        <div className="depth-frame-29">
                                            <div className="text-wrapper-6">Gratitude Challenge</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-36">
                                    <div className="depth-frame-26">
                                        <div className="depth-frame-37" />
                                    </div>
                                    <div className="depth-frame-38">
                                        <div className="depth-frame-39">
                                            <div className="text-wrapper-7">Mindfulness Challenge</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-40">
                                    <div className="depth-frame-26">
                                        <div className="depth-frame-41" />
                                    </div>
                                    <div className="depth-frame-28">
                                        <div className="depth-frame-29">
                                            <div className="text-wrapper-7">Body Scan Challenge</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="depth-frame-42">
                                    <div className="depth-frame-26">
                                        <div className="depth-frame-43" />
                                    </div>
                                    <div className="depth-frame-28">
                                        <div className="depth-frame-29">
                                            <div className="text-wrapper-6">Walking Challenge</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Landing

