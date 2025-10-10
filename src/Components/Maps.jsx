import React from "react";

const Maps = () => {
  return (
    <div>
      <section>
        <div className="max-w-5xl">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.50999148649!2d3.4787816!3d6.4568789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf43516ca6171%3A0xff396563657a147f!2sZuken%20Apartments!5e0!3m2!1sen!2sng!4v1760051877762!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goodhope Engineering Consultants Services"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maps;
