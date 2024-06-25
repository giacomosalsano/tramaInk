import { NavBar } from "./nav_bar";
import Image from "next/image";
import { CarouselPlugin } from "./carouselPlugin";

export function O_Estudio () {
  return (
    <div className="grid auto-row-max mt-10">
        <h2 className="mb-3 text-2xl font-semibold font-Bungee">
          O Estúdio{" "}
        </h2>
        <p className="font-Bungee font-medium text-text-secondary">
          Conheça o espaço:
        </p>
        <div className="max-w-screen max-h-50">
          <CarouselPlugin />
        </div>


        <div className="">
          <h1 className="">Somos um estúdio de tatuagem.</h1>
        </div>

        <div className="">
        </div>
        <div className="">
          <h1 className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aliquid maxime quas facilis et quos sunt iusto quod soluta cumque provident tenetur magni sint inventore, possimus quae. Cumque, quidem placeat!</h1>
          
        </div>

      

      
    </div>
    
  )
}