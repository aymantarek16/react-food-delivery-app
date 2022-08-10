import React from "react";
import { Helmet } from "react-helmet";
import CommonSection from "../components/Ui/common-section/CommonSection";
import ContactForm from "../components/Ui/Contact/contact-form/ContactForm";
import ContactMap from "../components/Ui/Contact/contact-map/ContactMap";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Food Delivery | Contact</title>
      </Helmet>
      <CommonSection title="Contact" />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default Contact;
