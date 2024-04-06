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

import * as React from "react";
import './App.css'

const challenges = [
  {
    id: 1,
    title: "Meditation Challenge",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/85bd73fa56896ddf5334617ceb37002a351db7a36228713b8d0a3860a2ef5d9c?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
  },
  {
    id: 2,
    title: "Yoga Challenge",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/458f7e1c909a9d30b025b2bc227a9abc828ba0c22112c9942faf5e3d7435b69d?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
  },
  {
    id: 3,
    title: "Sleep Challenge",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cd704b9442d24bad6b92aeceef4a1cc53bf69f8e8ebbcd9a3b5ee9125cab452?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
  },
  {
    id: 4,
    title: "Gratitude Challenge",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/842467d7999f2740c7242ecadce05c84fa9e73a4dfa559f80ca180ee63f7d5ca?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
  },
  {
    id: 5,
    title: "Mindfulness Challenge",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8143367f76678281c255c3d792933f052af32bf0ef69992796892bae5b392708?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
  },
  {
    id: 6,
    title: "Body Scan Challenge",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46925e5ce1571d04e84eeedd03c5afaaa6a7a99b4a6b191519defa43c9efd79?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
  },
  {
    id: 7,
    title: "Walking Challenge",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/adb824f4e1db7cd923ad3ad5e1cf9ae82ceffee68c8d928a1c9ab0b52915b82b?apiKey=6dc1b1172a21495ea8a406717dc53c8f&",
  },
];

const ChallengeCard = ({ title, image }) => (
  <div className="challenge-card">
    <img src={image} alt={title} className="challenge-image" />
    <div className="challenge-title">{title}</div>
  </div>
);

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa1ec83fdac5933ea96a929298e9e0bd9006e96f566e1bcb10702f10368a170?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="FitNest Logo" className="logo-image" />
      <div className="logo-text">FitNest</div>
    </div>
    <nav className="navigation">
      <div className="nav-item">Explore</div>
      <div className="nav-item">Challenges</div>
      <div className="nav-item">Feed</div>
      <div className="nav-item">TBD</div>
    </nav>
    <div className="user-actions">
      <div className="user-icon">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/937f7392e09497d9a402696add4e51d28e422cdc0986410abbf5b5001d045f90?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="User Icon" className="user-icon-image" />
      </div>
      <div className="notification-icon">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f10782b393c964ec92f82aa9dbed35db5cc46523bbd1cf8c7b26ed564b8720e?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="Notification Icon" className="notification-icon-image" />
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07664fd767e5ea0d3566eea6971d4479183169a1bb05ab358c86d74aedd83e27?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="User Avatar" className="user-avatar" />
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aece9f331c078a9ad5178da18b944320058387abd6ef34d54e98c599b4777dda?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="Hero Background" className="hero-background" />
    <div className="hero-content">
      <h1 className="hero-title">Discover the benefits of Vitality</h1>
      <p className="hero-description">
        Unlock your potential with a personalized wellness journey. Get started with a challenge or explore the app to
        find what works best for you.
      </p>
      <div className="hero-cta">
        <div className="cta-text">Start your journey</div>
      </div>
    </div>
  </section>
);

function Landing() {
  return (
    <>
      <div className="app">
        <div className="app-container">
          <div className="app-content">
            <Header />
            <Hero />
            <div className="featured-challenges">
              <h2 className="section-title">Featured Challenges</h2>
            </div>
            <div className="challenge-list">
              <div className="challenge-row">
                {challenges.slice(0, 5).map((challenge) => (
                  <ChallengeCard key={challenge.id} title={challenge.title} image={challenge.image} />
                ))}
              </div>
              <div className="challenge-row">
                {challenges.slice(5).map((challenge) => (
                  <ChallengeCard key={challenge.id} title={challenge.title} image={challenge.image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;