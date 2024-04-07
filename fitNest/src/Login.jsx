import React, { useState } from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom';

export const Login = () => {
  return (
    <div className="login-page">
      <div className="depth-frame">
        <div className="div">
          <div className="depth-frame-2">
            <div className="depth-frame-wrapper">
              <div className="depth-frame-3">
                <div className="div-wrapper">
                  <div className="depth-frame-4">
                    <img className="vector" alt="Vector" src="vector-0.svg" />
                    <div className="depth-frame-5">
                      <div className="depth-frame-6" />
                      <div className="depth-frame-7" />
                    </div>
                  </div>
                </div>
                <div className="depth-frame-8">
                  <div className="depth-frame-9">
                    <div className="text-wrapper-brand">FitNest</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="depth-frame-10">
              <div className="depth-frame-11" />
            </div>
          </div>
          <div className="depth-frame-12">
            <div className="depth-frame-13">
              <div className="depth-frame-14">
                <div className="depth-frame-15">
                  <div className="text-wrapper-wlc">Welcome to FitNest</div>
                </div>
              </div>
              <div className="depth-frame-16">
                <div className="depth-frame-17">
                  <div className="depth-frame-18">
                    <div className="depth-frame-19">
                      <div className="depth-frame-21">
                        <div className="depth-frame-9">
                          <input
                            type="text"
                            placeholder="Username"
                            required={true}
                            class="username-text-box"
                            id = 'username'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="depth-frame-16">
                <div className="depth-frame-22">
                  <div className="depth-frame-18">
                    <div className="depth-frame-19">
                      <div className="depth-frame-24">
                        <div className="depth-frame-9">
                          <input
                            type="text"
                            placeholder="Password"
                            required={true}
                            class="username-text-box"
                            id = "password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-frame-30">
                <div className="sign-in-button">
                  <div className="depth-frame-32">
                    <div className="depth-frame-9">
                      <div className="text-wrapper-sign" onClick={()=> {useNavigate('./Dashboard')}}>Sign in</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-frame-30">
                <div className="depth-frame-register-button">
                  <div className="depth-frame-35">
                    <div className="depth-frame-9">
                      <div className="text-wrapper-reg" onClick={()=> {useNavigate('./Register')}}>Create an account</div>
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
export default Login;
