// // import React, { useState } from "react";
// // import "./Login.css";
// // import {useNavigate} from 'react-router-dom';

// // export const Login = () => {
// //   const navigate = useNavigate();
// //   return (
// //     <div className="login-page">
// //       <div className="depth-frame">
// //         <div className="div">
// //           <div className="depth-frame-2">
// //             <div className="depth-frame-wrapper">
// //               <div className="depth-frame-3">
// //                 <div className="div-wrapper">
// //                   <div className="depth-frame-4">
// //                     <img className="vector" alt="Vector" src="vector-0.svg" />
// //                     <div className="depth-frame-5">
// //                       <div className="depth-frame-6" />
// //                       <div className="depth-frame-7" />
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="depth-frame-8">
// //                   <div className="depth-frame-9">
// //                     <div className="text-wrapper-brand">FitNest</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="depth-frame-10">
// //               <div className="depth-frame-11" />
// //             </div>
// //           </div>
// //           <div className="depth-frame-12">
// //             <div className="depth-frame-13">
// //               <div className="depth-frame-14">
// //                 <div className="depth-frame-15">
// //                   <div className="text-wrapper-wlc">Welcome to FitNest</div>
// //                 </div>
// //               </div>
// //               <div className="depth-frame-16">
// //                 <div className="depth-frame-17">
// //                   <div className="depth-frame-18">
// //                     <div className="depth-frame-19">
// //                       <div className="depth-frame-21">
// //                         <div className="depth-frame-9">
// //                           <input
// //                             type="text"
// //                             placeholder="Username"
// //                             required={true}
// //                             class="username-text-box"
// //                             id = 'username'
// //                           />
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div> 
// //               </div>
// //               <div className="depth-frame-16">
// //                 <div className="depth-frame-22">
// //                   <div className="depth-frame-18">
// //                     <div className="depth-frame-19">
// //                       <div className="depth-frame-24">
// //                         <div className="depth-frame-9">
// //                           <input
// //                             type="password"
// //                             placeholder="Password"
// //                             required={true}
// //                             class="username-text-box"
// //                             id = "password"
// //                           />
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="depth-frame-30">
// //                 <button className="sign-in-button" onClick={() => navigate("/dashboard")}>
// //                   <div className="depth-frame-32">
// //                     <div className="depth-frame-9">
// //                       <div className="text-wrapper-sign">Sign in</div>
// //                     </div>
// //                   </div>
// //                 </button>
// //               </div>
// //               <div className="depth-frame-30">
// //                 <button className="depth-frame-register-button" onClick={() => navigate("/register")}>
// //                   <div className="depth-frame-35">
// //                     <div className="depth-frame-9">
// //                       <div className="text-wrapper-reg">Create an account</div>
// //                     </div>
// //                   </div>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Login;


// import React from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="login-container">
//       <header className="login-header">
//         <img src="vector-0.svg" alt="FitNest Logo" className="login-logo" />
//         <h1>FitNest</h1>
//       </header>
//       <main className="login-main">
//         <h2>Welcome to FitNest</h2>
//         <form className="login-form">
//           <div className="form-group">
//             <input type="text" placeholder="Username" required className="form-control" />
//           </div>
//           <div className="form-group">
//             <input type="password" placeholder="Password" required className="form-control" />
//           </div>
//           <button type="button" className="btn btn-primary" onClick={() => navigate("/dashboard")}>Sign in</button>
//           <button type="button" className="btn btn-secondary" onClick={() => navigate("/register")}>Create an account</button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import "./Login.css"; // Ensure this CSS file includes the styles mentioned later
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3798a9d0b87570754db1150e552bd05cfe9bd70eadfc7764a0f07862ac781ae?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="Logo" className="logo" />
          <span className="logo-text">FitNest</span>
        </div>
      </header>
      <div className="signup-container">
        <h1 className="signup-title">Welcome to FitNest</h1>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Username" required className="form-input" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required className="form-input" />
          </div>
          <div className="button-container"> {/* Button container for centering */}
            <button type="button" className="signup-button" onClick={() => navigate("/dashboard")}>Sign in</button>
            <button type="button" className="signup-button" onClick={() => navigate("/register")}>Create an account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
