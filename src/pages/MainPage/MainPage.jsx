import React from "react";
import "./MainPage.css";
import MusicVisualizer from "../../components/RotatingCube/MusicVisualizer";


const MainPage = () => {
  return (
    <div className="mainPage__wrapper">
      <MusicVisualizer />
    </div>
  );
};

export default MainPage;
