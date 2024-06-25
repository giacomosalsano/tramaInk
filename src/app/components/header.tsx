import Image from "next/image";

export function Header() {
  return (
    <div className=""> 
      <div className="fixed top-0 left-0 right-0 bg-primary align-middle gap-3 flex w-full justify-center border-b p-3 border-b-menu-foreground ">
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
  