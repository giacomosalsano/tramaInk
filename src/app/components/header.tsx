import Image from "next/image";

export function Header() {
  return (
    <div className="bg-background dark:bg-secondary  max-w-fit items-center justify-between text-sm lg:flex"> 
      <div className="fixed align-middle gap-3 left-0 top-0 flex w-full justify-center border-b p-3 border-b-gray-300 ">
        <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/trama_logo.png"
            alt="Trama Logo"
            width={90}
            height={19}
            priority
          />
        <h1 className="text-7xl font-Bungee">
          TRAMA INK
        </h1>
      </div>
    </div>
    
  )    
}
  