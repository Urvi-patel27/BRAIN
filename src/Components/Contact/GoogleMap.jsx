import React from "react";

const GoogleMap = () => {
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8479531387457!2d72.88643887424558!3d21.237877080565248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa0b44e199f%3A0xb2b2adaf3c125594!2sOpera%20Business%20Hub!5e0!3m2!1sen!2sin!4v1737105804212!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
