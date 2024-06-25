'use client' 
import * as React from "react"
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
}
export interface ImagesProps {
  images: ImageInfo []
}

const images = [
  {
    id: 1,
    name: "Donna Visual",
    caption: "Fotografia",
    imageURL: "/vicprofilepic.jpg",
    insta: "sant2v",
    subtitle: "aka Vic",
    content: "Produção criativa & audiovisual full service.",
    contato: "+55 11 99999-9999"
  },
  {
    id: 2,
    name: "MAD DOGG",
    caption: "Pinturas customizadas",
    imageURL: "/scavazini.jpg",
    insta: "scavazinitattoo",
    subtitle: "aka Scavazini",
    content: "Pinturas customizadas; reformas; restaurações; direção & produção audiovisual.",
    contato: "+55 11 99999-9999"
  },
  {
    id: 3,
    name: "Scavazini Garage",
    caption: "Em Breve",
    imageURL: "/gui.jpg",
    insta: "bethlemgui",
    subtitle: "aka Bethlem",
    content: "Customizações, restaurações, comercialização & troca de peças.",
    contato: "+55 11 99999-9999"
  },
  {
    id: 4,
    name: "Atomic Thrash",
    caption: "Stickers & Clothing",
    imageURL: "/gui.jpg",
    insta: "bethlemgui",
    subtitle: "aka Bethlem",
    content: "Stickers & Clothing by @bethlemgui",
    contato: "+55 11 99999-9999"
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
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-3">
                    <div>
                      <h3 className="font-Bungee font-semibold text-text-primary mb-2">{item.name}</h3>
                      <Image
                        className="mb-3"
                        src={item.imageURL}
                        alt={item.name}
                        width={600}
                        height={600}
                      />
                      <span 
                        className="font-Bungee font-medium text-text-secondary">
                          {item.caption}
                          <p>
                            <a 
                            className="hover:text-text-primary"
                            href={`https://www.instagram.com/${item.insta}/`}
                            target="blank">
                            @{item.insta}
                            </a>
                          </p>
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
        {newImages.map((item) => (
          <div className="mt-2"
          key={item.id}>
              <p className="font-Bungee mb-2">{item.subtitle}</p>
              <p className="text-xs font-Bungee text-text-secondary">{item.content}</p>
            </div>
        ))}
    </Carousel>
  )
}