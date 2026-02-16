'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";
import Image from "next/image";
import truck from "../../public/truck.png"

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-sky-800 to-sky-700 text-white pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Keshav Logistic <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg mx-auto md:mx-0">
              Professional transport solutions across India by Mr. Sunil Kumar. We ensure reliable and timely deliveries with our efficient fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-md bg-orange-500 hover:bg-orange-600 px-6">
                <a href="#contact" className="flex items-center">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-md bg-transparent border border-white hover:bg-white/10 px-6">
                <a href="#services" className="flex items-center">
                  Our Services <Truck className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image src={truck} alt="truck" width={500} height={500} className="w-full h-f" />
                {/* <img */}
                {/*   src="/lovable-uploads/603ee1b1-9e50-40c9-b959-3033a1bd0150.png" */}
                {/*   alt="Keshav Logistics truck" */}
                {/*   className="w-full h-auto object-cover" */}
                {/* /> */}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-sky-800 p-4 md:p-6 rounded-lg shadow-lg">
                <div className="text-sm font-medium mb-1">Pan India Coverage</div>
                <div className="flex items-center text-orange-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-semibold">All Major Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
