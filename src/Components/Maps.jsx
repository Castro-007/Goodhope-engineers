import React from "react";

const Maps = () => {
  return (
    <div>
      <section>
        <div className="max-w-5xl">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.503594629189!2d3.4771874232124773!3d6.457695723928239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4407a31689f%3A0xf8e3bcd2d7e0475b!2s68%20Chuks%20Onyebuchi%20Dr%2C%20Lekki%20Phase%20I%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1760476234209!5m2!1sen!2sng"
              className="w-full h-[450px] border-0" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Maps;
