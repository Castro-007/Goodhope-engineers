import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../lib/Client";
import {format} from 'date-fns'
import {PortableText} from '@portabletext/react'
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
    <NavLink to='/Project'
    className='ml-6 mb-16  hover:bg-[#69ad66] sma:bg-[#69ad66] mda:bg-[#69ad66] hover:text-white sma:text-white mda:text-white inline-flex px-2 py-2 duration-150 ease-linear delay-75 rounded-3xl mt-10  gap-4 items-center '
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

      {blogpost.categories?.map((cat, i) => (
        <span
        key={i}
                      className="text-xs font-Anek bg-green-100 text-green-800 px-2 py-1 rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
          </div>
          <PortableText 
          value={blogpost.body} 
          className="font-Nunito"
          /> 
        </section>
      )}
    </>
  );
};

export default ProjectPost;
