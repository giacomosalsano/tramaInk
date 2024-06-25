import Image from "next/image";
import { tramalogo } from "../../../public/index"
import { NavBar } from "./nav_bar";

export function Header() {
  return (
    <div className=""> 
      <div className="fixed z-10 top-0 left-0 right-0 bg-primary align-middle gap-3 flex max-w-auto justify-center border-b p-3 mb-3 border-b-menu-foreground">
        <Image
            className="relative drop-shadow-[0_0_0.3rem_#d9d8d890]"
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
      <NavBar />
    </div>
    
  )    
}
  