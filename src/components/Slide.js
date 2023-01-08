import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ item }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${item.src})` }}>
      <div className="slide-texts ">
        <h1>{item.headline}</h1>
        <p>{item.body}</p>
        <Link>{item.cta}</Link>
      </div>
    </div>
  );
};

export default Slide;
