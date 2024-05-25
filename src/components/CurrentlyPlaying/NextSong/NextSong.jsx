import React from "react";
import { useDispatch } from "react-redux";
import { changeTrackById } from "../../../store/slices/controllsSlice";
import "./NextSong.css";

const NextSong = ({ song }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="NextSong__wrapper"
      onClick={() => dispatch(changeTrackById(song.id))}
    >
      <div className="NextSong__image">
        <img src={song.image} alt="Image" />
      </div>
      <div className="">
        <h2>{song.title}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default NextSong;
