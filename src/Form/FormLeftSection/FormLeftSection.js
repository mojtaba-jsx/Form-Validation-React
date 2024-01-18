import React, { Component } from "react";
import "./FormLeftSection.css";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
class FormLeftSection extends Component {
  render() {
    return (
      <div className="formLeftSection">
        <div className="formLeftSection__wrapper">
          <div className="logo-box">
            <img src="./images/Logo.png" alt="logo" />
          </div>

          <div className="signin-box">
            <h2 className="signin-title">Sign In</h2>
            <span className="signin-create">
              Don’t have an account?
              <a href="#" className="signin-create-link">
                Create now
              </a>
            </span>

            <form className="signin-form">
              <label> E-mail</label>
              <input type="text" placeholder="Enter Yout Eamil" />
              <label>Password</label>
              <input type="text" placeholder="Enter Your Password" />
              <div className="signin-form-link">
                <span className="signin-remember-me">
                  <input type="checkbox" />
                  Remember me
                </span>
                <span className="signin-forget-password">
                  <a href="#" className="signin-forget-password-link">
                  Forgot Password?
                  </a>
                </span>
              </div>

              <button>Sign In</button>
            </form>

            <span className="signin-line">OR</span>

            <div className="signin-other-links">
              <a href="#" className="signin-other-links-google">
              Continue with Google
              <FcGoogle/>
              </a>
              <a href="#" className="signin-other-links-facebook">
              Continue with Facebook
              <FaFacebook/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLeftSection;
