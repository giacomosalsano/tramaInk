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
}
export interface ImagesProps {
  images: ImageInfo []
}

const images = [
  {
    id: 1,
    name: "Studio 1",
    caption: "Studio 1",
    imageURL: "/fotostudio1.jpg"
  },
  {
    id: 2,
    name: "Studio 2",
    caption: "Studio 2",
    imageURL: "/fotostudio2.jpg"
  },
  {
    id: 3,
    name: "Bar",
    caption: "Bar",
    imageURL: "/fotobar.jpg"
  }
]

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
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
                        className="mb-3"
                        src={item.imageURL}
                        alt={item.name}
                        width={300}
                        height={200}
                      />
                      <span 
                        className="font-Bungee font-medium text-text-secondary">
                          {item.caption}
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