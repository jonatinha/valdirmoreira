import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Video {
    id: string;
    embedCode: string;
}

const videos: Video[] = [
    {
        id: 'jr0fflyzuj',
        embedCode: 'jr0fflyzuj'
    },
    {
        id: 'la3yr2c8dc',
        embedCode: 'la3yr2c8dc'
    },
    
    {
        id: '9r0a21b7gp',
        embedCode: '9r0a21b7gp'
    },
    {
        id: '6asvi3gl85',
        embedCode: '6asvi3gl85'
    },
    {
        id: 'xwl6mtwtfb',
        embedCode: 'xwl6mtwtfb'
    },
    
    // Adicione mais vídeos aqui
];


export function Carrossel() {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {videos.map((video, index) => (
                    <CarouselItem key={index}>
                        <div
                            className="wistia_responsive_padding"
                            style={{ padding: '176.67% 0 0 0', position: 'relative' }}
                        >
                            <div
                                className="wistia_responsive_wrapper"
                                style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
                            >
                                <div
                                    className={`wistia_embed wistia_async_${video.embedCode} seo=true videoFoam=true`}
                                    style={{ height: '100%', position: 'relative', width: '100%' }}
                                >
                                    <div
                                        className="wistia_swatch"
                                        style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}
                                    >
                                        <img
                                            src={`https://fast.wistia.com/embed/medias/${video.embedCode}/swatch`}
                                            style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
                                            alt=""
                                            aria-hidden="true"
                                            onLoad={(e) => (e.currentTarget.parentNode as HTMLElement).style.opacity = '1'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
