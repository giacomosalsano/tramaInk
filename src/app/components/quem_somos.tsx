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
          Conheça o time:
        </p>
        <CarouselTeam />

    </div>
      
  )
}