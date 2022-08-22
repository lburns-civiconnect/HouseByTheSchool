import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Page(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Page;
