import React from "react";
import { NavLink } from "react-router-dom";
import LogosWhite from "../assets/Images/Logos/GHV3_coloursunrise_wht.svg";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { NavBlink } from "../Utils";
const Footer = () => {
  return (
    <div>
      <section className="flex sma:flex-col mda:flex-col justify-around items-start bg-[#3486A0] text-white py-6 pt-12 sma:px-4 space-y-5 mda:px-4">
        <div className="basis-[30%] ">
          <NavLink to="/">
          <img src={LogosWhite} alt="Goodhope Logo" className="w-44 mb-3" />

          </NavLink>
          {/* © 2024 Goodhope Consulting Engineering Services. All rights reserved. */}
          <p className=" text-base font-light font-Nunito ">
            Goodhope Consulting Engineering Services is an independent firm
            specializing in civil and structural engineering, as well as project
            development. We deliver professional consultancy solutions to
            clients in both the private and public sectors, ensuring every
            project is handled with precision, innovation, and integrity. Our
            commitment is to create sustainable results that stand the test of
            time.
          </p>
          <h3 className="font-Playfair mt-8 ml-4 text-lg">Follow</h3>
          <div className="flex gap items-center">
            <a
              href=""
              className="rounded-full transition-all delay-100 p-3 hover:text-[#EAFF47] ease-linear text-white group "
            >
              <FaInstagram className="text-xl delay-100 cursor-pointer ease-in-out" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all delay-100 rounded-full p-3 hover:text-[#EAFF47] ease-linear text-white group "
            >
              <FaLinkedin className="text-xl  cursor-pointer delay-100 ease-in-out" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 transition-all delay-100 hover:text-[#EAFF47] ease-linear text-white  group"
            >
              <FaXTwitter className="text-xl  cursor-pointer delay-100 ease-in-out" />
            </a>
            <a
              href="https://www.Facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 transition-all delay-100 hover:text-[#EAFF47] ease-linear text-white  group"
            >
              <FaFacebook className="text-xl  cursor-pointer delay-100 ease-in-out" />
            </a>
          </div>
        </div>
        <div className=" ">
          <h1 className="text-xl font-Playfair font-thin">Navigate</h1>
          <hr className="border-t-2 border-[#f4f4f4] max-w-6xl mt-1 " />
          <ul className="space-y-4 mt-4">
            {
              NavBlink.map((x) => (
                <li key={x.Id} className="text-base font-extralight font-Sora group transition-all delay-100 cursor-pointer ease-in-out">
                  <NavLink to={x.Link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#EAFF47] group"
                        : "text-white transition delay-150 hover:text-[#EAFF47]"
                    }
                  >{x.name}</NavLink>
                  <div className="group-hover:w-16 h-[2px] ease-linear delay-100 w-0 transition-all bg-[#EAFF47]"></div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-Playfair font-medium">Engineering Services</h1>
          <hr className="border-t-2 border-[#f4f4f4] max-w-6xl mt-1 " />
          <ul className="space-y-4 mt-4">
            {
              ["Civil Engineering", "Structural Engineering","Project Management"].map((x) => (
                <li key={x} className="text-base font-extralight font-Sora ">{x}</li>
              ))
            }
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-Playfair font-medium">Contact Us</h1>
          <hr className="border-t-2 border-[#f4f4f4] max-w-6xl mt-1 " />
          <h1 className="flex gap-2 mt-4 font-Sora font-extralight text-base">
            <div className="rounded-full bg-[#1FD6A8] py-2 px-2 w-fit h-fit">
            <FaMapMarkerAlt className="text-xl"/> 
            </div>
             68ab Chuks Onyebuchi Drive <br />
Off Castle & Temple Street. <br />
Lekki Phase 1, Lagos.
</h1>
          <div className="flex gap-2 mt-4 font-Sora font-extralight text-base" href="tel:+27767565533">
            <div className="rounded-full bg-[#1FD6A8] py-2 px-2 h-fit w-fit">
            <FaPhoneAlt className="text-xl"/> 
            </div>
            <div>
          <a className="flex gap-2 font-Sora font-extralight text-base" href="tel:+2348151985253"> +234-815-1985-253</a>
          <a className="flex gap-2 font-Sora font-extralight text-base" href="tel:+27767565533"> +27-7675-65533</a>

            </div>
            </div>
          <div >
          <a className="flex gap-2 mt-4 font-Sora font-extralight text-base" href="mailto:info@goodhopeengineers.com">
            <div className="rounded-full bg-[#1FD6A8] py-2 px-2 h-fit w-fit">
            <FaEnvelope className="text-xl"/> 
            </div>
            info@goodhopeengineers.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
