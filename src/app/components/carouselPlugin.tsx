'use client' 
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { fotobar, fotostudio1, fotostudio2 } from "../../../public/index"

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
  imageURL: string;
}
export interface ImagesProps {
  images: ImageInfo []
}

const images = [
  {
    id: 1,
    name: "Studio 1",
    caption: "Studio 1",
    imageURL: "https://github.com/giacomosalsano/tramaInk/blob/1d9acf4f1f90428cae8a278e44d0f1ffea3022f4/public/fotostudio1.jpg"
  },
  {
    id: 2,
    name: "Studio 2",
    caption: "Studio 2",
    imageURL: "https://github.com/giacomosalsano/tramaInk/blob/master/src/assets/fotostudio2.jpg"
  },
  {
    id: 3,
    name: "Bar",
    caption: "Bar",
    imageURL: "https://github.com/giacomosalsano/tramaInk/blob/master/src/assets/fotobar.jpg"
  }
]

export function CarouselPlugin() {
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
      className="max-w-md mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
       {newImages.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-6">
                    <div>
                      <Image
                        src={item.imageURL}
                        alt={item.name}
                        width={300}
                        height={200}
                      />
                      <span 
                        className="text-xl font-semibold">{item.caption}
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