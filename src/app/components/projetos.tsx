
import { CarouselInsta } from "./carouselinsta";

export function Projetos () {
  return (
    <div className=" justify-center text-center z-0">
        <h2 className="mb-3 text-3xl font-semibold font-Bungee">
          Projetos{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          </span>
        </h2>
        <p className="font-Bungee font-medium text-text-secondary">
          conheça nossos projetos:
        </p>
        <CarouselInsta />
    </div>

  )
}