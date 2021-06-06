import React, { Component } from "react";
import job from "./Images/job.png";
import yicon from "./Images/yicon.png";

import location from "./Images/pin.svg";
import like from "./Images/like.svg";
import dollar from "./Images/dollar.png";
import Add from "./Images/Add.svg";
import clip from "./Images/clip.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Component1 extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    console.log("Props", this.props);
    return (
      <div className="container">
        <div className="RecordLayout">
          {/* Top Job Detail */}
          <div className="RecordHeader">
            {/* left side of the job */}
            <div className="RecordHeaderIdentity">
              <div className="ModuleAvatar">
                <div className="LogoJob">
                  <img className="JobImg" src={job} alt=""></img>
                </div>
                <div className="avatarInfo">
                  <p className="FreelancerAvatar">
                    <a
                      className="Scopic_color"
                      href="/freelancers/scopic"
                      target="_blank"
                    >
                      {this.props.JobTitle}
                    </a>

                    
                    <span className="PipeDivider">.</span>
                    <button
                      className="Link_btn Freelancer_videoLink"
                      type="button"
                    >
                      <img src={yicon} alt=""></img>
                    </button>
                  </p>
                  <p className="FreelanceAvatarMeta">
                    <span className="FreelanceAvatarLocation">
                      <img className="LocationSvg" src={location} alt=""></img>
                      <span>{this.props.Location}</span>
                    </span>
                    <span className="PipeDivider">.</span>
                    <span className="Earnings">
                      <img className="DollarImg" src={dollar} alt=""></img>
                      <span className="EarningAmount">{this.props.Rate}</span>
                      <span className="EarningYear">/year</span>
                    </span>
                    <span className="PipeDivider">.</span>
                    <span className="FreelanceAvatarFeedback">
                      <img className="LikeImg" src={like} alt=""></img>
                      &nbsp; {this.props.Percentage}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side of the job */}
            <div className="RecordHeaderAction">
              <div>
                <a className="ModuleBtn">
                  <img className="AddImg" src={Add}></img>
                </a>
                <a className="ModuleBtnQuote">Get a Quote</a>
              </div>
            </div>
          </div>

          {/* down Job Detail */}
          <div className="RecordContent">
            <div className="FindGuruRecord">
              <div className="ServiceListing">
                <a className="ServiceListingCover">
                  <img
                    className="ServiceListingImage"
                    src="https://res.cloudinary.com/gurucom/image/upload/f_auto/pimg/0/314/314056/Shoes2_4e4bac8c-c5af-4f3c-9d1b-1af19736d674.png"
                  ></img>
                </a>
                <div className="ServiceListingDetial">
                  <h2 className="ServiceListingTitle">{this.props.JobTitle}</h2>
                  <p className="ServiceListingRates">
                    $26/hr &nbsp; . &nbsp; Starting at {this.props.StartingRate}
                  </p>
                  <p className="ServiceListingDesc">{this.props.Description}</p>
                  <div className="SkilledList">
                    <a className="SkilledSet">Angular</a>
                    <a className="SkilledSet">Cloud Computing</a>
                    <a className="SkilledSet">AWS</a>
                    <a className="SkilledSet">Bootstrap</a>
                    <a className="SkilledSet">React</a>
                    <a className="SkilledSet">ASP.NET</a>
                    <a className="SkilledSet">Python</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer of the job */}
          <div className="TabControls">
            <nav className="NavTabControl">
              <button type="button" className="TabsControlButton">
                <img className="TabControlButtonIcon" src={clip}></img>
                <p className="TabControlButtonTitle">More Services(28)</p>
              </button>
              <button type="button" className="TabsControlButton">
                <img className="TabControlButtonIcon" src={clip}></img>
                <p className="TabControlButtonTitle">portfolio(43)</p>
              </button>
              <button type="button" className="TabsControlButton">
                <img className="TabControlButtonIcon" src={clip}></img>
                <p className="TabControlButtonTitle">performance(38)</p>
              </button>
              <button type="button" className="TabsControlButton">
                <img className="TabControlButtonIcon" src={clip}></img>
                <p className="TabControlButtonTitle">about(19)</p>
              </button>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Component1;
