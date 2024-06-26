
import { CarouselPlugin } from "./carouselPlugin";


export function O_Estudio () {
  return (
    <div className="justify-center mt-10 text-center z-0">
        <h2 className="mb-3 text-3xl font-semibold font-Bungee">
          O Estúdio{" "}
        </h2>
        <p className="font-Bungee font-medium text-text-secondary">
          Conheça nosso espaço:
        </p>
        <div className="max-h-50">
          <CarouselPlugin />
        </div>


        <div className="mt-2">
          <p className="font-Bungee  p-3">Somos um estúdio de tatuagem</p>
        </div>

        <div className="">
        </div>
        <div className="">
          <p className="text-xs mb-2 p-3 font-Bungee text-text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aliquid maxime quas facilis et quos sunt iusto quod soluta cumque provident tenetur magni sint inventore, possimus quae. Cumque, quidem placeat!</p>
          
        </div>

      

      
    </div>
    
  )
}