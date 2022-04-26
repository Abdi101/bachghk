import React, { useState } from "react";

function Team({data}) {
  const [active, setActive] = useState(false);
  const {id,attributes} = data;
  return (
    <div>
      <div className="team_title" onClick={() => setActive(!active)}>
        <h3>{attributes.name}</h3>
        <span className={active ? "icon active" : "icon"}>
          <img src={process.env.PUBLIC_URL + "down_arrow.svg"} alt=""/>
        </span>
      </div>

      <div className={active ? "team_content active" : "team_content"}>
        <h3 className="team_heading">{attributes.name}</h3>

        <div className="_flex">
          <ul className="team_list">
            {attributes.players.data.map((player,index)=>(
                <li key={index}>
                  <h5 key={index+1}>{player.attributes.name}</h5>
                  <p key={index+2}>{player.attributes.position}</p>
                  <p key={index+3}>{player.attributes.telephone}</p>
                  <p key={index+4}>{player.attributes.email}</p>
                </li>
            ))}
          </ul>
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
