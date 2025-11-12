import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "motion/react";
import client from "../lib/Client";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { FaArrowLeft } from "react-icons/fa";
const ProjectPost = () => {
  const [blogpost, setBlogPost] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        slug,
        body,
        publishedAt,
        mainImage{
        asset -> {
          _id,
          url
        },
        alt
        },
        images[]{ 
          asset->{
            _id,
            url
          },
          alt
        },
        "name" : author -> name,
        "categories": categories[]->title,
      }`
      )
      .then((data) => {
        setBlogPost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${blogpost.title}`;
  }, [blogpost.title]);

  if (!blogpost) return <p className="text-center my-10">Loading project...</p>;
  return (
    <>
      <NavLink
        to="/Project"
        className="ml-6 mb-16  hover:bg-[#69ad66] sma:bg-[#69ad66] mda:bg-[#69ad66] hover:text-white sma:text-white mda:text-white inline-flex px-2 py-2 duration-150 ease-linear delay-75 rounded-3xl mt-10  gap-4 items-center "
      >
        <FaArrowLeft /> Back to Projects
      </NavLink>
      {blogpost && (
        <section className="mx-6 mb-5">
          {blogpost.mainImage && (
            <img
              className="h-[500px] w-full  rounded-2xl"
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt || blogpost.title}
            />
          )}
          <h1 className="mt-6 text-4xl font-Sora">{blogpost.title}</h1>
          <p className="text-sm font-Anek mt-4 text-gray-500 mb-4">
            By {blogpost.name || "Goodhope Consulting Engineers"} &middot;{" "}
            {blogpost.publishedAt
              ? format(new Date(blogpost.publishedAt), "MMMM dd, yyyy")
              : "Date not available"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2 mb-6">
            <span className="text-sm font-Manrope font-medium capitalize">
              Service Offered:
            </span>
            {blogpost.categories?.map((cat, i) => (
              <span
                key={i}
                className="text-xs font-Anek bg-green-100 text-green-800 px-2 py-1 rounded-md"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="font-Varela decoration-black list-disc text-base">
            <PortableText value={blogpost.body} className="font-Manrope" />
          </div>

          {blogpost.images && blogpost.images.length > 0 && (
            <div className="grid lg:grid-cols-3 w-full sma:grid-cols-1 mdaa:grid-cols-2 mda:grid-cols-1 gap-3 sma:gap-4 mda:gap-4 my-12 ">
              {blogpost.images.map((img, i) => {
                const url = img?.asset?.url;
                if (!url) return null;
                return (
                  <img
                    src={url}
                    key={i}
                    alt={img.alt || `${blogpost.title} image ${i + 1}`}
                    className=" mdaa:gap-4 w-[400px] h-[270px] object-cover rounded shadow"
                  />
                );
              })}
            </div>
          )}
        </section>
      )}
            <div className="lg:ml-8 mx-4 mb-8 mt-16 ">
        <div className="flex sma:flex-col max-w-6xl bg-Lookforbg relative mda:flex-col bg-cover bg-center sma:bg-top mda:bg-top h-[400px] text-amber-300 justify-center text-center rounded-3xl items-start pt-5 sma:mt-12 mda:mt-12">
          <div className="absolute inset-0 gradient-hero bg-teal-900/50 w-full opacity-80 rounded-3xl"></div>
          <div className="relative ">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="font-Nunito lg:font-extralight font-light sma:text-2xl mda:text-2xl text-3xl"
            >
              LOOKING FOR A QUALIFIED TEAM TO DELIVER YOUR
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
              className="font-Nunito sma:text-2xl mda:text-2xl text-3xl font-medium mb-3 mt-6"
            >
              NEXT ENGINEERING PROJECT?
            </motion.p>
            <h3 
            className="text-3xl font-Varela sma:text-xl mda:text-2xl font-medium lg:py-6 ">
              REQUEST OUR SERVICE FOR YOUR NEXT PROJECT
            </h3>

            <button className="mt-8">
              <NavLink
                to="/Contact"
                className="border-[#415D43] text-white hover:bg-white hover:text-black duration-300 delay-100 ease-linear border bg-black py-3 px-6 rounded-md lg:my-8 sma:my-4 mda:my-4"
              >
                HIRE US NOW
              </NavLink>
            </button>
            
            {/* <motion.button
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
              viewport={{ once: true }}
              className="my-8"
            >
              <NavLink
                to="/Contact"
                className="border-[#415D43] text-white hover:bg-white hover:text-black duration-300 delay-100 ease-linear border bg-black py-3 px-2 rounded-md"
              >
                HIRE US NOW
              </NavLink>
            </motion.button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPost;
