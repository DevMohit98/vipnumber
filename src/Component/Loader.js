import React from "react";
import "../App.css";
const Loader = () => {
  return (
    <div className="ui segment">
      <p></p>
      <div className="ui active dimmer">
        <div className="ui loader"></div>
      </div>
    </div>
  );
};
export default Loader;
