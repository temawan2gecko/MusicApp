import React from "react";
import "./CurrentlyPlaying.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentlyTracks } from "../../store/slices/controllsSlice";
import NowPlaying from "./NowPlaying/NowPlaying";
import NextSong from "./NextSong/NextSong";

const CurrentlyPlaying = () => {
  const currentlyTracks = useSelector(
    (state) => state.controls.tracks
  );
  const numberCurrentlyTracks = useSelector(
    (state) => state.controls.currentTrack
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCurrentlyTracks());
  }, [dispatch]);
  console.log(currentlyTracks);
  return (
    <div className="currentlyPlaying__wrapper">
      {currentlyTracks && currentlyTracks.length > 0 ? (
        <NowPlaying currentTrack={currentlyTracks[numberCurrentlyTracks]} />
      ) : (
        <h1 className="title">Loading...</h1> // Or any other placeholder content
      )}
      <h1 className="title">next songs</h1>
      <div className="scroll__current">
        {currentlyTracks.map((song) => {
          return <NextSong song={song} />;
        })}
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
