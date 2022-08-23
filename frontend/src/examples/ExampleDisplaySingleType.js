import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../components/Accordion";
import RichText from "../components/RichText";
import Slider from "../components/Slider";

function ExampleDisplaySingleType() {
  const { data } = useSelector((state) => state.cms);
  const displayData = data["example-single-type"];

  //   if our data hasnt loaded, we dont want to try to display it
  if (!displayData) return null;
  const { exampleHeader, exampleBody, exampleAccordion, exampleSlider } = displayData.attributes;
  return (
    <div>
      <h2>An example for how to display database single types</h2>
      <h4>located in /src/examples/ExampleDisplaySingleType.js</h4>
      <div style={{ backgroundColor: "lightgrey", margin: 10, padding: 20 }}>
        <h1>{exampleHeader}</h1>
        <RichText text={exampleBody} />
        {/* <Accordion data={exampleAccordion.items} /> */}
        <Slider data={exampleSlider.items} />
      </div>
    </div>
  );
}

export default ExampleDisplaySingleType;
