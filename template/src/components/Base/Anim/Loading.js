import { Spin } from "antd";
import React from "react";

const Loading = ({ style }) => (
  <div
    style={style}
    className="animated fadeIn pt-3 d-flex align-items-center justify-content-center"
  >
    <Spin size="large" color="secondary" />
  </div>
);

export default Loading;
