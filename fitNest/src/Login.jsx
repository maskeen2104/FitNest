import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom';

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
                    <img className="vector" alt="Vector" src="vector-1.svg" />
                    <div className="depth-frame-5">
                      <div className="depth-frame-6" />
                      <div className="depth-frame-7" />
                    </div>
                  </div>
                </div>
                <div className="depth-frame-8">
                  <div className="depth-frame-9">
                    <div className="text-wrapper">Mindful</div>
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
                  <div className="text-wrapper-2">Welcome to Mindful</div>
                </div>
              </div>
              <div className="depth-frame-16">
                <div className="depth-frame-17">
                  <div className="depth-frame-18">
                    <div className="depth-frame-19">
                      <div className="username-text-box">
                        <div className="depth-frame-21">
                          <div className="depth-frame-9">
                            <input type = 'text' placeholder="Username" required={true}/>
                          </div>
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
                      <div className="depth-frame-23">
                        <div className="depth-frame-24">
                          <input type = 'text' placeholder="Password" required={true}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-frame-30">
                <div className="depth-frame-31">
                  <div className="depth-frame-32">
                    <div className="depth-frame-9">
                      <div className="text-wrapper-6">Sign in</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-frame-33">
                <div className="depth-frame-15">
                  <div className="text-wrapper-7">Don&#39;t have an account?</div>
                </div>
              </div>
              <div className="depth-frame-30">
                <div className="depth-frame-34">
                  <div className="depth-frame-35">
                    <div className="depth-frame-9">
                      <div className="text-wrapper-8">Create an account</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-frame-33">
                <div className="depth-frame-15">
                  <div className="text-wrapper-7">Forgot your password?</div>
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
