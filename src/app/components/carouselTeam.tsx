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
  insta: string
}
export interface ImagesProps {
  images: ImageInfo []
}

const images = [
  {
    id: 1,
    name: "Victória Santana",
    caption: "Fotógrafa",
    imageURL: "/vicprofilepic.jpg",
    insta: "@sant2v"
  },
  {
    id: 2,
    name: "Lucas Sacazini",
    caption: "Tatuador",
    imageURL: "/scavazini.jpg",
    insta: "@scavazinitattoo"
  },
  {
    id: 3,
    name: "Guilherme Bethlem",
    caption: "Artista",
    imageURL: "/gui.jpg",
    insta: "@bethlemgui"
  }
]

export function CarouselTeam() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
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
                      <Image
                        src={item.imageURL}
                        alt={item.name}
                        width={600}
                        height={600}
                      />
                      <span 
                        className="text-xl font-semibold">{item.caption}
                        <a href={`https://www.instagram.com/${item.insta}/`}>{item.insta}</a>
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