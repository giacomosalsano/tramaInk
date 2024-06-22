import { NavBar } from "./nav_bar";
import Image from "next/image";

export function O_Estudio () {
  return (
    <div>
      <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className="mt-10 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 font-Bungee"
      target="_blank"
      rel="noopener noreferrer"
    >
        <h2 className="mb-3 text-2xl font-semibold">
          O Estúdio{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Conheça o espaço.
        </p>
      </a>

      <div className="w-screen h-screen text-black bg-white max-w-screen">
      
      <div>
        <hr className="border-t-black"></hr>

        <div className="flex justify-center text-center w-screen">
          <h1 className="text-2xl m-5 sm:text-4xl font-bold sm:m-6">Somos um estúdio de tatuagem.</h1>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:justify-items-center">
          <div className="aspect-[3/4]">
            <Image src="" alt="Bee"  />
          </div>
          <div className="aspect-[3/4]">
            <Image src="" alt="Bees" />
          </div>
          <div className="aspect-[3/4]">
            <Image src="" alt="Hives" />
          </div>
        </div>

        

        <div className="flex justify-center">
          <h1 className="text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aliquid maxime quas facilis et quos sunt iusto quod soluta cumque provident tenetur magni sint inventore, possimus quae. Cumque, quidem placeat!</h1>
        </div>
      </div>
      
    </div>

      
    </div>
    
  )
}