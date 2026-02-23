// src/components/DynamicBanner.tsx
"use client";

import { useState, useEffect } from "react";
import { HeroBanner } from "./HeroBanner";
import { LoginBox } from "./LoginBox";

export default function DynamicBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const banners = [
        "/banners/1.avif",
        "/banners/2.avif",
        "/banners/3.avif",
        "/banners/4.avif",
        "/banners/5.avif",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [banners.length]);

    return (
        <section className="relative w-full h-130 lg:h-150 overflow-hidden">
            {/* Background Images */}
            {banners.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={img}
                        alt={`Destaque ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay de Gradiente oficial para legibilidade */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent dark:from-gray-950/80 dark:via-gray-950/40" />
                </div>
            ))}

            {/* Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Lado Esquerdo: Textos do Hero */}
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                    <HeroBanner />
                </div>

                {/* Lado Direito: Caixa de Acesso */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end mb-12 lg:mb-0">
                    <LoginBox />
                </div>
            </div>

            {/* Navegação por Pontos (Dots) */}
            <div className="absolute bottom-8 left-4 lg:left-auto lg:right-1/2 lg:translate-x-1/2 z-20 flex gap-3">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 transition-all rounded-full ${i === currentSlide
                                ? "bg-itau-orange w-10"
                                : "bg-white/50 w-4 hover:bg-white"
                            }`}
                        aria-label={`Ir para slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}