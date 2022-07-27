import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Link.css";

function Link() {
  return (
    <div className="link-1">
      <MuiMaterial.Link color="primary" underline="always">
        Link to something
      </MuiMaterial.Link>
    </div>
  );
}

export default Link;
