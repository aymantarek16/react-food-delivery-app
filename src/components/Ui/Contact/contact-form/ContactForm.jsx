import React, { useState } from "react";
import "./contact-form.scss";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInfo = {
      message: message,
      name: name,
      email: email,
      subject: subject,
    };
    console.log(formInfo);
  };
  return (
    <>
      <div className="getTouch container">
        <form action="#" className="getTouch_form" onSubmit={handleSubmit}>
          <h2>Get in Touch </h2>
          <textarea
            name=""
            id=""
            cols="40"
            rows="12"
            placeholder="Enter Messege"
            className="textarea"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="nameAdress">
            <input
              type="text"
              className="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="email"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input
            type="text"
            className="subject"
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <button className="addToCart__btn">SEND</button>
        </form>

        <div className="getTouch_all-icons">
          <div className="getTouch_all-icons_icon">
            <i className="ri-home-8-line"></i>
            <div className="getTouch_all-icons_icon_info">
              <h6>Buttonwood, California.</h6>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="getTouch_all-icons_icon">
            <i className="ri-phone-line"></i>
            <div className="getTouch_all-icons_icon_info">
              <h6>+1 253 565 2365</h6>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="getTouch_all-icons_icon">
            <i className="ri-mail-line"></i>
            <div className="getTouch_all-icons_icon_info">
              <h6>support@colorlib.com.</h6>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
