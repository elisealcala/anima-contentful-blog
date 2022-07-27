import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Chip4.css";

function Chip4() {
  return (
    <div className="chip-1">
      <MuiMaterial.Chip
        icon=""
        clickable
        size="medium"
        label="Ideas"
        color="primary"
        disabled={false}
        variant="outlined"
      />
    </div>
  );
}

export default Chip4;
