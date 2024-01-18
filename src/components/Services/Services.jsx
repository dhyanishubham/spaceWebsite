import React from 'react'
import {FaReact} from "react-icons/fa";
import wave from "../../assets/wave.gif"

const ServiceData=[
    {
        title:"HST",
        content:"300-500km",
        description:
        "Used for astronomical observation, capturing stunning images of the universe.",
        icon:<FaReact className="text-7xl" />,
        aosDelay:"300",
    },
    {
        title: "ISS",
        content: "500-1500km",
        description:
          ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
        icon: <FaShuttleSpace className="text-7xl" />,
        aosDelay: "500",
     },
    {
        title:"HST",
        content:"300-500km",
        description:
        "Used for astronomical observation, capturing stunning images of the universe.",
        icon:<FaReact className="text-7xl"/>,
        aosDelay:"700",
    },
]

const Services = () => {



  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {
                    ServiceData.map(
                        (data,index)=>(
                            <div data-aos="fade-up" dta-aos-delay={data.aosDelay} className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-blue-900/60 rounded-xl backdrop-blur-sm text-center text-2xl  px-3 py-8 w-full lg:w-[300px] mx-auto ">
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className="text-sm">{data.description}</p>
                            </div>
                        )
                    )    
                }
            </div>
            <img src={ wave} alt="" 
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relativez-[0]" />
        </div>
      </div>
    </div>
  )
}

export default Services
