import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import Project1 from "../assets/Images/Project/Project1.jpg"
import { HowWeWork, ServicesWeDo } from "../Utils";



const Services = () => {

  const [filter, setFilter] = useState('ALL')

  const filteredData = filter === 'ALL' ? ServicesWeDo : ServicesWeDo.filter(item => item.Category === filter)

  const handleClick = (Category) => {
    setFilter(Category)
  }

  const Servico = ["ALL", "Civil Engineering", "Structural Engineering", "Project Management"];


  return (
    <div className="  mx-6 sma:mx-4 mda:mx-4 my-6">
      <div className="bg-white px-2 py-3 shadow-lg rounded-lg">
        <section className="flex sma:flex-col mda:flex-col sma:px-5 mda:px-5 justify-around items-start bg-white ">
          <div className=" lg:mx-8 lg:basis-[35%] pt-8 rounded-lg">
            <h1 className="text-3xl sma:text-2xl mda:text-2xl uppercase font-Playfair">
              COMPREHENSIVE CIVIL ENGINEERING SERVICES
            </h1>
          </div>
          <div className="basis-[40%] pt-8">
            <p className=" text-lg font-Sora text-[#415D43]">
              We develop innovative, sustainable solutions to answer our
              client's most complicated challenges.
            </p>
            <p className="mt-8 text-base font-light font-Sora text-[#415D43]">
              At GoodHope Consulting Engineering, we are more than builders — we are
              partners in turning your vision into lasting reality. With years
              of proven expertise across civil, structural, and project
              management sectors, we deliver projects that stand the test of
              time.
            </p>
          </div>
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
      <section className="mt-20 lg:px-14 px-6">
        <div>
          <h1 className="text-4xl sma:text-2xl mda:text-2xl font-Anek">
            WHAT WE OFFER
          </h1>
          <div className="flex mt-12 justify-center  mb-8 items-center gap-5">
            {Servico.map((x) => (
              <button key={x}
              onClick={() => handleClick(x)}
                className="cursor-pointer transition-all bg-[#1ED2A5] text-white lg:px-4 sma:px-2 mda:px-2 py-2 mb-8 rounded-lg
                    border-blue-600 border-b-[4px] hover:brightness-110 sma:text-xs
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                {x}
              </button>
            ))}
              </div>
            <div className="grid lg:grid-cols-2 sma:grid-cols-1 mda:grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              {
                filteredData.map((x) => (
                  <motion.div
                  key={x.Id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: x.Id * 0.3 }}
                className="rounded-3xl p-2 shadow-xl"
                  >
                    <div className="flex gap-5">
                      <div className="basis-[80%]">
                        <img src={x.image} alt="" className="w-40 sma:w-full sma:h-28 h-40 rounded-2xl" />
                      </div>
                      <div>
                        <h1 className="font-Anek text-lg">{x.Id}</h1>
                        <h1 className="font-Nunito text-2xl sma:text-xl font-medium mt-3 ">{x.Service}</h1>
                        <p className="text-sm font-Nunito ">{x.ServiceTitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              }
            </div>
        </div>
        <div className="mt-12 pt-5">
          <h1 className="text-4xl sma:text-2xl mda:text-2xl font-Anek lg:my-5">HOW WE WORK</h1>
          <div className="bg-Servwedobg bg-fixed max-w-7xl mb-16  relative rounded-md bg-cover bg-center sma:bg-top mda:bg-top">
        <div className="absolute inset-0 gradient-hero bg-white/90 w-full opacity-80 rounded-md"></div>
        <div className="relative flex">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className=" backdrop-sepia-0 bg-opacity-0 flex gap-8 items-center justify-center text-center backdrop-blur-xs backdrop-filter w-fit  px-4 rounded-md  "
          >
            {
              HowWeWork.map((x) => (
                <motion.div
                key={x.Id}
                className="text-center flex flex-col my-5 justify-center items-center"
                >
                  <img src={x.image} className="mb-8" alt="" />
                  <h1 className="text-6xl font-light text-amber-300 text-center sma:text-2xl mda:text-2xl font-Sora">{x.Number}</h1>
                  
                  {/* <img src={x.Arrow} className="float-right ml-8" alt="" /> */}
                  <h3 className="text-xl font-Anek mt-8 font-extralight">{x.StepText}</h3>
                  <h1 className="text-xl font-Anek mt-8 mb-3 font-">{x.StepTitle}</h1>
                  <p className="text-base font-Nunito font-light mb-5">{x.Summary}</p>
                </motion.div>
                
              ))
            }
            
          </motion.div>
        </div>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
