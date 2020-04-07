import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <li className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <a className="header" href={video.snippet.url}>
          {video.snippet.title}
        </a>
      </div>
    </li>
  );
};

export default VideoItem;
