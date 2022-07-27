import React from "react";
import Chip4 from "../Chip4";
import "./Chip3.css";

function Chip3({ tag }) {
  return (
    <div className="chip">
      <Chip4 tag={tag} />
    </div>
  );
}

export default Chip3;
