import React, { useState } from "react";
import Team from "./Team";

import "./TeamList.css";

const teams = [
  {
    name: "Team1",
    channels: [
      { name: "Channel1", id: 1 },
      { name: "Channel2", id: 2 },
    ],
  },
  {
    name: "Team2",
    channels: [
      { name: "Channel1", id: 1 },
      { name: "Channel2", id: 2 },
    ],
  },
];

const TeamList = () => {
  const [teamList, setTeamList] = useState(teams);
  const [teamName, setTeamName] = useState("");

  const handleAddTeam = (e) => {
    e.preventDefault();
    const data = [...teamList];
    let index = data.findIndex(
      (item) => item.name.toLowerCase() === teamName.toLowerCase()
    );
    if (index >= 0) {
      alert("Team already exists");
    } else {
      data.push({ name: teamName, channels: [] });
      setTeamList(data);
    }
    setTeamName("");
  };

  return (
    <div className="w-50 mx-auto">
      <div className="card w-50 mt-50 mx-auto px-10 py-15">
        <div className="layout-column" data-testid="team-list">
          {teamList &&
            teamList.map((team, id) => <Team key={id} id={id} team={team} />)}
        </div>
        <div className="layout-row">
          <input
            placeholder="Enter Team Name"
            className="team-list-input w-75"
            data-testid="team-name-input"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <button
            className="team-list-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
            data-testid="add-team-btn"
            onClick={handleAddTeam}
            disabled={teamName === ""}
          >
            Add Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
