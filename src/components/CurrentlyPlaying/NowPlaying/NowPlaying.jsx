import React from "react";
import "./NowPlaying.css";

const NowPlaying = ({ currentTrack }) => {
  return (
    <div className="NowPlaying__wrapper">
      <h1 className="NowPlaying__title title">Currently Playing</h1>
      <div className="NowPlaying__content">
        <div className="NowPlaying__image">
            <img src={currentTrack.image} alt="Image"/>
        </div>
        <h2>{currentTrack.title}</h2>
        <h3>{currentTrack.artist}</h3>
      </div>
    </div>
  );
};

export default NowPlaying;
