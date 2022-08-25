import React from "react";
import Page from "../components/Page";

function Index() {
  return (
    <Page>
      <header id="hero-overlay" className="hero-overlay wf-section">
        <a href="index.html" aria-current="page" className="w-inline-block w--current">
          <div className="centered-container w-container">
            <img src="images/House-by-the-School-logo.svg" loading="lazy" alt="" class="image-30" />
          </div>
        </a>
      </header>
      <section id="feature-section" className="feature-section wf-section">
        <div className="container-16 w-container">
          <div className="w-layout-grid grid-7 shadow">
            <div className="w-clearfix">
              <img
                src="images/Birch-4-Sided-front-in-Vintage-Iron.jpg"
                srcSet="
            images/Birch-4-Sided-front-in-Vintage-Iron-p-500.jpeg   500w,
            images/Birch-4-Sided-front-in-Vintage-Iron-p-1080.jpeg 1080w,
            images/Birch-4-Sided-front-in-Vintage-Iron-p-1600.jpeg 1600w,
            images/Birch-4-Sided-front-in-Vintage-Iron-p-2000.jpeg 2000w,
            images/Birch-4-Sided-front-in-Vintage-Iron.jpg         2508w
          "
                height="200"
                width="50"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 82vw, (max-width: 991px) 568px, 940px"
                alt=""
                className="image-40"
              />
              <div className="div-block-19"></div>
            </div>
            <p className="paragraph-11">
              Since 1967, House By The School has been providing the Niagara community with personalized experiences catered to you families needs. Our family has made it our mission to provide
              excellent service and to ensure you end up with the perfect fireplace for your home.
              <br />‍<br />
              House by the School offers you a no-rush, one-on-one experience in order to find your next fireplace. Through an appointment and consultation, you can be assured that all questions and
              concerns will be answered.
            </p>
          </div>
        </div>
      </section>
      <div className="section-10 wf-section">
        <div className="container-10 w-container">
          <div className="html-embed w-embed w-script">
            <div className="elfsight-app-a8d44911-5558-4a86-a840-1ea231052fd0"></div>
          </div>
        </div>
        <div className="div-block-4"></div>
      </div>
      <div className="section-7 wf-section">
        <div className="div-block-5">
          <h1 className="heading-13">Come Visit Our Virtual Showroom</h1>
          <a href="products.html" className="button-3 w-button">
            Shop Now!
          </a>
        </div>
      </div>
      <section id="contact-form" className="contact-form wf-section">
        <div className="w-container">
          <div className="form-block w-form">
            <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="form-4">
              <h2 className="heading-15">Book an Appointment!</h2>
              <div className="contact-form-grid">
                <div id="w-node-d467966a-a693-acc2-5059-97db7bd8a9ce-3f8b9285">
                  <label htmlFor="Name" id="contact-first-name" className="field-label-3">
                    Name:
                  </label>
                  <input type="text" className="shadow w-input" maxLength="256" name="Name" data-name="Name" placeholder="" id="Name" required="" />
                </div>
                <div id="w-node-d467966a-a693-acc2-5059-97db7bd8a9d2-3f8b9285">
                  <label htmlFor="Phone" id="contact-last-name" className="field-label-6">
                    Phone Number:
                  </label>
                  <input type="tel" className="shadow w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="" id="Phone" required="" />
                </div>
                <div id="w-node-d467966a-a693-acc2-5059-97db7bd8a9d6-3f8b9285">
                  <label htmlFor="Email" id="contact-email" className="field-label-5">
                    Email Address:
                  </label>
                  <input type="email" className="shadow w-input" maxLength="256" name="Email" data-name="Email" placeholder="" id="Email" required="" />
                </div>
                <div id="w-node-d467966a-a693-acc2-5059-97db7bd8a9da-3f8b9285">
                  <label htmlFor="Date" id="contact-phone" className="field-label-7">
                    Preferred Date:{" "}
                  </label>
                  <input type="tel" className="shadow date w-input" maxLength="256" name="Date" data-name="Date" placeholder="" id="Date" required="" />
                </div>
              </div>
              <input type="submit" value="Submit" data-wait="Please wait..." className="submit-button-3 shadow w-button" />
            </form>
            <div className="success-message w-form-done">
              <div className="div-block-17">
                Thank you! <br />
                Your submission has been received!
              </div>
            </div>
            <div className="w-form-fail">
              <div className="div-block-16">
                Oops! Something went wrong while submitting the form.
                <br />
                <br />
                Please try again!
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Index;
