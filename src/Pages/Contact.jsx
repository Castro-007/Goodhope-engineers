import React from 'react'
import Swal from 'sweetalert2';
import ContractorBg from '../assets/Images/Services/ContractorContact.jpg'
import { ServicesWeDo } from '../Utils'
import { FaPaperPlane } from 'react-icons/fa';
import Maps from '../Components/Maps';
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2462193b-53ac-47a8-8ba5-c355f34a67c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    event.target.reset();
    setResult("");
    }
    else {
      setResult("Something went wrong. Please try again.");
    }
  };



  return (
    <div className='lg:mx-8 sma:mx-4 mda:mx-4'>
      <section className=' mt-8 mb-8'>
        <div className='flex sma:flex-col mda:flex-col justify-around'>
          <div className='basis-[45%] rounded-2xl shadow-xl bg-[#EBEBEB] px-3 py-2 '>
            <h1 className='text-lg mx-6 font-Playfair font-normal'>GET A QUOTE</h1>
            <h1 className='text-5xl mx-6 my-6 font-Anek font-medium tracking-wide'>Request a Quote for Your Next Project</h1>
            <p className='text-lg mx-6 font-Anek font-light'>We'll get back to you as soon as possible</p>
          <form onSubmit={onSubmit} className='mt-8 mx-8'>
            <div className='flex sma:gap-6 mda:gap-6 justify-between'>

            <div class="relative ">
      <input
        placeholder="john@example.com"
        className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent font-Nunito placeholder-transparent focus:outline-none focus:border-[#1ED2A5]"
        required=""
        id="First Name"
        name="First Name"
        type="text"
      />
      <label
        className="absolute font-Anek uppercase left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#1ED2A5] peer-focus:text-sm"
        htmlFor="First Name"
        >First Name
        </label>
        </div>
        <div className='relative'>
      <input
        placeholder="password"
        className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent font-Nunito placeholder-transparent focus:outline-none focus:border-[#1ED2A5]"
        required=""
        id="lastName"
        name="Last Name"
        type='text'
      />
      <label
        className="absolute font-Anek uppercase left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#1ED2A5] peer-focus:text-sm"
        htmlFor="Last Name"
        >Last Name
        </label>
    </div>
        </div>
        <div className='mt-12 relative'>
      <input
        placeholder="Email"
        className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent font-Nunito placeholder-transparent focus:outline-none focus:border-[#1ED2A5]"
        required
        id="Email"
        name="Email"
        type='Email'
      />
      <label
        className="absolute font-Anek uppercase left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#1ED2A5] peer-focus:text-sm"
        htmlFor="Email Address"
        >Email Address
        </label>
    </div>
        <div className='mt-12 relative'>
      <input
        placeholder="Phone Number"
        className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent font-Nunito placeholder-transparent focus:outline-none focus:border-[#1ED2A5]"
        required
        id="Phone Number"
        name="Phone Number"
        type='tel'
      />
      <label
        className="absolute font-Anek uppercase left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#1ED2A5] peer-focus:text-sm"
        htmlFor="Phone Number"
        >Phone Number
        </label>
    </div>
    <div className='mt-12 relative'>
                  <label htmlFor="Services" className='absolute font-Anek uppercase left-0 -top-3.5 text-[#1ED2A5] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#1ED2A5] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#1ED2A5] peer-focus:text-sm'>Service of interest</label>
                <select name="Services" className='peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent font-Nunito placeholder-transparent focus:outline-none focus:border-[#1ED2A5]' id="">
                  <option value="">Select a service</option>
                  {
                    ServicesWeDo.map((x) => (

                      <option key={x.Id} value={x.Service}>{x.Service}</option>
                    ))
                  }
                </select>

                </div>
                <div className='my-6'>
                  <label htmlFor="Project" className='pb-4'>Project Description*</label>
                  <textarea name="Project" cols={20} rows={8} className='block resize-none mt-4 rounded-lg border-[1px] border-[#1ED2A5] w-full h-full bg-transparent font-Nunito outline-1 focus:outline-none px-2 py-1' id="" ></textarea>
                </div>
                <button className='flex text-center justify-center items-center gap-2 hover:opacity-85 rounded-md bg-[#1ED2A5] p-2 text-white' type="submit">Send message <FaPaperPlane/></button>
          </form>
          </div>
          <div className='basis-[40%] sma:mt-8 mda:mt-8'>
            <img src={ContractorBg} className='lg:w-[90%] rounded-lg ' alt="" />
          </div>
        </div>
      </section>
      <div className='mb-8'>
        <Maps />
      </div>
    </div>
  )
}

export default Contact