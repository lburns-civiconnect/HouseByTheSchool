import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Page(props) {
  return (
    <>
      <Banner />
      <Navbar />

      {props.children}
      <Footer />
    </>
  );
}

export default Page;
