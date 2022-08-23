import axios from "axios";

// This function takes any webflow form and sends the data to strapi.
// using the EZ Form plugin, strapi saves this data and emails it out
// to notification recipients using the sendgrid API.
const formSubmit = (e) => {
  e.preventDefault();

  let form = {};
  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].type !== "submit") {
      form[e.target[i].name] = e.target[i].value;
    }
  }

  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/ezforms/submit`, { formData: form })
    .then(() => {
      window.location = window.location + "?form=success";
    })
    .catch((error) => {
      window.location = window.location + "?form=error";
    });
};

export default formSubmit;
