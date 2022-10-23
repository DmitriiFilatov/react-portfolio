import React from "react";
import skillCSS from "../elements/skillItem.module.css";

function skillItem({ name, icon }) {
  return (
    <div className={skillCSS.skill}>
      <i className={`${skillCSS.skillIcon} icon-${name.toLowerCase()}`}>
        {icon}
      </i>
      <p>{name}</p>
    </div>
  );
}

export default skillItem;
