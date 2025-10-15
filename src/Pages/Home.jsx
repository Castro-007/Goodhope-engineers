import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import NumbersAni from "../Components/NumbersAni";

import {
  Achievements,
  imageSlider,
  ScrollText,
  ServiceHome,
  Testimonial,
  UncoverImg,
} from "../Utils";
import { BsArrowDownRight, BsArrowRight } from "react-icons/bs";
import { TbArrowBadgeRight } from "react-icons/tb";
import Swiperjss from "../Components/Swiper";
import { FaWhatsapp } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

const Home = () => {
  const display = [...ScrollText, ...ScrollText];
  // const Affdisplay = [
  //   ...Affiliates,
  //   ...Affiliates,
  //   ...Affiliates,
  //   ...Affiliates,
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [slideDirection, setSlideDirection] = useState("right");

  //   const prevSlide = () => {
  //   setSlideDirection("left");
  //   const newIndex =
  //     currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   setSlideDirection("right");
  //   const newIndex =
  //     currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 6000); // Change slide every 6 seconds

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, [currentIndex]);

  return (
    <div className="bg-  lg:px-6 lg:ml-6 sma:px-4 mda:px-4 px-4 ">
      <section>
        <div className="bg-homebg h-[550px] lg:bg-fixed max-w-6xl relative rounded-md bg-cover bg-center sma:bg-top mda:bg-top ">
          <div className="absolute inset-0  gradient-hero bg-black/20 w-full opacity-80"></div>
          <div>
            <motion.h1 
            initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{once: true}}
            className="text-5xl font-Sora font-medium text-white pt-32 px-8 sma:text-3xl mda:text-3xl">
              Building Dreams
            </motion.h1>
            <motion.h1
             initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{once: true}}
            className="text-2xl max-w-xl font-Playfair uppercase font-medium text-white pt-8 px-8 sma:text-2xl mda:text-2xl">
              innovative designs, and sustainable
              solutions for every project
            </motion.h1>

            <motion.button
             initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.9 }}
              viewport={{once: true}}
              className="bg-white text-center ml-8 font-Nunito w-48 rounded-2xl h-14 mt-14 relative z-0 text-black text-xl sma:text-base mda:text-base font-medium group"
              type="button"
            >
              <NavLink to="/Contact">
                <div className="bg-[#1ED2A5] text-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-[1] duration-500">
                  ⟶
                </div>
                <p className="translate-x-2">Contact Us</p>
              </NavLink>
            </motion.button>
            {/* <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{once: true}}
            >
              <div className="grid z-20 lg:grid-cols-4 overflow-hidden sma:grid-cols-2 justify-center items-center mda:grid-cols-2 gap-6 pt-28 ">
                {Achievements.map((x) => (
                  <div
                    key={x.Id}
                    className="bg-[#4C9683] rounded-md overflow-hidden max-w-sm sma:w-44 lg:space-x-5 text-white flex "
                  >
                    <div className="text-3xl overflow-hidden font-Sora font-medium pt-4 px-4 sma:text-lg mda:text-lg"style={{ minWidth: "80px", textAlign: "right" }}>
                      <NumbersAni n={x.number} />
                    </div>
                    <div>
                      <h1 className="text-xl font-Sora font-medium pt-2 pl-2 sma:text-sm mda:text-sm">
                        {x.title}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
        <div className=" mt-8 overflow-hidden sma:mt-12">
          <motion.div
            className="py-4 flex gap-5 whitespace-nowrap items-center justify-center"
            animate={{ x: ["0%", "-101%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            viewport={{ once: true }}
          >
            {display.map((x, i) => (
              <div
                key={`${x.Id}-${i}`} // stable + unique key
                className="text-xs font-Sora shrink-0 font-light text-[#19B38C]"
              >
                {x.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="sma: mda: lg:mt-0 pb-8">
        <div className="flex sma:flex-col mda:flex-col justify-around items-center rounded-md mt-16 sma:mt-5 mda:mt-5">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="basis-[30%] sma:mb-5 mda:mb-5"
          >
            <div className="">
              <h1 className="text-2xl font-semibold text-[#4C9683] tracking-tighter font-Playfair">
                Uncover the Legacy of Goodhope Consulting Engineers
              </h1>
              <p className="text-lg tracking-[-0.01em] text-black  font-Nunito pt-4">
                Goodhope Consulting Engineers is a forward-thinking engineering
                solutions provider committed to delivering reliable, innovative,
                and sustainable results. Founded by a team of experienced
                professionals, the firm specializes in offering tailored
                engineering services that combine technical expertise with
                practical insight.
              </p>
              <button className="border-[#19B38C] border rounded-full  flex px-8 py-2 items-center text-black text-center hover:bg-[#19B38C] hover:text-white duration-300 mt-6">
                <NavLink to="/About">
                  <span>Our Story</span>
                </NavLink>
              </button>
            </div>
          </motion.div>
          {UncoverImg.map((x) => (
            <motion.div
              key={x.Id}
              className=" flex sma:flex-col mda:flex-col justify-end gap-2 "
              initial={{ opacity: 0, y: 160 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: x.Id * 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src={x.img}
                alt={x.alt}
                className={x.classNames}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div>
          <hr className="border-t-2 border-[#415D43] max-w-6xl mt-16 sma:mt-12 mda:mt-12" />

          <div className="mt-10">
            <h1 className="text-3xl text-start font-Playfair flex items-center text-black pt-8">
              <TbArrowBadgeRight className="text-black" /> OUR SERVICE OFFERINGS
            </h1>
            <div className="flex lg:border-y lg:border-[#415D43] py-8 sma:flex-col mt-14 mda:flex-col justify-between items-start">
              <div className="basis-[30%] sma:mb-4 mda:mb-4 ">
                <h1 className=" text-xl font-Nunito text-[#69AD66] font-medium">
                  We Offer a Range of Services to Meet All Types of Engineering
                  Needs.
                </h1>
                <button className="border-[#19B38C] group border rounded-full  px-8 py-2 text-center text-lg hover:bg-[#19B38C] hover:text-white ease-linear duration-300 mt-6">
                  <NavLink
                    to="/Services"
                    className="flex font-Nunito items-center gap-2"
                  >
                    Our Services{" "}
                    <span>
                      {" "}
                      <BsArrowDownRight className="group-hover:-rotate-45 ease-linear duration-100" />
                    </span>
                  </NavLink>
                </button>
              </div>
              <div className="grid lg:border-l lg:border-[#415D43] pl-4 lg:grid-cols-2 sma:items-center mda:items-center gap-6 sma:grid-cols-1 basis-[60%] mda:grid-cols-1">
                {ServiceHome.map((x) => (
                  <motion.div
                    key={x.Id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: x.Id * 0.3 }}
                    viewport={{ once: true }}
                    className={x.classNames}
                  >
                    <div>
                      <motion.div
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                        transition={{
                          duration: 3,
                          ease: "easeInOut",
                          delay: x.Id * 1,
                        }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <x.SocialIcon className="text-4xl text-[#415d43]" />
                      </motion.div>
                      <h1 className=" text-2xl font-Anek text-[#415D43]">
                        {x.title}
                      </h1>
                      <p className=" text-base font-Nunito mt-2">{x.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-4xl sma:text-2xl mda:text-2xl tracking-[-0.01em] text-[#0A0A0A] font-Playfair mt-8 flex sma:items-start mda:items-start items-center">
                <TbArrowBadgeRight className="text-4xl" /> Diverse Solution
                tailored to your every need
              </h1>
              <button className="font-Sora text-xl mt-8 hover:scale-[1.01] overflow-hidden duration-300 ease-linear">
                <NavLink to='/Services' className="flex items-center gap-2">
                  <MdArrowRightAlt className="bg-[#1ED2A5] text-white text-4xl " /> Learn
                  More
                </NavLink>
              </button>
              <div className="flex sma:flex-col mda:flex-col justify-center gap-2 items-center overflow-hidden rounded-3xl mt-8">
                {imageSlider.map((x) => (
                  <div className="overflow-hidden" key={x.Id}>
                    <img
                      key={x.Id}
                      src={x.img}
                      alt="service"
                      className="hover:scale-105 overflow-hidden duration-500 ease-linear mt-8 max-h-[220px] w-full object-cover"
                    />
                    <h1 className="font-Azeret text-sm mt-3">{x.headtxt}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-0">
        <h1 className="text-3xl text-start font-Playfair flex items-center text-black pt-8">
          <TbArrowBadgeRight className="text-black" /> OUR PROJECTS
        </h1>
        <Swiperjss />
        <button className="border-[#1ED2A5] my-4 group border rounded-full  px-8 py-2 text-center text-lg hover:bg-[#1ED2A5] hover:text-white ease-linear duration-300 mt-6">
          <NavLink
            to="/Project"
            className="flex font-Nunito items-center gap-2"
          >
            All Projects{" "}
            <span>
              {" "}
              <BsArrowRight className="group-hover:translate-x-4 ease-linear duration-200" />
            </span>
          </NavLink>
        </button>
        <hr className="border-t-2 border-[#415D43] max-w-6xl mt-12 sma:mt-8 mda:mt-8" />

        <div className="mt-5">
          <div>
            <h1 className="text-3xl text-start font-Playfair flex items-center text-black pt-8">
              <TbArrowBadgeRight className="text-black" /> CLIENT TESTIMONIALS
            </h1>

            <div className="grid grid-cols-3 sma:grid-cols-1 mt-7 mda:grid-cols-1 gap-4">
              
                {Testimonial.map((x) => (
                  <motion.div
                    key={x.Id}
                    initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: x.Id * 0.5 }}
                    className={x.style}
                  >
                    <div className="flex">
                      {x.svg.map((star, i) => (
                        <img
                          key={i}
                          src={star}
                          alt=""
                          className="flex w-6 h-6"
                        />
                      ))}
                    </div>
                    <p className="font-Manrope font-medium mt-3">{x.Text}</p>
                    <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                      <cite className="pe-3 border-r-2 border-gray-200 font-medium text-gray-900 ">
                        {x.Client}
                      </cite>
                      <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                        {x.From}
                      </cite>
                    </figcaption>
                  </motion.div>
                ))}
              
            </div>
          </div>
        </div>

        {/* <div>
          <h1 className="text-3xl text-start font-Playfair text-[#415D43] pt-8 lg:pb-16">
            OUR AFFILIATES
          </h1>
          <div className=" overflow-hidden w-full sma:mt-12 mb-10 ">
            <motion.div
              className="py-4 flex gap-5 sma:gap-2 mda:gap-2 whitespace-nowrap bg-blend-multiply items-center justify-center"
              animate={{ x: ["0%", "101%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              viewport={{ once: true }}
            >
              {Affdisplay.map((x, i) => (
                <img
                  key={`${x.Id}-${i}`} // stable + unique key
                  className="text-xs font-Sora shrink-0 bg-blend-multiply w-32 sma:w-24 mda:w-24 font-medium  h-16  hover:opacity-100 duration-300"
                  src={x.img}
                />
              ))}
            </motion.div>
          </div>
        </div> */}
      </section>
      {/* <hr className="border-t-2 border-[#415D43] max-w-6xl mt-12 sma:mt-8 mda:mt-8" /> */}

      <div className="mb-8 mt-8">
        <div className="flex sma:flex-col max-w-6xl bg-Lookforbg relative mda:flex-col bg-cover bg-center sma:bg-top mda:bg-top h-[400px] text-amber-300 justify-center text-center rounded-3xl items-start pt-5 sma:mt-12 mda:mt-12">
          <div className="absolute inset-0 gradient-hero bg-teal-900/50 w-full opacity-80"></div>
          <div className="relative ">
            <p className="font-Nunito lg:font-extralight font-light sma:text-2xl mda:text-2xl text-3xl">
              LOOKING FOR A QUALIFIED TEAM TO DELIVER YOUR
            </p>
            <p className="font-Nunito sma:text-2xl mda:text-2xl text-3xl font-medium mb-3 mt-6">
              NEXT ENGINEERING PROJECT?
            </p>
            <h1 className="text-4xl font-Varela sma:text-2xl mda:text-2xl uppercase font-medium lg:py-6 ">
              GET A QUOTE FOR YOUR NEXT PROJECT
            </h1>
            <button className="my-8">
              <NavLink
                to="/Contact"
                className="border-[#415D43] text-white hover:bg-white hover:text-black duration-300 my-7 delay-100 ease-linear border bg-black py-3 px-2 rounded-md"
              >
                HIRE US NOW
              </NavLink>
            </button>
          </div>
        </div>
      </div>
          {/* <div className="basis-[50%] text-[#0047AB] text-start w-full py-2 px-4 rounded-md ">
            <div>
              <h1 className="text-3xl font-Nunito font-medium mb-6">WHY GOODHOPE ENGINEERS?</h1>
              <p className="font-Nunito font-extralight text-3xl">LOOKING FOR A QUALIFIED TEAM TO DELIVER YOUR</p>
              <p className="font-Nunito text-3xl font-medium mt-6">NEXT ENGINEERING PROJECT?</p>
            </div>
          </div>
          <div className="lg:basis-[30%]">
            <h1 className="text-3xl text-start font-Playfair text-[#415D43] lg:pb-16 pb-8">
              SPEAK TO AN EXPERT
            </h1>
            <button>
              <NavLink to="/Contact" className="hover:bg-[#415D43] text-[#415D43] font-Nunito border border-[#415D43] hover:text-white rounded-full px-8 py-3 sma:mt-8 duration-300">
                GET QUOTE
              </NavLink>
            </button>
          </div> */}

      {/* <div className="fixed bottom-8 right-8 animate-bounce bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-500 z-50">
        <FaWhatsapp className="text-3xl" />
      </div> */}
    </div>
  );
};

export default Home;
