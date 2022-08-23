import React from "react";
import ExampleForm from "../examples/ExampleForm";
import Page from "../components/Page";
import ExampleDisplayCollection from "../examples/ExampleDisplayCollection";
import ExampleDisplaySingleType from "../examples/ExampleDisplaySingleType";
import Accordion from "../components/Accordion";

function Examples() {
  return (
    <Page>
      <h1>Examples Page</h1>
      {/* <ExampleForm /> */}
      {/* <ExampleDisplayCollection /> */}
      <ExampleDisplaySingleType />
    </Page>
  );
}

export default Examples;
