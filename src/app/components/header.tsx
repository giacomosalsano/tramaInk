import Image from "next/image";
import { tramalogo } from "../../../public/index"
import { NavBar } from "./nav_bar";

export function Header() {
  return (
    <div className=""> 
      <div className="fixed z-10 top-0 left-0 right-0 bg-primary align-middle gap-3 flex max-w-auto justify-center pt-5">
        <Image
            className="drop-shadow-[0_0_0.3rem_#d9d8d890]"
            src={tramalogo}
            alt="Trama Logo"
            width={90}
            height={19}
            priority
          />
        <h1 className="text-7xl font-Bungee text-text-white drop-shadow-[0_0_0.3rem_#d9d8d850]">
          TRAMA INK
        </h1>
      </div>
      <div className="fixed right-0 left-0 top-32"><NavBar/></div>
        
    </div>
    
  )    
}
  