"use client";

import Image from "next/image";
import { tramalogo } from "../../../public/index"
import { NavBar } from "./nav_bar";

export function Header() {
  return (
    <div className="max-w-2xl"> 
      <div className="fixed top-0 left-0 right-0 z-10 bg-primary align-middle gap-3 flex max-w-auto  justify-center p-2">
        <div className="">
          <Image
              className="drop-shadow-[0_0_0.3rem_#d9d8d890]"
              src={tramalogo}
              alt="Trama Logo"
              width={90}
              height={90}
              priority
            />
        </div>
        <div className=" ">
          <h1 className="text-5xl md:text-7xl font-Bungee text-text-white drop-shadow-[0_0_0.3rem_#d9d8d850]">
            TRAMA INK
          </h1>

        </div>
        
      </div>
      <div className="fixed right-0 left-0 top-32"><NavBar/></div>
        
    </div>
    
  )    
}
  