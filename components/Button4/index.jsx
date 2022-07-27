import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Button4.css";

function Button4() {
  return (
    <div className="button-1">
      <MuiMaterial.Button
        endIcon=""
        size="large"
        startIcon=""
        color="primary"
        disabled={false}
        variant="contained"
        disableElevation={false}
      >
        Show more
      </MuiMaterial.Button>
    </div>
  );
}

export default Button4;
