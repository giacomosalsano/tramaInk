
import Image from "next/image";
import { FaAt, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


type ContactInfo = {
  id: number;
  name: string;
  caption: string;
  description: string;
  imageURL: string | undefined ;
  insta: string;
  contato: string;
  email: string;
}
export interface ContactProps {
  contatos: ContactInfo []
}

const contatos = [
  {
    id: 1,
    name: "Trama Ink",
    caption: "Estúdio",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/tramalogo.jpg",
    insta: "tramaink",
    content: "Tattoo, Fotograffia, Ateliê, Loja de produtos exclusivos &  Bar",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
    address: "https://www.google.com/maps/search/Av.+General.+Ataliba+Leonel,+24+-+Santana,+São+Paulo+-+SP,+São+Paulo,+Brazil+02033000+google+maps/@-23.5081603,-46.6285755,17z/data=!3m1!4b1?entry=ttu",
  },
  {
    id: 2,
    name: "Victória Santana",
    caption: "Fotógrafa",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/vicprofilepic.jpg",
    insta: "sant2v",
    contato: "+55 11 949433659",
    email: " teste@hotmail.com ",
  },
  {
    id: 3,
    name: "Lucas Scavazini",
    caption: "Tatuador",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/scavazini.jpg",
    insta: "scavazinitattoo",
    contato: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
  },
  {
    id: 4,
    name: "Guilherme Bethlem",
    caption: "Artista",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/gui.jpg",
    insta: "bethlemgui",
    contato: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
  },
  {
    id: 5,
    name: "Melso Melsão",
    caption: "Tatuador",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/melso.jpg",
    insta: "melsohnguy",
    contato: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
  },
  {
    id: 6,
    name: "Donna Visual",
    caption: "Fotografia",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/donna.jpg",
    insta: "donnavisual",
    content: "Produção criativa & audiovisual full service.",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
  },
  {
    id: 7,
    name: "MAD DOGG",
    caption: "Pinturas customizadas",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/maddogg.jpg",
    insta: "maddoggkustom",
    content: "Pinturas customizadas; reformas; restaurações; direção & produção audiovisual.",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
  },
  {
    id: 8,
    name: "Scavazini Garage",
    caption: "Em Breve",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/garage.jpg",
    insta: "scavazini.garage",
    content: "Customizações, restaurações, comercialização & troca de peças.",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
  },
  {
    id: 9,
    name: "Atomic Thrash",
    caption: "Stickers & Clothing",
    description: "petit description lorem ipsum dolor sit amet con el desc  et",
    imageURL: "/atomic.jpg",
    insta: "atomic.thrash",
    content: "Stickers & Clothing by @bethlemgui",
    telefone: "+55 11 99999-9999",
    email: " teste@hotmail.com ",
  },
]

export function Contatos () {
  const contato = contatos.map((contato, index) => {
    return {
      ...contato,
      id: index + 1,
    }
  })
  return (
    <div className="">
      <h2 className="text-center text-3xl font-semibold font-Bungee">
          Contatos
      </h2>
      <p className="font-Bungee font-medium text-text-secondary mb-3 text-center">
        Nossos contatos e redes sociais:
      </p>
      <div className="">
        {contato.map((user) => (
          <div 
            key={user.id}
            className="flex md:h-24 max-w-[512px] min-w-0 font-Bungee text-sm border-2 border-text-disabled rounded-md m-2 p-2 ">
            <div className="flex min-w-fit place-self-center border-2 border-blue-300">
              <Image 
                className=" rounded-full border-2 border-yellow-600"
                src={user.imageURL}
                alt={user.name} 
                height={70}
                width={70}/> 
              <div className="min-w-fit border-2 border-red-600">
                <p className="text-sm font-semibold border-2 border-green-600">{user.name}</p>
                  
                <div className="inline-flex self-center border-2 border-blue-600 dark:text-text-secondary">
                      <div className="flex space-x-2 "> 
                        <a 
                          className="hover:text-text-tertiary"
                          href={`http://wa.me/${user.telefone}`}
                          target="blank">
                            <FaWhatsapp />
                        </a>
                        <a
                          className="hover:text-text-tertiary" 
                          href={`mailto:${user.email}`}
                          target="blank">
                            <FaAt />
                        </a>
                        <a
                          className="hover:text-text-tertiary" 
                          href={`https://www.instagram.com/${user.insta}/`}
                          target="blank">
                            <FaInstagram />
                        </a>
                          {user.address ? 
                            <a
                              className="hover:text-text-tertiary" 
                              href={user.address}
                              target="blank">
                                <FaMapMarkerAlt />
                            </a> : ''} 
                      </div> 
                </div>
              </div>

            </div>
              
            <div className="max-w-fit border-2 border-pink-300 ">
              <p className="text-sm text-right">{user.caption}</p>
                
              <p className="mt-1 text-xs dark:text-text-secondary text-text-secondary  text-right">
                {user.description}
              </p>
            </div>   
                        
          </div>  
              
            ))}
      </div>
    </div>
  )
}