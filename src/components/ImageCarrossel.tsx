import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Image } from "astro:assets";

// Define a tipagem para as imagens
interface Images {
    id: string;
    url: string;
    alt: string;
}

// Array de imagens com tipagem
const images: Images[] = [
    {
        id: 'image1',
        url: '/Foto.png',
        alt: 'Descrição da imagem 1'
    },
    {
        id: 'image2',
        url: '/apoio.jpg',
        alt: 'Descrição da imagem 2'
    },
    {
        id: 'image3',
        url: '/nomelogocida.png',
        alt: 'Descrição da imagem 3'
    },
    {
        id: 'image3',
        url: '/valdireooutro.png',
        alt: 'Descrição da imagem 3'
    },
    // Adicione mais imagens aqui
];

export function ImageCarrossel() {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 w-full h-[20rem] overflow-hidden flex flex-col justify-center items-center">
                            <img
                                src={image.url}
                                height="100"
                                width="100"
                                className="max-h-full h-auto w-auto"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}