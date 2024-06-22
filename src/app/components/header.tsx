import Image from "next/image";

export function Header() {
  return (
    <div> 
      <div className="bg-primary fixed align-middle gap-3 left-0 top-0 flex w-full justify-center border-b p-3 border-b-menu-foreground ">
        <Image
            className="relative drop-shadow-[0_0_0.3rem_#d9d8d890]"
            src="/trama_logo.png"
            alt="Trama Logo"
            width={90}
            height={19}
            priority
          />
        <h1 className="text-7xl font-Bungee text-text-tertiary ">
          TRAMA INK
        </h1>
      </div>
    </div>
    
  )    
}
  