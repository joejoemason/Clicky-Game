import React from "react";
import "./Leader.css";

const Leader = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      STATS: {props.scores} LEADERS: {props.highscore}
    </div>
  </div>
);

export default Leader;