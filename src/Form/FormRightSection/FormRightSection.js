import React, { Component } from "react";
import "./FormRightSection.css";

import { MdOutlineSupportAgent } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
class FormRightSection extends Component {
  render() {
    return (
      <div className="formRightSection">
        <span className="formRightSection__support">
          <MdOutlineSupportAgent className="formRightSection__support-icon" />
          <a href="#" className="formRightSection__support-link">
            Support
          </a>
        </span>
        <img
          src="./images/shape.png"
          alt="shape"
          className="formRightSection-shape"
        />

        <div className="formRightSection__card">
          <div className="formRightSection__card-left">
            <h4 className="formRightSection__card-title">
              Reach financial goals faster
            </h4>
            <p className="formRightSection__card-text">
              Use your Venus card around the <br /> world with no hidden fees.
              Hold, <br /> transfer and spend money.
            </p>
            <a href="#" className="formRightSection__card-btn">
              Learn more
            </a>
          </div>

          <div className="formRightSection__card-right">
            <img
              src="./images/card.png"
              alt="card"
              className="formRightSection__card-right-image1"
            />
            <img
              src="./images/card2.png"
              alt="card"
              className="formRightSection__card-right-image2"
            />
          </div>
        </div>
        <div className="formRightSection__price">
          <div className="formRightSection__price-left">
            <FaRegChartBar className="formRightSection__price-left-icon" />
          </div>
          <div className="formRightSection__price-right">
            <span className="formRightSection__price-right-title">
              Earnings
            </span>
            <span className="formRightSection__price-right-text">$350.40</span>
          </div>
        </div>

        <div className="formRightSection__info">
          <span className="formRightSection__info-title">
            Introducing new features
          </span>
          <p className="formRightSection__info-text">
            Analyzing previous trends ensures that businesses <br /> always make
            the right decision. And as the scale of <br /> the decision and it’s
            impact magnifies...
          </p>
        </div>
      </div>
    );
  }
}

export default FormRightSection;
