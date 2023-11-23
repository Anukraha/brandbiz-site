import React from "react";
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import Split from '../Split';

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    // alert(JSON.stringify(values, null, 2));
                    // show message
                    const formData = new FormData();

                    formData.append('name', values.name);
                    formData.append('email', values.email);
                    formData.append('message', values.message);

                    const res = await axios.post('/contact.php', formData);

                    if (!res) return;

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button type="submit" className={`btn-curve ${theme === 'dark' ? 'btn-lit':'btn-color'} disabled`}>
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">arun@brandmonk.biz</a><br></br>
                    <a href="#0">work@brandmonk.biz</a>
                  </h5>
                  <h5>+91 98400 54814  /+91 73977 55655</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                  <span>Brandmonk Food & Beverages PVT LTD.</span><br></br>
                  <span>Nishanth Plaza, 2nd Floor, </span>
                  <span>E Venkatasamy Rd, R S Puram West,</span>
              <span>Coimbatore, Tamil Nadu – 641002.</span>
                  </h6>
                </div>
                <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="https://www.facebook.com/BrandMonkconsulting/" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/brandmonkconsulting/" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/brandmonkconsulting/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@brandmonkconsulting2088" className="icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3475109212986!2d76.94793557422568!3d11.01253215479602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c48c74a221%3A0xaa942720f64661aa!2sBrand%20Monk%20FnB%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1686208909911!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
            Copyright 2022 - Designed and developed by Brandmonk Consulting
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
