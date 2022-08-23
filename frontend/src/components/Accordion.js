import React, { useState } from "react";
import RichText from "./RichText";
import { v4 as uuid } from "uuid";
import "../css/Accordion.css";

const Accordion = ({ data }) => {
  if (!data) return null;
  return (
    <div className="Accordion">
      {data.map((el) => {
        return <AccordionItem key={uuid()} header={el.header} body={el.body} />;
      })}
    </div>
  );
};

const AccordionItem = ({ header, body }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`AccordionItem ${open ? "active" : null}`}>
      <div className="AccordionHeader" onClick={() => setOpen(!open)}>
        {header}
      </div>
      <div className="AccordionBody">
        <RichText text={body} />
      </div>
    </div>
  );
};

export default Accordion;
