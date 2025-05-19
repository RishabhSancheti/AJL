"use client"

import { useEffect, useState } from "react"
import Link from "../../node_modules/next/link"
import Image from "../../node_modules/next/image"

const slides = [
    {
        id: 1,
        title: "Traditional Collection",
        description: "Experience timeless elegance with our Traditional Collection.",
        description2: "Sale! Upto 30% off!",
        img: "/Hero1.jpeg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Indo-Western Collection",
        description: "The perfect blend of tradition and trend.",
        description2: "Sale! Upto 30% off!",
        img: "/Hero2.jpeg",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Men's Collection",
        description: "Elevated essentials for the modern gentleman.",
        description2: "Sale! Upto 30% off!",
        img: "/Hero3.jpeg",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    }
]

const Slider = () => {

    const [current, setCurrent] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() =>{
            setCurrent((prev) => (prev === slides.length-1 ? 0 : prev+1 ));
        },3000);
        
        return () => clearInterval(interval);
    },[]);

    return <div className="h-[calc(100vh-80px)] overflow-hidden">
        <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{transform: `translateX(-${current * 100}vw)`}}
        >
            {slides.map(slide => (
                <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 lg:flex-row`} key={slide.id}>
                {/* Image Container */}
                <div className="h-1/2 lg:h-full lg:w-1/2 relative min-h-[300px]">
                  <Image
                    src={slide.img}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              
                {/* Text Container */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center px-4">
                  <h3 className="text-l lg:text-2xl 2xl:text-3xl">{slide.description2}</h3>
                  <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                  <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                  <Link href={slide.url}>
                    <button className="rounded-md bg-black text-white py-3 px-4">Shop Now</button>
                  </Link>
                </div>
              </div>
            ))} 
        </div>
        <div className="absolute m-auto left-1/2 -translate-x-1/2 bottom-8 flex gap-4">
            {slides.map((slide,index)=>(
                <div className={`w-4 h-4 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} key={slide.id}
                onClick={() => setCurrent(index)}
                >
                    { current === index && (
                        <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                    )}
                </div>
            ))}
        </div> 
    </div>
    
}

export default Slider
