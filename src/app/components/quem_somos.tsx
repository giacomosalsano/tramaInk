import { CarouselTeam } from "./carouselTeam";

export function Quem_Somos () {
  return (
    <div className="grid auto-row-max mt-10 max-w-auto">
      
        <h2 className="mb-3 text-3xl font-semibold font-Bungee">
          Quem somos?{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          </span>
        </h2>
        <p className="font-Bungee font-medium text-text-secondary">
          Conheça nosso time:
        </p>
        <CarouselTeam />

        <div className="mt-2">
          <p className="font-Bungee mb-2">Somos a equipe</p>
        </div>

        <div className="">
        </div>
        <div className="">
          <p className="text-xs font-Bungee text-text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aliquid maxime quas facilis et quos sunt iusto quod soluta cumque provident tenetur magni sint inventore, possimus quae. Cumque, quidem placeat!</p>
        </div>

    </div>
      
  )
}