import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Switch2.css";

function Switch2() {
  return (
    <div className="switch-1">
      <Antd.Switch size="default" disabled={false} checkedChildren="" unCheckedChildren="" defaultChecked={false} />
    </div>
  );
}

export default Switch2;
