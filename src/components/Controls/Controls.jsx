import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTracks,playPause,
    nextTrack,
    prevTrack,
    setProgress,
    setVolume, } from "../../store/slices/controllsSlice";
import "./Controls.css";

const Controls = () => {
  const dispatch = useDispatch();
  const { tracks, isPlaying, currentTrack, progress, volume } = useSelector(
    (state) => state.controls
  );
  const audioRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    dispatch(setProgress((currentTime / duration) * 100));
  };

  const seek = (event) => {
    const width = event.target.clientWidth;
    const offsetX = event.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (offsetX / width) * duration;
  };

  const changeVolume = (event) => {
    dispatch(setVolume(event.target.value));
  };

  return (
    <div className="controls__wrapper">
      {tracks.length > 0 && (
        <audio
          src={tracks[currentTrack].src}
          ref={audioRef}
          onTimeUpdate={handleProgress}
        />
      )}
      <div className="controls">
        <button className="controls__btn" onClick={() => dispatch(prevTrack())}>
          <img src="./prev.png" alt="Previous" />
        </button>
        <button className="controls__btn" onClick={() => dispatch(playPause())}>
          <img src={isPlaying ? "/pause.png" : "/play.svg"} alt="Play/Pause" />
        </button>
        <button className="controls__btn" onClick={() => dispatch(nextTrack())}>
          <img src="./next.png" alt="Next" />
        </button>
      </div>
      <div className="progress__bar" onClick={seek}>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="volume-control">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
        />
      </div>
    </div>
  );
};

export default Controls;
