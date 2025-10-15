import React, {useState,useEffect} from 'react'
import { motion } from "motion/react";
import client from '../lib/Client'
import { NavLink } from 'react-router-dom'
import {format} from 'date-fns'

const Project = () => {
  const [stories, setStories] = useState([])
const [filter, setFilter] = useState('ALL SECTORS')
  useEffect(() => {
    client.fetch(
      `*[_type == "post"]{
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
      } | order(publishedAt desc)`
    ).then((data) => {
      setStories(data)
    }).catch(console.error)
  }, [])

    
  const categories = ["ALL SECTORS", ...new Set(stories.flatMap((x) => x.categories || []).filter(Boolean))];

  
   const filteredData =
  filter === 'ALL SECTORS'
    ? stories
    : stories.filter((item) => item.categories?.includes(filter));
  
    const handleClick = (category) => {
      setFilter(category)
    }
  
  return (
    <div>
      <div className="bg-ProjectBg lg:bg-fixed max-w-7xl mb-16 h-[400px] relative rounded-md bg-cover bg-center sma:bg-top mda:bg-top lg:mx-5">
              <div className="absolute inset-0 gradient-hero bg-black/30 w-full opacity-80 rounded-md"></div>
              <div className="relative flex flex-col items-center justify-center h-full">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className=" backdrop-sepia-0 capitalize bg-opacity-0 backdrop-blur-xs backdrop-filter w-fit bg-white/70 py-3 px-4 rounded-md  text-black text-3xl md:text-5xl font-Playfair font-medium"
                >
                  Our projects
                </motion.h1>
                <motion.p 
                initial = {{opacity: 0, y: 20}}
                animate = {{opacity: 1, y: 0}}
                transition={{ duration: 1, delay: 0.9 }}
                className='text-xl font-Anek sma:w-[90%] text-white mt-6 font-light '>
                  Showcasing our engineering excellence through successful project deliveries across diverse sectors
                </motion.p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 sma:mt-6 mda:mt-6 justify-center mb-8  sma:gap-1 mda:gap-1 lg:gap-5">
            {categories.map((x) => (
              <button key={x}
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
            
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-5 mb-16">
        {filteredData.length > 0 ? (
          filteredData.map((story) => (
            <NavLink
              key={story.slug.current}
              to={`/Projects/${story.slug.current}`}
              className="group block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={story.mainImage?.asset?.url}
                alt={story.mainImage?.alt || story.title}
                className="w-full h-64 object-cover group-hover:scale-105 duration-150 ease-linear transition-transform"
                loading='lazy'
              />
              <div className="p-4">
                <h2 className="text-xl font-Sora font-semibold mb-2">
                  {story.title}
                </h2>
                <p className='text-sm font-Manrope mb-2'>
                  {`${story.body[0].children[0].text.substring(0, 120)}...`}
                </p>
                <p className="text-sm text-gray-600 font-semibold font-Anek">
                 Date Posted: <span className='font-normal'>{format(new Date(story.publishedAt), "MMMM dd, yyyy")}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {story.categories?.map((cat, i) => (
                    <span
                      key={i}
                      className="text-xs font-Anek bg-green-100 text-green-800 px-2 py-1 rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 text-lg font-Anek mt-10 col-span-full"
          >
            No projects here yet.
          </motion.p>
        )}
      </div>

    </div>
  )
}

export default Project