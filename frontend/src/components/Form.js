import React, { useState } from "react";
import axios from "axios";
function Form() {
  const [name, setName] = useState("liam");
  const [message, setMessage] = useState("hello world");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send");
    let form = {
      name: name,
      message: message,
    };

    axios
      .post("http://localhost:1337/api/ezforms/submit", { formData: form })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        // error.response.status Check status code
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
