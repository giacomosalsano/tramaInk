import { FaDog } from "react-icons/fa";
<FaDog /> Pet Friendly


<Carousel
                plugins={[plugin.current]}
                className="max-w-xs mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselItem>
                  <Card>
                    <CardContent>
                      <div>
                      {newImages.map((item) => (
                        <div 
                        className="mt-2"
                        key={item.id}>
                          
                          
                        </div>
                      ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </Carousel>