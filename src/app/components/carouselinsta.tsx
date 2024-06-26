'use client' 
import * as React from "react"
import { FaWhatsapp, FaAt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



type ImageInfo = {
  id: number;
  name: string;
  caption: string;
  imageURL: string | undefined ;
  insta: string;
  subtitle: string;
  content: string;
  contato: string;
  email: string;
  address?: string | null;
}
export interface ImagesProps {
  images: ImageInfo []
}

const images = [
  {
    id: 1,
    name: "Trama Ink",
    caption: "Estúdio",
    imageURL: "/tramalogo.png",
    insta: "tramaink",
    subtitle: "tramaink",
    content: "Tattoo, Fotograffia, Ateliê, Loja de produtos exclusivos &  Bar",
    contato: "+55 11 99999-9999",
    email: "  ",
    address: "https://www.google.com/maps/search/Av.+General.+Ataliba+Leonel,+24+-+Santana,+São+Paulo+-+SP,+São+Paulo,+Brazil+02033000+google+maps/@-23.5081603,-46.6285755,17z/data=!3m1!4b1?entry=ttu",
  },
  {
    id: 2,
    name: "Donna Visual",
    caption: "Fotografia",
    imageURL: "/donna.jpg",
    insta: "donnavisual",
    subtitle: "aka Vic",
    content: "Produção criativa & audiovisual full service.",
    contato: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 3,
    name: "MAD DOGG",
    caption: "Pinturas customizadas",
    imageURL: "/maddogg.jpg",
    insta: "maddoggkustom",
    subtitle: "aka Scavazini",
    content: "Pinturas customizadas; reformas; restaurações; direção & produção audiovisual.",
    contato: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 4,
    name: "Scavazini Garage",
    caption: "Em Breve",
    imageURL: "/garage.jpg",
    insta: "scavazini.garage",
    subtitle: "aka Scavazini",
    content: "Customizações, restaurações, comercialização & troca de peças.",
    contato: "+55 11 99999-9999",
    email: "  ",
  },
  {
    id: 5,
    name: "Atomic Thrash",
    caption: "Stickers & Clothing",
    imageURL: "/atomic.jpg",
    insta: "atomic.thrash",
    subtitle: "aka Bethlem",
    content: "Stickers & Clothing by @bethlemgui",
    contato: "+55 11 99999-9999",
    email: "  ",
  },
]

export function CarouselInsta() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )


    const newImages = images.map((image, index) => {
      return {
        ...image,
        id: index + 1,
      }
    })

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-xs mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
       {newImages.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1 ">
              <Card className="">
                <CardContent className="flex aspect-auto items-center justify-center p-3 ">
                    <div>
                      <h3 className="text-lg font-semibold font-Bungee mb-2">{item.name}</h3>
                      
                      <Image
                        className="mb-3 rounded-md"
                        src={item.imageURL}
                        alt={item.name}
                        width={600}
                        height={600}
                      />
                      <span 
                        className="font-Bungee font-semibold">
                          {item.caption}
                          <div>
                            <p className="m-1 text-xs font-extralight font-Bungee text-text-secondary">
                              {item.content}
                            </p>
                          </div>
                      </span>
                      <span className="flex p-2 m-1 space-x-2 justify-center ">
                            <a 
                            className="text-text-secondary hover:text-text-primary"
                            href={`http://wa.me/${item.contato}`}
                            target="blank">
                                <FaWhatsapp />
                            </a>
                            <a
                            className="text-text-secondary hover:text-text-primary" 
                            href={`mailto:${item.email}`}
                            target="blank">
                              <FaAt />
                            </a>
                            <a
                            className="text-text-secondary hover:text-text-primary" 
                            href={`https://www.instagram.com/${item.insta}/`}
                            target="blank">
                              <FaInstagram />
                          </a>
                          {item.address ? 
                            <a
                            className="text-text-secondary hover:text-text-primary" 
                            href={item.address}
                            target="blank">
                              <FaMapMarkerAlt />
                            </a> : ''}
                          

                            
                            
                            
                              
                            
                            
                          </span>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}