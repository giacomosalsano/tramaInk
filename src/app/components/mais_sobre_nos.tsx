import { CarouselInsta } from "./carouselinsta";

export function MaisSobreNos () {
  return (
    <div className=" justify-center mt-10 text-center ">
        <h2 className="mb-3 text-3xl font-semibold font-Bungee">
          Mais sobre nós{" "}
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