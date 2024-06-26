import Image from "next/image";

export function Contatos () {
  return (
    <div className="grid auto-row-max mt-10 max-w-auto">
      <h2 className="mb-3 text-3xl font-semibold font-Bungee">
          Contatos{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          </span>
      </h2>
        <p className="font-Bungee font-medium text-text-secondary">
          Nossos contatos e redes sociais:
        </p>
        <span>
          <div>
                <div>
                  <div className="inline-flex p-3">
                    <Image 
                      className="rounded-full"
                      src="/tramalogo.png"
                      alt="logoTrama"
                      width={50}
                      height={50}/>
                    <strong className="m-3 text-center">Trama Ink Studio</strong>
                  </div>
                  <div className="inline-flex p-3">
                    <Image 
                      className="rounded-full"
                      src="/vicprofilepic.jpg"
                      alt="vic foto" 
                      height={50}
                      width={50}/>
                    <strong className="m-3 text-center">Victória Santana</strong>
                  </div>
                  <div>
                  <div className="inline-flex p-3">
                    <Image 
                      className="rounded-full"
                      src="/scavazini.jpg"
                      alt=""
                      height={50}
                      width={50}/>
                    <strong className="m-3 text-center">Lucas Scavazini</strong>
                  </div>
                  <div className="inline-flex p-3">
                    <Image 
                      className="rounded-full"
                      src="/gui.jpg"
                      alt=""
                      height={50}
                      width={50}/>
                    <strong className="m-3 text-center">Gui Bethlem</strong>
                  </div>
                  <div className="inline-flex p-3">
                    <Image 
                      className="rounded-full"
                      src="/melso.jpg"
                      alt=""
                      height={50}
                      width={50}/>
                    <strong className="m-3 text-center">Melso Melsão</strong>
                  </div>
                </div>
                </div>
            </div>
                
              
          </span>  
    </div>
          

  )
}