import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const products = [
    {
        title: "Classic",
        capacity: "800 - 1200 Ltr/ Day",
        image: "/images/products_classic.jpeg",
        href: "/products/classic",
    },
    {
        title: "Standard",
        capacity: "1500- 2500 Ltr./day",
        image: "/images/products_standard.jpeg",
        href: "/products/standard",
    },
    {
        title: "Medium",
        capacity: "1250- 1500 Ltr./day",
        image: "/images/products_medium.jpeg",
        href: "/products/medium",
    },
    {
        title: "Commercial",
        capacity: "For Custom Use",
        image: "/images/products_commercial.jpeg",
        href: "/products/commercial",
    },
    {
        title: "Bayaweaver",
        capacity: "Custom capacity as per the use",
        image: "/images/products_bayaweaver.jpeg",
        href: "/products/bayaweaver",
    },
    {
        title: "Dubhe Merak",
        capacity: "Advanced Sewage Treatment",
        image: "/images/products_dubhemerak.jpeg",
        href: "/products/dubhemerak",
    },
];


const getCircularOffset = (idx, current, total) => {
    let diff = idx - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
};

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
        setCurrentIndex((prev) => (prev + 1) % products.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    }, []);

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
                    <p className="mb-4 text-center md:text-left text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                        Product Gallery
                    </p>
                    <h2 
                        className="font-sans text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl mb-6"
                        style={{ fontWeight: '300' }}
                    >
                        Explore Our Products
                    </h2>
                    <div className="h-1 w-20 bg-primary/20 mb-8 mx-auto md:mx-0" />
                    <p className="text-muted-foreground/80 max-w-2xl text-lg font-light leading-relaxed">
                        Take a closer look at our products crafted to deliver pure, safe, and reliable water every day. Each system reflects our commitment to quality, innovation, and long-lasting performance.
                    </p>
                </div>

                <div
                    className="relative w-full group px-4 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden py-12 h-[68vh] min-h-[580px] relative w-full flex justify-center items-center" style={{ perspective: '1200px' }}>
                        <div className="relative w-full h-full flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
                            {products.map((product, idx) => {
                                const offset = getCircularOffset(idx, currentIndex, products.length);
                                
                                // Determine styling variables based on offset and viewport size
                                let transformStyle = "";
                                let opacityStyle = 0;
                                let zIndexStyle = 1;
                                
                                if (itemsToShow === 1) {
                                    // Mobile: show only active card in center
                                    if (offset === 0) {
                                        transformStyle = "translate3d(-50%, 0, 0) scale(1) rotateY(0deg)";
                                        opacityStyle = 1;
                                        zIndexStyle = 10;
                                    } else {
                                        transformStyle = `translate3d(${offset > 0 ? "50%" : "-150%"}, 0, -100px) scale(0.8) rotateY(${offset > 0 ? "-20deg" : "20deg"})`;
                                        opacityStyle = 0;
                                        zIndexStyle = 1;
                                    }
                                } else {
                                    // Desktop: 3D Coverflow
                                    if (offset === 0) {
                                        transformStyle = "translate3d(-50%, 0, 0) scale(1.05) rotateY(0deg)";
                                        opacityStyle = 1;
                                        zIndexStyle = 10;
                                    } else if (offset === -1) {
                                        transformStyle = "translate3d(-145%, 0, -150px) scale(0.88) rotateY(32deg)";
                                        opacityStyle = 0.65;
                                        zIndexStyle = 5;
                                    } else if (offset === 1) {
                                        transformStyle = "translate3d(45%, 0, -150px) scale(0.88) rotateY(-32deg)";
                                        opacityStyle = 0.65;
                                        zIndexStyle = 5;
                                    } else if (offset < -1) {
                                        transformStyle = "translate3d(-240%, 0, -250px) scale(0.75) rotateY(45deg)";
                                        opacityStyle = 0;
                                        zIndexStyle = 1;
                                    } else if (offset > 1) {
                                        transformStyle = "translate3d(140%, 0, -250px) scale(0.75) rotateY(-45deg)";
                                        opacityStyle = 0;
                                        zIndexStyle = 1;
                                    }
                                }

                                const isVisible = offset === 0 || (itemsToShow > 1 && Math.abs(offset) === 1);

                                return (
                                    <div 
                                        key={product.title} 
                                        className="absolute left-1/2 top-0 flex-shrink-0 px-4 transition-all duration-700 ease-in-out cursor-pointer animate-fade-in"
                                        style={{
                                            width: itemsToShow === 1 ? '90%' : '30%',
                                            transform: transformStyle,
                                            opacity: opacityStyle,
                                            zIndex: zIndexStyle,
                                            transformStyle: 'preserve-3d',
                                        }}
                                        onClick={(e) => {
                                            if (offset !== 0) {
                                                e.preventDefault();
                                                setCurrentIndex(idx);
                                            }
                                        }}
                                    >
                                        <Link
                                            href={appBase + product.href}
                                            className="group relative block w-full h-[60vh] min-h-[500px] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 rounded-[2rem] border border-slate-800/60 shadow-xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)] hover:-translate-y-3 hover:border-blue-500/40"
                                            style={{
                                                pointerEvents: isVisible ? 'auto' : 'none'
                                            }}
                                        >
                                            {/* Shimmer Sheen Sweep Effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

                                            {product.image ? (
                                                <img
                                                    src={asset(product.image)}
                                                    alt={product.title}
                                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 group-hover:opacity-85"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 w-full h-full bg-blue-900/40 transition-all duration-1000 group-hover:bg-blue-800/60" />
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-700 opacity-70 group-hover:opacity-95" />

                                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start transition-transform duration-700 translate-y-6 group-hover:translate-y-0">
                                                <p className="text-blue-400 font-bold tracking-[0.2em] text-[10px] md:text-xs mb-3 opacity-0 -translate-y-2 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0 uppercase drop-shadow-md">
                                                    {product.capacity}
                                                </p>
                                                <h3 
                                                    className="text-3xl md:text-4xl font-sans tracking-tight mb-6 drop-shadow-lg transform transition-all duration-700 uppercase"
                                                    style={{ color: '#ffffff', fontWeight: '300' }}
                                                >
                                                    {product.title}
                                                </h3>

                                                <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.2em] opacity-0 translate-y-2 transition-all duration-700 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                                                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 group-hover:after:w-full pb-1">
                                                        Explore System
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 ml-2 transform -translate-x-4 transition-transform duration-700 group-hover:translate-x-0" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons inside slider */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 transition-all active:scale-95 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 transition-all active:scale-95 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                </div>
            </section>
        </>
    );
}
