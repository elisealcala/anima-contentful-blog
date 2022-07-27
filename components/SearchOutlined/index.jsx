import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./SearchOutlined.css";

function SearchOutlined() {
  const iconName = "SearchOutlined" || "SearchOutlined";

  const AntDIconElement = AntDesignIcons[iconName];

  const style = {
    ...("#fff" ? { color: "#fff" } : {}),
    ...("28px" ? { fontSize: "28px" } : {}),
  };

  return (
    <div className="search-outlined">
      <AntDIconElement rotate={0} spin={false} style={style} defaultValue={iconName} />
    </div>
  );
}

export default SearchOutlined;
