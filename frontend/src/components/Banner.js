// Don't edit this component. It displays whether or not a form was submitted successfully
import React, { useEffect, useState } from "react";

function Banner() {
  const [display, setDisplay] = useState(false);
  const [content, setContent] = useState("");
  const [background, setBackground] = useState("white");
  const [color, setColor] = useState("black");

  let params = new URL(document.location).searchParams;
  let form = params.get("form");

  useEffect(() => {
    if (form === "success") {
      setDisplay(true);
      setContent("Thanks for your message! We'll get back to you as soon as we can");
      setBackground("#4BB543");
      setColor("white");
      setTimeout(() => {
        setDisplay(false);
        window.location = window.location.origin;
      }, 1000);
    }
    if (form === "error") {
      setDisplay(true);
      setContent("Oops, something went wrong! Please try again");
      setBackground("#ED4337");
      setColor("white");
      setTimeout(() => {
        setDisplay(false);
        window.location = window.location.origin;
      }, 1000);
    }
  }, [form]);

  return (
    <div
      style={
        display
          ? {
              display: "flex",
              position: "absolute",
              top: 30,
              left: 0,
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              textAlign: "center",
              backgroundColor: background,
              color: color,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              borderRadius: 20,
              fontSize: 22,
            }
          : { display: "none" }
      }
    >
      {content}
    </div>
  );
}

export default Banner;
