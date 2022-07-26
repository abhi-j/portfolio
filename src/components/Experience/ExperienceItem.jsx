import React from "react";
import "./ExperienceItem.css";

function ExperienceItem(props) {
  const { company, start, end, position, responsibility } = props.item;

  return (
    <div className="experience__item">
      <span>{company}</span>
      <span>{position}</span>
      <div className="duration">
        <span>
          {start} - {end}
        </span>
      </div>
      <div className="responsibility">{responsibility}</div>
      {/*displayed on mobile view */}

      {/* <div className="hidden-class">
        <div className="experience__item">
          <span>Design Therapist</span>
          <span>Web developer</span>
          <div className="duration">
            <span>July 2022 - Current</span>
          </div>
          <div className="responsibility">{responsibility}</div>
        </div>
      </div> */}
    </div>
  );
}

export default ExperienceItem;
