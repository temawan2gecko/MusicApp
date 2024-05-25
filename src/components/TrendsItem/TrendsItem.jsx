import React from "react";
import "./TrendsItem.css";
import { useDispatch } from "react-redux";
import { changeTrackById } from "../../store/slices/controllsSlice";

const TrendsItem = ({ track }) => {
  const dispatch = useDispatch();
  return (
    <div className="trendsItem__wrapper" onClick={() => dispatch(changeTrackById(track.id))}>
      <div className="trendsItem__image">
        <img src={track.image} alt="Image" />
      </div>
      <div className="">
        <h2 className="title">{track.title}</h2>
      </div>
      <div className="">
        <h3 className="title">{track.artist}</h3>
      </div>
    </div>
  );
};

export default TrendsItem;
