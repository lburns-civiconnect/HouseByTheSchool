import React, { useState } from "react";

// your page that has the form must include this import line.
// This is a function that submits whatever data is in your form to strapi,
// where it is stored in the database and emailed out to all notification recipients
import formSubmit from "../util/submitForm";

// Each input in your form must have a unique name attribute e.x. name="Email"
// your form tag must have the onSubmit attribute e.x. onSubmit={formSubmit}
function ExampleForm() {
  return (
    <form onSubmit={formSubmit}>
      <h2>An Example Form</h2>
      <h4>located in /src/examples/ExampleForm.js</h4>
      <input type="text" name="Name" />
      <input type="tel" name="Phone" />
      <input type="email" name="Email" />
      <input type="tel" name="Date" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ExampleForm;
