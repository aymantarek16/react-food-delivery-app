import React from "react";
import "./map-contact.scss";

const ContactMap = () => {
  return (
    <>
      <div className="map container">
        <iframe
          title="contact-map"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.81809818098!2d106.68010981444!3d10.8120981444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8f8!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBI4buNYyA!5e0!3m2!1svi!2s!4v159909818098`}
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>
    </>
  );
};

export default ContactMap;
