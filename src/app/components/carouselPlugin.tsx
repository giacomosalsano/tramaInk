'use client' 
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { fotobar, fotostudio1, fotostudio2 } from "../../../public/index"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
  imageURL: string | StaticImport | undefined;
}
export interface ImagesProps {
  images: ImageInfo []
}

const images = [
  {
    id: 1,
    name: "Studio 1",
    caption: "Studio 1",
    imageURL: "/fotostudio1"
  },
  {
    id: 2,
    name: "Studio 2",
    caption: "Studio 2",
    imageURL: "/fotostudio2"
  },
  {
    id: 3,
    name: "Bar",
    caption: "Bar",
    imageURL: "/fotobar"
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