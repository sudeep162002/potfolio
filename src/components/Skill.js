import React from "react";

const Skill = () => {
  return (
      <div className="Skill">
          <h2>MY SKILLS</h2>
    <div className="skill-bars">
    <div className="bar">
      <div className="info">
        <span>HTML</span>
      </div>
      <div className="progress-line html">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div classNameclassName="info">
        <span>CSS</span>
      </div>
      <div className="progress-line css">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>jQuery</span>
      </div>
      <div className="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>Node.js</span>
      </div>
      <div className="progress-line python">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>MySQL</span>
      </div>
      <div className="progress-line mysql">
        <span></span>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Skill;
