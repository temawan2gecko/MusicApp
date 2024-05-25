import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import Trends from "./pages/Trends/Trends";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="trends" element={<Trends />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
