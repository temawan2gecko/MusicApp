import React from "react";
import Navigation from "../Navigation/Navigation";
import CurrentlyPlaying from "../CurrentlyPlaying/CurrentlyPlaying";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Controls from "../Controls/Controls";

const Layout = () => {
  return (
    <div className="layout__wrapper">
      <Navigation />
      <Outlet />
      <CurrentlyPlaying />
      <Controls />
    </div>
  );
};

export default Layout;
