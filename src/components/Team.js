import React, { useState } from "react";

import "./Team.css";

const Team = ({ team, id }) => {
  const [channelName, setChannelName] = useState("");
  const [channelList, setChannelList] = useState(team.channels);

  const handleAddChannel = (e) => {
    e.preventDefault();
    const data = [...channelList];
    let index = data.findIndex(
      (item) => item.name.toLowerCase() === channelName.toLowerCase()
    );
    if (index >= 0) alert("Channel already exists");
    else {
      data.push({ name: channelName, id: data.length + 1 });
      setChannelList(data);
    }
    setChannelName("");
  };

  const handleDeleteChannel = (e, id) => {
    e.preventDefault();
    const data = [...channelList];
    let index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
    setChannelList(data);
  };

  return (
    <div>
      {team && <h4 className="mt-0 mb-6">{team.name}</h4>}
      {team && (
        <div className="layout-row justify-content-end mb-6">
          <input
            placeholder="Enter Channel Name"
            className="channel-name-input w-45 px-13"
            data-testid={"channel-name-input-" + id}
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
          <button
            className="channel-name-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
            data-testid={"add-channel-btn-" + id}
            disabled={channelName === ""}
            onClick={handleAddChannel}
          >
            Add Channel
          </button>
        </div>
      )}
      {team && (
        <ul className="styled mb-20 pl-25" data-testid={"channel-list-" + id}>
          {channelList &&
            channelList.map((channel) => (
              <li
                key={channel.id}
                className="flex slide-up-fade-in justify-content-between align-items-center pl-10 pr-5 py-6 mt-0 mb-6"
              >
                <span>{channel.name}</span>
                <button
                  data-testid={"remove-channel-button-" + id + channel.id}
                  className="icon-only x-small danger ma-0 pa-0"
                  onClick={(e) => handleDeleteChannel(e, channel.id)}
                >
                  <i className="material-icons">delete</i>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Team;
