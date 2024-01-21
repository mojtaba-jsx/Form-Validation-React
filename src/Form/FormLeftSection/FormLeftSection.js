import React, { Component } from "react";
import "./FormLeftSection.css";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
class FormLeftSection extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      emailValue: "",
      passwordValue: "",
      allValid: false,
    };
  }

  emailInputHandler(event) {
    this.setState({
      emailValue: event.target.value,
    });
    // console.log(event.target.value);
  }
  passwordInputHandler(event) {
    this.setState({
      passwordValue: event.target.value,
    });
    // console.log(event.target.value);
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    if (
      this.state.emailValue.length !== 0 &&
      this.state.passwordValue.length !== 0
    ) {
      this.setState({
        allValid: true,
      });
      setTimeout(() => {
        this.setState({
          allValid: false,
        });
      }, 4000);
    }
  }

  render() {
    return (
      <div className="formLeftSection">
        <div className="formLeftSection__wrapper">
          <div className="logo-box">
            <img
              src="./images/Logo.png"
              alt="logo"
              className="logo-box-image"
            />
          </div>

          <div className="signin-box">
            <h2 className="signin-title">Sign In</h2>
            <span className="signin-create">
              Don’t have an account?
              <a href="#" className="signin-create-link">
                Create now
              </a>
            </span>

            <form
              onSubmit={(event) => this.submitHandler(event)}
              className="signin-form"
            >
              <label className="signin-form-email-label"> E-mail</label>
              <input
                value={this.state.emailValue}
                onChange={(event) => this.emailInputHandler(event)}
                type="text"
                placeholder="Enter Yout Eamil"
              />
              {this.state.submitted && this.state.emailValue.length === 0 && (
                <span className="signin-form-error">Email Field Is Empty</span>
              )}
              <label className="signin-form-password-label">Password</label>
              <span className="signin-form-password-box">
                <input
                  value={this.state.passwordValue}
                  onChange={(event) => this.passwordInputHandler(event)}
                  type="text"
                  placeholder="Enter Your Password"
                />
                <FaEye className="signin-password-icon" />
              </span>
              {this.state.submitted &&
                this.state.passwordValue.length === 0 && (
                  <span className="signin-form-error">
                    Password Field Is Empty
                  </span>
                )}
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

              <button className="signin-form-btn">Sign In</button>
              {
                this.state.submitted && this.state.allValid&&(
                  <span className="siginin-succesfully">You Login Succesfully</span>
                )
              }
            </form>

            <span className="signin-line">OR</span>

            <div className="signin-other-links">
              <a href="#" className="signin-other-links-google">
                <FcGoogle className="signin-other-links-google-icon" />
                Continue with Google
              </a>
              <a href="#" className="signin-other-links-facebook">
                <FaFacebook className="signin-other-links-facebook-icon" />
                Continue with Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLeftSection;
