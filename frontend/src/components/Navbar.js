import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/*">Error</Link>
    </div>
  );
}

export default Navbar;
