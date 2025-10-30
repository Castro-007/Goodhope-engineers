import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import Project1 from "../assets/Images/Project/Project1.jpg";
import { HowWeWork, ServicesWeDo } from "../Utils";
import { NavLink } from "react-router-dom";
import { BsArrowDownRight } from "react-icons/bs";

const Services = () => {
  const [filter, setFilter] = useState("ALL SECTORS");

  const filteredData =
    filter === "ALL SECTORS"
      ? ServicesWeDo
      : ServicesWeDo.filter((item) => item.Category === filter);

  const handleClick = (Category) => {
    setFilter(Category);
  };

  const Servico = [
    "ALL SECTORS",
    "Civil Engineering",
    "Structural Engineering",
    "Construction Project Management",
  ];

  return (
    <div className="  mx-6 sma:mx- mda:mx- my-6">
      <div className="bg-white px-2 py-3 shadow-lg rounded-lg">
        <section className="flex sma:flex-col mda:flex-col sma:px-5 mda:px-5 justify-around items-start bg-white ">
          <div className=" lg:mx-8 lg:basis-[35%] pt-8 rounded-lg">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.9 }}
              viewport={{ once: true }}
              className="text-3xl sma:text-2xl mda:text-2xl uppercase font-Playfair"
            >
              COMPREHENSIVE ENGINEERING SERVICES
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.9 }}
            viewport={{ once: true }}
            className="basis-[40%] pt-8"
          >
            <p className=" text-lg font-Sora text-[#415D43]">
              We develop innovative, sustainable solutions to respond to our
              client's need and aspirations.
            </p>
            <p className="mt-8 text-base font-light font-Sora text-[#415D43]">
              At GoodHope Consulting Engineers, we are more than design
              engineers backed by decades of proven expertise in civil,
              structural engineering, as well as project management, we
              consistently exceed local benchmarks by applying global best
              practices.
            </p>
          </motion.div>
        </section>
        <div className=" w-full h-[400px] mt-8">
          <img
            src={Project1}
            loading="lazy"
            className="w-full h-full object-cover bg-contain rounded-md shadow-lg"
            alt=""
          />
        </div>
      </div>
      <section className="mt-20 bg-[#f5f5f5] py-4 lg:px-14 px-">
        <div className="">
          <h1 className="text-4xl sma:text-2xl mda:text-2xl font-Anek">
            WHAT WE OFFER
          </h1>
          <div className="flex flex-wrap mt-12 sma:mt-6 mda:mt-6 justify-center mb-8 items-center sma:gap-1 mda:gap-1 lg:gap-5">
            {Servico.map((x) => (
              <button
                key={x}
                onClick={() => handleClick(x)}
                className={`cursor-pointer transition-all px-4 py-2 mb-4 rounded-lg border font-Anek text-sm
              ${
                filter === x
                  ? "bg-green-600 text-white border-green-700"
                  : "bg-neutral-200 text-black border-green-600 hover:brightness-110"
              }
            `}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="flex justify-around gap-8 sma:items-center mda:items-center sma:flex-col-reverse mda:flex-col-reverse">
            <div className="">
              <button className="border-[#19B38C] group border rounded-full sma:w-fit mda:w-fit sma:text-center mda:text-center w-full px-4 py-2 text-center text-lg hover:bg-green-600  hover:text-white ease-linear duration-300 mt-6">
                <NavLink
                  to="/Contact"
                  className="flex font-Nunito items-center gap-2"
                >
                  Contact us{" "}
                  <span>
                    {" "}
                    <BsArrowDownRight className="group-hover:-rotate-45 ease-linear duration-100" />
                  </span>
                </NavLink>
              </button>
            </div>

            <div className="grid basis-[80%] lg:grid-cols-2 sma:grid-cols-1 mda:grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              {filteredData.map((x) => (
                <motion.div
                  key={x.Id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: x.Id * 0.3 }}
                  className="rounded-3xl p-2 bg-white "
                >
                  <div className=" ">
                    <img
                      src={x.image}
                      alt=""
                      className="w-full sma:w-full overflow-hidden mda:h-24 h-[250px] rounded-2xl"
                    />
                  </div>
                  <div className="flex sma:flex-col px-3 py-5 gap-5">
                    <div>
                      <h1 className="font-Anek text-lg ">{x.Id}</h1>
                      <h1 className="font-Nunito text-2xl font-semibold sma:text-xl  mt-3 ">
                        {x.Service}
                      </h1>
                      <p className="text-sm tracking-wide font-Manrope font-normal">
                        {x.ServiceTitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-5">
          <h1 className="text-4xl sma:text-2xl mda:text-2xl font-Anek lg:my-5">
            OUR WORK PROCESS
          </h1>
          <div className="bg-Servwedobg bg-fixed max-w-7xl mb-16  relative rounded-md bg-cover bg-center sma:bg-top mda:bg-top">
            <div className="absolute inset-0 gradient-hero bg-white/90 w-full opacity-80 rounded-md"></div>
            <div className="relative flex sma:flex-col mda:flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className=" backdrop-sepia-0 bg-opacity-0 flex sma:flex-col mda:flex-col gap-12 items-center justify-between text-center backdrop-blur-xs backdrop-filter w-fit  px-4 rounded-md  "
              >
                {HowWeWork.map((x) => (
                  <motion.div
                    key={x.Id}
                    className="text-center flex flex-col my-5 justify-evenly items-center"
                  >
                    <img src={x.image} className="mb-8" alt="" />
                    <h1 className="text-6xl font-light text-amber-300 text-center sma:text-2xl mda:text-2xl font-Sora">
                      {x.Number}
                    </h1>

                    <h1 className="text-xl font-Anek mt-8 mb-3 font-">
                      {x.StepTitle}
                    </h1>
                    <p className="text-base font-Nunito font-light mb-5">
                      {x.Summary}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
