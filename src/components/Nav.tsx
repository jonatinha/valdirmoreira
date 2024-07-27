"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Image } from "astro:assets";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Handshake } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
    
    {
        title: "Sobre Mim",
        href: "#sobremim",
        description: "Conheça Valdir Moreira.",
    },
    {
        title: "Propostas para Guarulhos",
        href: "#propostas",
        description:
            "Ideias para Guarulhos.",
    },
    {
        title: "Compromissos e Valores",
        href: "#compromissos",
        description: "Nossos princípios.",
    },
    // {
    //     title: "História e Experiência",
    //     href: "",
    //     description:
    //         "Nossa trajetória.",
    // },
    // {
    //     title: "Projetos em Andamento",
    //     href: "",
    //     description:
    //         "Projetos atuais.",
    // },
    {
        title: "Galeria de Imagens",
        href: "#galeria",
        description:
            "Momentos especiais.",
    },
    // {
    //     title: "Depoimentos",
    //     href: "",
    //     description:
    //         "O que dizem.",
    // },
    {
        title: "Facebook",
        href: "#facebook",
        description:
            "Siga-nos no Facebook.",
    },
    {
        title: "Contato",
        href: "#contato",
        description:
            "Fale conosco.",
    },
    // {
    //     title: "Apoio",
    //     href: "",
    //     description:
    //         "Junte-se a nós.",
    // }
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu className="z-80 w-full bg-white/50 backdrop-blur rounded-full border-2 px-2 mt-2 p-2">
            
            <NavigationMenuList>
                <NavigationMenuItem className="p-1">
                    <NavigationMenuLink asChild>
                        <a href="https://cidadania23.org.br/">
                            <img src="logocida.png" alt="A bird." width="34" height="34" />
                        </a>       
                    </NavigationMenuLink>         
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger><NavigationMenuLink asChild><a href="#sobremim">Sobre Mim</a></NavigationMenuLink></NavigationMenuTrigger>
                    
                    <NavigationMenuContent className="">
                        <ul className="h-90 grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="#sobremim"
                                    >
                                        <Handshake />                                        
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Valdir Moreira
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Transforme Guarulhos com Valdir Moreira. Juntos, faremos a diferença!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="#sobremim" title="Sobre mim">
                                Conheça um pouco sobre minha motivação.
                            </ListItem>
                            <ListItem href="#contato" title="Contato">
                                Fale diretamente comigo, vai ser um prazer atende-lo.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Saiba Mais</NavigationMenuTrigger>
                    <NavigationMenuContent className="h-90">
                        <ul className="h-[34rem] touch-pan-y overflow-auto grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
