/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> arun@brandmonk.biz  /
work@brandmonk.biz
                  </li>
                  <li>
                    <span>Address : </span> Brandmonk Food & Beverages PVT LTD.
Nishanth Plaza, 2nd Floor, 
E Venkatasamy Rd, R S Puram West,
Coimbatore, Tamil Nadu – 641002.
                  </li>
                  <li>
                    <span>Phone : </span> +91 98400 54814  / 
+91 73977 55655
                  </li>
                </ul>
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
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>subscribe to our newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
           
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
          Copyright 2022 - Designed and developed by Brandmonk Consulting.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
