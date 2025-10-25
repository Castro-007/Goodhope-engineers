import React, { useState} from 'react'

const Accordion = (props) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className=' max-w-2xl p-2 rounded-md '>
      <button className='flex justify-between w-full transition transform-[.3s] items-center' onClick={() => setAccordionOpen(!accordionOpen)}>
        <h2 className='text-3xl text-start font-Anek sma:text-2xl mda:text-2xl '>{props.head}</h2>
        {accordionOpen ? <span className='text-2xl sma:text-xl mda:text-xl cursor-pointer text-[#415D43]'>-</span> : <span className='text-2xl sma:text-xl mda:text-xl cursor-pointer text-[#415D43]'>+</span>}
      </button>
      <div className={`grid overflow-hidden transition-all font-Nunito mt-2 text-[#415D43] duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <span className='overflow-hidden '>
        {props.answer}
      </span>

      </div><hr className='w-full bg-slate-800' />
    </div> 
  )
}

export default Accordion
