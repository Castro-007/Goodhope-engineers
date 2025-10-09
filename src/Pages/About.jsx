import React from "react";
import { AboutTeam, Achievements, FactsComp } from "../Utils";
import { motion } from "motion/react";
import NumbersAni from "../Components/NumbersAni";
import Founder from "../assets/Images/founder.jpeg";
import Aboutconstruct from "../assets/Images/aboutconstruction.jpg";
import Archidesi from "../assets/Images/Archidesi.jpeg";

const About = () => {
  return (
    <div className="lg:px-8 sma:px-4 mda:px-4 ">
      <div className="bg-Aboutbg bg-fixed max-w-7xl mb-16 h-[300px] relative rounded-md bg-cover bg-center sma:bg-top mda:bg-top lg:mx-5">
        <div className="absolute inset-0 gradient-hero bg-black/30 w-full opacity-80 rounded-md"></div>
        <div className="relative flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className=" backdrop-sepia-0 bg-opacity-0 backdrop-blur-xs backdrop-filter w-fit bg-white/70 py-3 px-4 rounded-md  text-black text-3xl md:text-5xl font-Playfair font-medium"
          >
            ABOUT US
          </motion.h1>
        </div>
      </div>
      <div className="my-10 flex sma:flex-col bg-[#f5f5f5] rounded-md p-4 mt-16 mda:flex-col gap-6 justify-around">
        <div className="basis-[50%]">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl w-full text-[#0047AB] sma:text-xl mda:text-xl font-semibold font-Sora"
          >
            GOOD HOPE CONSULTING ENGINEERING SERVICES
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl mt-4 font- italic"
          >
            Creating Engineering solutions that strengthen communities and shape
            a sustainable future.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 text-lg font-Nunito text-[#415D43]"
          >
            {" "}
            Goodhope Engineering Consulting is dedicated to providing innovative and
            reliable civil and structural engineering solutions that meet the
            unique needs of every project. With extensive experience in project
            development, we combine technical expertise, creativity, and a
            commitment to excellence to deliver lasting value to our clients and
            communities. Our team takes pride in building with precision,
            integrity, and a vision for sustainable growth — partnering with
            clients to turn ideas into reality.{" "}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={Aboutconstruct}
            className="rounded-md w-[400px] h-[500px]"
            alt="Ongoing Construction"
          />
        </motion.div>
      </div>
      <div className="my-10 pt-8 flex  sma:flex-col-reverse mda:flex-col bg-[#f5f5f5] rounded-md p-4 mt-16 gap-6 justify-around">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          src={Archidesi}
          className="h-[500px] w-[400px] rounded-md"
          alt="Building Construction"
        />
        <div className="basis-[50%]">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl w-full text-[#0047AB] sma:text-xl mda:text-xl font-semibold font-Sora"
          >
            OUR VISION
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl sma:text-lg mda:text-lg mt-4 font- italic"
          >
            To be a leading engineering consultancy firm known for excellence,
            innovation, and sustainable solutions that positively impact
            communities worldwide and reflect indigenous roots.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 text-xl sma:text-base mda:text-base font-Nunito text-[#415D43]"
          >
            {" "}
            At Goodhope Engineering Consulting, our vision is to be a leading engineering
            consultancy firm recognized for our commitment to excellence,
            innovation, and sustainable solutions. We strive to create a
            positive impact on the communities we serve by delivering projects
            that enhance quality of life, promote environmental stewardship, and
            foster economic growth.
          </motion.p>
        </div>
      </div>
      <div>
        <div className="my-10 pt-8 flex  sma:flex-col  rounded-3xl p-4 mt-16 gap-6 justify-around">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease:"linear" }}
            className="basis-[45%] bg-white rounded-3xl hover:shadow-2xl shadow-3xl  duration-100 transition ease-linear px-4 py-6"
          >
            <div className="flex p-2 gap-1">
              <div className="">
                <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-[#415D43] box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <div className="card__content"></div>
            <h1 className="text-3xl w-full text-[#415D43] sma:text-xl mda:text-xl font-semibold font-Sora">
              OUR MISSION
            </h1>
            <p className="mt-10 text-xl sma:text-base mda:text-base font-Nunito text-black">
              At Goodhope Consulting, our mission is to deliver innovative and
              reliable civil and structural engineering solutions that drive
              sustainable development. We are committed to excellence,
              integrity, and collaboration — ensuring every project adds value
              to clients, strengthens communities, and stands the test of time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease:"linear" }}
            className="basis-[45%] bg-[#0047AB] hover:shadow-2xl shadow rounded-3xl duration-100 transition ease-linear px-4 py-6"
          >
            <div className="flex p-2 gap-1">
              <div className="circle">
                <span className="bg-[#415D43] box inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="">
                <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <div className="card__content"></div>
            <h1 className="text-3xl w-full text-white sma:text-xl mda:text-xl font-semibold font-Sora">
              OUR VALUES
            </h1>
            <p className="mt-10 text-xl sma:text-base mda:text-base font-Nunito text-white">
              At Goodhope Consulting, our values shape everything we do. We
              uphold integrity, pursue excellence, and embrace innovation to
              deliver forward-thinking solutions. With a focus on sustainability
              and collaboration, we build responsibly and create lasting value
              for clients and communities.
            </p>
          </motion.div>
        </div>
      </div>
      <div>
      </div>
      <div className="mt-8 mb-8 mx-8 sma:mx-4 mda:mx-4">
        <h1 className="text-center mb-10 mt-10 text-4xl sma:text-3xl mda:text-3xl font-Sora font-semibold">Facts Abouts Our Company</h1>
        <div className="flex sma:flex-col-reverse mda:flex-col items-end my-16 justify-around ">
          <div>
            <div className="">
              <div className="w-[200px] h-[200px] relative rounded-[100%] border border-gray-500 ">
                <div className="w-[130px] h-[130px] absolute left-9 top-9 rounded-[100%] border border-gray-500"></div>
                <div className="w-[180px] h-[80px] absolute left-3 animate-wiggle top-14 rounded-[100%] border border-gray-500"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 sma:grid-cols-2 mda:grid-cols-1 lg:gap-8 sma:gap-4 mda:gap-4 items-center ">
              {FactsComp.map((x) => (
                <div
                  key={x.Id}
                  className="bg-white/20 w-[350px] shadow-lg h-[300px] sma:h-full mda:h-full rounded-md gap-4 px-4 pt-6 mda:w-[98%] sma:w-[98%]"
                >
                  <img src={x.image} className=" w-16 h-16  sma:text-3xl mda:text-3xl font-Sora font-medium  mb-12 flex" />
                    
                  
                  <h1 className="text-lg sma:text-sm mt-5 mda:text-sm font-Sora font-medium text-[#000000]">
                    {x.Heading}
                  </h1>
                  <p className="text-sm font-Nunito mt-2 font-normal">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
          
          
          
          
          
          
          {/* <div className="grid grid-cols-2 mt-14 sma:grid-cols-1 mda:grid-cols-1 gap-6 justify-around">
              {
                FactsComp.map((x) => (
                  <div key={x.Id} className="flex gap-3">
                    <img src={x.image} className="w-14 h-12 " alt="" />
                    <div>
                      <h1 className="font-Nunito text-2xl font-semibold">{x.Heading}</h1>
                      <p className="font-Nunito text-lg">{x.text}</p>
                    </div>
                  </div>
                ))
              }
          </div> */}
      </div>
      <div>
        <div>
          <h1 className="text-3xl text-start font-Playfair text-[#415D43] pt-8">
            MEET OUR TEAM
          </h1>
          <hr className="border-t-2 border-[#415D43] w-[20%] sma:w-[40%] mda:w-[40%]" />
          <div className="grid grid-cols-3 sma:grid-cols-1 mda:grid-cols-1 gap-6 my-16 justify-around ">
            {AboutTeam.map((x) => (
              <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: x.Id * 0.3 }}
                key={x.Id}
                className="bg-[#EBEBEB] flex flex-col justify-center items-center shadow rounded-md duration-100 transition ease-linear px-4 py-6"
              >
                
                <img
                  src={x.img}
                  alt={x.alt}
                  className="w-[250px] h-[250px] rounded-[100%] mx-auto"
                />
                <h2 className="text-2xl sma:text-xl mda:text-xl font-Sora font-medium mt-4 text-[#415D43]">
                  {x.name}
                </h2>
                <p className="text-sm font-Nunito mt-2 font-normal">
                  {x.position}
                </p>
                <p className="text-sm font-Nunito mt-2 font-normal">
                  {x.email}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
