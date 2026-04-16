import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const products = [
    {
        title: "Classic",
        capacity: "800 - 1200 Ltr/ Day",
        image: "/images/classic.jpg",
        href: "/products/classic",
    },
    {
        title: "Standard",
        capacity: "1500- 2500 Ltr./day",
        image: "/images/standard.jpg",
        href: "/products/standard",
    },
    {
        title: "Medium",
        capacity: "1250- 1500 Ltr./day",
        image: "/images/medium.jpg",
        href: "/products/medium",
    },
    {
        title: "Commercial",
        capacity: "For Custom Use",
        image: "/images/commercial.jpg",
        href: "/products/commercial",
    },
    {
        title: "Bayaweaver",
        capacity: "Custom capacity as per the use",
        image: "/images/bayaweaver.jpg",
        href: "/products/bayaweaver",
    },
    {
        title: "Dubhe Merak",
        capacity: "Advanced Sewage Treatment",
        image: "/images/dubhemerak.jpg",
        href: "/products/dubhemerak",
    },
];


export function ProductsSection() {
    const asset = useAsset();
    const appBase = asset('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setItemsToShow(window.innerWidth < 768 ? 1 : 3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) =>
            prev >= products.length - itemsToShow ? 0 : prev + 1
        );
    }, [itemsToShow]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) =>
            prev <= 0 ? products.length - itemsToShow : prev - 1
        );
    }, [itemsToShow]);

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (!isPaused) {
                nextSlide();
            }
        }, 5000);
    }, [nextSlide, isPaused]);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoSlide]);

    return (
        <>
            <section id="products" className="bg-white overflow-hidden">
                <div className="pt-16 md:pt-24 pb-12 mx-auto max-w-7xl px-6 text-center md:text-left">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                        Product Gallery
                    </p>
                    <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl mb-6">
                        Explore Our Products
                    </h2>
                    <div className="h-1 w-20 bg-primary/20 mb-8 mx-auto md:mx-0" />
                    <p className="text-muted-foreground/80 max-w-2xl text-lg font-light leading-relaxed">
                        Take a closer look at our products crafted to deliver pure, safe, and reliable water every day. Each system reflects our commitment to quality, innovation, and long-lasting performance.
                    </p>
                </div>

                <div
                    className="relative w-full group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 33.333)}%)` }}
                        >
                            {products.map((product) => (
                                <div key={product.title} className="w-full md:w-1/3 flex-shrink-0">
                                    <Link
                                        href={appBase + product.href}
                                        className="group relative block w-full h-[60vh] min-h-[500px] overflow-hidden bg-slate-950 border-r border-white/10"
                                    >
                                        {product.image ? (
                                            <img
                                                src={asset(product.image)}
                                                alt={product.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-40 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 w-full h-full bg-blue-900/40 transition-all duration-1000 group-hover:bg-blue-800/60" />
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 opacity-60 group-hover:opacity-100" />

                                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start transition-transform duration-700 translate-y-8 group-hover:translate-y-0">
                                            <p className="text-blue-400 font-bold tracking-[0.2em] text-[10px] md:text-xs mb-3 opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100 uppercase drop-shadow-md">
                                                {product.capacity}
                                            </p>
                                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 drop-shadow-lg transform transition-all duration-700 uppercase">
                                                {product.title}
                                            </h3>

                                            <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.2em] opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100">
                                                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 group-hover:after:w-full pb-1">
                                                    Explore System
                                                </span>
                                                <ArrowRight className="w-4 h-4 ml-2 transform -translate-x-4 transition-transform duration-700 group-hover:translate-x-0" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons inside slider */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 transition-all active:scale-95 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 transition-all active:scale-95 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                </div>
            </section>
        </>
    );
}
