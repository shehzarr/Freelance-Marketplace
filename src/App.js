import job from "./Images/job.png";
import yicon from "./Images/yicon.png";
import React from "react";
import member from "./Images/upgradedmember.png";
import location from "./Images/pin.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <img src={job}></img>
      <div className="avatarInfo">
        <p class="FreelancerAvatar">
          <a
            className="Scopic_color"
            href="/freelancers/scopic"
            target="_blank"
          >
            Scopic
          </a>
          <span className="SpanMemeber">
            <img
              src={member}
              alt="Member"
              width="58"
              height="15"
              style={{ display: "inline-block" }}
              title="Executive"
            />
          </span>
          <button className="Link_btn Freelancer_videoLink" type="button">
            <img src={yicon}></img>
          </button>
        </p>
        <p className="FreelanceAvatarMeta">
          <span
            title="Rutland, Massachusetts, United States"
            className="FreelanceAvatarLocation"
          >
            <img className="LocationSvg" src={location}></img>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
