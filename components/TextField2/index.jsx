import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./TextField2.css";

function TextField2() {
  return (
    <div className="text-field-1">
      <MuiMaterial.TextField
        size="small"
        color="primary"
        disabled={false}
        variant="outlined"
        label="Email address"
        sx={{ width: "240px" }}
      />
    </div>
  );
}

export default TextField2;
