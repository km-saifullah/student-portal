import React from "react";
import "./logo.css";

const Logo = ({ logoColor }) => {
  return (
    <h3 className="logo_text" style={{ color: logoColor }}>
      Student <span className="unique_text">Portal</span>
    </h3>
  );
};

export default Logo;
