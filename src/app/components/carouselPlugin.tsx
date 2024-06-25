'use client' 
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {foto_bar, foto_studio_1, foto_studio_2, } from "../../assets"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

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
    imageURL: "https://github.com/giacomosalsano/tramaInk/blob/978ca644a0cdfae488acb425586219bba00c8617/src/assets/foto_studio_1.jpg"
  },
  {
    id: 2,
    name: "Studio 2",
    caption: "Studio 2",
    imageURL: "https://github.com/giacomosalsano/tramaInk/blob/978ca644a0cdfae488acb425586219bba00c8617/src/assets/foto_studio_2.jpg"
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
                        className="text-4xl font-semibold">{item.caption}
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