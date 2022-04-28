import React, { useState } from "react";
import EditorJSParser from './EditorJSParser';

function Team({data}) {
  const [active, setActive] = useState(false);
  let {id,attributes} = data;
  return (
    <div className="teamContainer">
      <div className="team_title" onClick={() => setActive(!active)}>
        <h3>{attributes.name}</h3>
        <span className={active ? "icon active" : "icon"}>
          <img src={process.env.PUBLIC_URL + "down_arrow.svg"} alt=""/>
        </span>
      </div>

      <div className={active ? "team_content active" : "team_content"}>
        <h3 className="team_heading">{attributes.name}</h3>

        <div className="_flex">
        <EditorJSParser data={attributes.aboutTeam}/>
          <img
            src={process.env.PUBLIC_URL + "team-image.jpg"}
            alt="Team Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
