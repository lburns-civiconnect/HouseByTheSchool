import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import RichText from "../components/RichText";

function ExampleDisplayCollection() {
  const { data } = useSelector((state) => state.cms);
  const displayData = data["example-collections"];

  //   if our data hasnt loaded, we dont want to try to display it
  if (!displayData) return null;
  return (
    <div>
      <h2>An example for how to display database collection</h2>
      <h4>located in /src/examples/ExampleDisplayCollection.js</h4>
      {displayData.map((el) => {
        return <DisplayItem key={uuid()} data={el} />;
      })}
    </div>
  );
}

const DisplayItem = ({ data }) => {
  const { text, richText, number, date, boolean, email, list, image } = data.attributes;
  return (
    <div style={{ backgroundColor: "lightgrey", margin: 10, padding: 20 }}>
      <p>{text}</p>
      <RichText text={richText} />
      <p>{number}</p>
      <p>{date}</p>
      <p>{boolean ? "true" : "false"}</p>
      <p>{email}</p>
      <p>{list}</p>
      <img src={image.data.attributes.url} style={{ width: 100, height: 100 }} />
    </div>
  );
};

export default ExampleDisplayCollection;
