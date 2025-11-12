import React from "react";
import { AboutTeam, Achievements, FactsComp, Affiliates } from "../Utils";
import { motion } from "motion/react";
import NumbersAni from "../Components/NumbersAni";
import Aboutconstruct from "../assets/Images/abtcollab.jpg";
import Archidesi from "../assets/Images/Archidesi.jpeg";
import Accordion from "../Components/Accordion";
import Frame70 from "../assets/Images/Services/Frame 70.png";
import { FaAngleRight, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="lg:px-8 sma:px-4 mda:px-4 ">
      <div className="bg-Aboutbg lg:bg-fixed max-w-7xl mb-16 h-[300px] relative rounded-md bg-cover bg-center sma:bg-top mda:bg-top lg:mx-5">
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
            GOODHOPE CONSULTING ENGINEERS
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
            Goodhope Consulting Engineers is dedicated to providing innovative
            and reliable civil and structural engineering solutions that meet
            the unique needs of every project. With extensive experience in
            project development, we combine technical expertise, creativity, and
            a commitment to excellence to deliver lasting value to our clients
            and communities. Our team takes pride in designing with precision,
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
            className="rounded-md w-[350px] h-[500px]"
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
          className="h-[400px] w-[400px] rounded-md"
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
            To lead African infrastructure designs with local insight, resilient
            innovation, and a legacy that reflects our roots.
          </motion.h3>
          {/* <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 text-xl sma:text-lg mda:text-lg font-Nunito text-[#415D43]"
          >
            {" "}
            At Goodhope Engineering Consulting, our vision is to be a leading
            engineering consultancy firm recognized for our commitment to
            excellence, innovation, and sustainable solutions. We strive to
            create a positive impact on the communities we serve by delivering
            projects that enhance quality of life, promote environmental
            stewardship, and foster economic growth.
          </motion.p> */}
        </div>
      </div>
      <div>
        <div className="flex justify-between sma:flex-col mda:flex-col">
          <div className="my-10 basis-[40%] pt-8 rounded-3xl p-4 mt-16 gap-6 justify-around">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: "linear" }}
              className=" bg-[#f5f5f5] rounded-3xl hover:shadow-2xl shadow-3xl mb-8 duration-100 transition ease-linear px-4 py-6"
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
              <p className="mt-10 text-xl sma:text-lg mda:text-lg font-Nunito text-black">
                To deliver purposeful and sustainable engineering solutions that
                meet clients’ needs and drive lasting impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: "linear" }}
              className=" bg-[#0047AB] hover:shadow-2xl shadow rounded-3xl duration-100 transition ease-linear px-4 py-6"
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
              <p className="mt-10 text-xl sma:text-lg mda:text-lg font-Nunito text-white">
                We operate with integrity, uphold the highest standard of
                professionalism, ensure uncompromising quality, and strive for
                excellence in every solution we deliver.
              </p>
            </motion.div>
          </div>
          <div className="basis-[50%]">
            <img src={Frame70} className="h-[700px]" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-10 mb-16">
        <div>
          <h1 className="text-3xl text-start font-Playfair text-[#415D43] pt-8 lg:pb-16">
            OUR CERTIFICATIONS
          </h1>
          <div className=" overflow-hidden w-full sma:mt-12 mb-10 ">
            <div className="py-4 grid lg:grid-cols-4 sma:grid-cols-2 mda:grid-cols-2 gap-5 sma:gap-2 mda:gap-2 whitespace-nowrap bg-blend-multiply items-center justify-center">
              {Affiliates.map((x, i) => (
                <motion.img
                  key={`${x.Id}-${i}`} // stable + unique key
                  initial={{ x: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: x.Id * 0.3 }}
                  viewport={{ once: true }}
                  className="text-xs font-Sora shrink-0 bg-blend-multiply w-48  sma:w-44 mda:w-44 font-medium  h-24  hover:opacity-100 duration-100"
                  src={x.Logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-8 mx-8 sma:mx-4 mda:mx-4">
        <h1 className="text-center mb-10 lg:pt-16 text-4xl sma:text-3xl mda:text-3xl font-Sora font-semibold">
          OUR CORE VALUES
        </h1>
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
            <div className="grid grid-cols-2  sma:grid-cols-1 mda:grid-cols-1 lg:gap-8 sma:gap-4 mda:gap-4 items-center ">
              {FactsComp.map((x) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: x.Id * 0.5 }}
                  key={x.Id}
                  className={x.classNames}
                >
                  <img src={x.image} className={x.imgClassName} />

                  <h1 className={x.headingClassname}>{x.Heading}</h1>
                  <p className={x.textClassName}>{x.text}</p>
                </motion.div>
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
      <div className="pt-10 mb-8 bg-[#f5f5f5] rounded-md p-4 shadow-md">
        <h1 className="text-3xl uppercase sma:text-3xl mda:text-3xl text-[#415D43] text-center mb-16 font-Playfair font-medium mt-10">
          Why Choose <span className="text-[#0047AB]">GOODHOPE</span>
        </h1>
        <div className="text-start  flex justify-center self-center px-5 ">
          <div className="w-fit  rounded-md p-6 grid gap-6 sma:gap-4 mda:gap-4">
            <Accordion
              head="Decades of international experience"
              answer="Our leadership and technical teams bring a wealth of global expertise, delivering solutions that meet international standards while responding to local realities"
            />
            <Accordion
              head="Pan-African Network and Resources"
              answer="We leverage a vast pool of expert partners and resources across Africa, enabling multidisciplinary collaboration and agile project delivery in diverse contexts."
            />
            <Accordion
              head="South Africa-Nigeria Bridge"
              answer="We serve as a strategic link between professionals in South Africa and Nigeria, fostering knowledge exchange, innovation, and excellence across the built environment sector"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-3xl text-start font-Playfair text-[#415D43] pt-8">
            MEET OUR TEAM
          </h1>
          {/* <hr className="border-t-2 border-[#415D43] w-[20%] sma:w-[40%] mda:w-[40%]" /> */}
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
                  className="w-[250px] h-[250px] rounded-[100%] "
                />
                <h2 className="text-2xl sma:text-xl uppercase mda:text-xl font-Sora font-medium mt-4 text-[#415D43]">
                  {x.name}
                </h2>
                <p className="text-sm font-Nunito mt-2 font-normal">
                  {x.position}
                </p>
                <p className="text-base font-Nunito mt-2 font-normal">
                  {x.email}
                </p>
                <a
                  href="https://www.linkedin.com/in/olumide-oj-ajayi-4a351735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all flex font-medium font-Anek gap-1 delay-100 rounded-full ease-in-out p-3 hover:text-opacity-55 underline text-black group "
                >
                  <FaAngleRight />{" "}
                  <FaLinkedin className="text-xl  cursor-pointer " /> Linkedln
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
