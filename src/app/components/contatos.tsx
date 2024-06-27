"use client";

import Image from "next/image";
import { FaAt, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


type ContactInfo = {
  id: number;
  name: string;
  caption: string;
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
    imageURL: "/tramalogo.jpg",
    insta: "tramaink",
    subtitle: "tramaink",
    content: "Tattoo, Fotograffia, Ateliê, Loja de produtos exclusivos &  Bar",
    telefone: "+55 11 99999-9999",
    email: "  ",
    address: "https://www.google.com/maps/search/Av.+General.+Ataliba+Leonel,+24+-+Santana,+São+Paulo+-+SP,+São+Paulo,+Brazil+02033000+google+maps/@-23.5081603,-46.6285755,17z/data=!3m1!4b1?entry=ttu",
  },
  {
    id: 2,
    name: "Victória Santana",
    caption: "Fotógrafa",
    imageURL: "/vicprofilepic.jpg",
    insta: "sant2v",
    contato: "+55 11 949433659",
    email: "  ",
  },
  {
    id: 3,
    name: "Lucas Scavazini",
    caption: "Tatuador",
    imageURL: "/scavazini.jpg",
    insta: "scavazinitattoo",
    contato: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 4,
    name: "Guilherme Bethlem",
    caption: "Artista",
    imageURL: "/gui.jpg",
    insta: "bethlemgui",
    contato: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 5,
    name: "Melso Melsão",
    caption: "Tatuador",
    imageURL: "/melso.jpg",
    insta: "melsohnguy",
    contato: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 6,
    name: "Donna Visual",
    caption: "Fotografia",
    imageURL: "/donna.jpg",
    insta: "donnavisual",
    subtitle: "aka Vic",
    content: "Produção criativa & audiovisual full service.",
    telefone: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 7,
    name: "MAD DOGG",
    caption: "Pinturas customizadas",
    imageURL: "/maddogg.jpg",
    insta: "maddoggkustom",
    subtitle: "aka Scavazini",
    content: "Pinturas customizadas; reformas; restaurações; direção & produção audiovisual.",
    telefone: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 8,
    name: "Scavazini Garage",
    caption: "Em Breve",
    imageURL: "/garage.jpg",
    insta: "scavazini.garage",
    subtitle: "aka Scavazini",
    content: "Customizações, restaurações, comercialização & troca de peças.",
    telefone: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 9,
    name: "Atomic Thrash",
    caption: "Stickers & Clothing",
    imageURL: "/atomic.jpg",
    insta: "atomic.thrash",
    subtitle: "aka Bethlem",
    content: "Stickers & Clothing by @bethlemgui",
    telefone: "+55 11 99999-9999",
    email: "  ",
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

    <div className="mt-10 text-center z-0">
      <h2 className="mb-3 text-3xl font-semibold font-Bungee">
          Contatos{" "}
      </h2>
        <p className="font-Bungee font-medium text-text-secondary mb-3 text-center">
          Nossos contatos e redes sociais:
        </p>
        <div className="font-Bungee text-sm">
          {contato.map((user) => (
              <div 
              key={user.id} 
              className="rounded-lg border-2 border-text-secondary m-1 box-content h-24 w-56">
                <div className="flex size-full p-3">
                  <div className="">
                        <Image 
                          className="rounded-full"
                          src={user.imageURL}
                          alt={user.name} 
                          height={70}
                          width={70}/> 
                    </div> 
                    <div className=" size-full pt-2 pb-2 text-end">
                      <p className=" mb-1">{user.name}</p>
                      <span className=" ">
                        <div className="inline-flex space-x-2 "> 
                          <a 
                            className="text-text-secondary hover:text-text-primary"
                            href={`http://wa.me/${user.telefone}`}
                            target="blank">
                              <FaWhatsapp />
                          </a>
                          <a
                            className="text-text-secondary hover:text-text-primary" 
                            href={`mailto:${user.email}`}
                            target="blank">
                              <FaAt />
                          </a>
                          <a
                            className="text-text-secondary hover:text-text-primary" 
                            href={`https://www.instagram.com/${user.insta}/`}
                            target="blank">
                              <FaInstagram />
                          </a>
                            {user.address ? 
                              <a
                                className="text-text-secondary hover:text-text-primary" 
                                href={user.address}
                                target="blank">
                                  <FaMapMarkerAlt />
                              </a> : ''} 
                        </div> 
                      </span>
                      

                    </div>
                </div>             
              </div>
          ))}            
        </div>  
    </div>
          

  )
}