import React from "react";
import "./Trends.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTracks } from "../../store/slices/controllsSlice";
import TrendsItem from "../../components/TrendsItem/TrendsItem";

const Trends = () => {
  const trends = useSelector( state => state.controls.tracks)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTracks())
  }, [dispatch])
  return (
    <div className="trends__wrapper">
      <h1 className="trendsItem__title title">Music trends</h1>
      <div className="trends__content">
        {trends.map((item) => {
          return <TrendsItem key={item.id} track={item} />;
        })}
      </div>
    </div>
  );
};

export default Trends;
