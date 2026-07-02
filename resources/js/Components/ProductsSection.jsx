import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const products = [
    {
        title: "Standard",
        capacity: "1500- 2500 Ltr./day",
        image: "/images/standard.jpeg",
        href: "/products/standard",
    },
    {
        title: "Medium",
        capacity: "1250- 1500 Ltr./day",
        image: "/images/medium.jpeg",
        href: "/products/medium",
    },
    {
        title: "Commercial",
        capacity: "For Custom Use",
        image: "/images/commercial.jpeg",
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

    // Touch event state for mobile swipe navigation
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, products.length - itemsToShow);

    // Keep currentIndex within valid bounds when itemsToShow changes
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsToShow, maxIndex, currentIndex]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

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

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const diff = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (diff > minSwipeDistance) {
            nextSlide();
        } else if (diff < -minSwipeDistance) {
            prevSlide();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

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
                    <p className="text-muted-foreground/80 w-full text-justify text-lg font-light leading-relaxed">
                        Take a closer look at our products crafted to deliver pure, safe, and reliable water every day. Each system reflects our commitment to quality, innovation, and long-lasting performance.
                    </p>
                </div>

                <div
                    className="relative w-full group/slider px-4 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div 
                        className="overflow-hidden py-12"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div 
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ 
                                transform: `translate3d(-${currentIndex * (100 / itemsToShow)}%, 0, 0)` 
                            }}
                        >
                            {products.map((product) => {
                                return (
                                    <div 
                                        key={product.title} 
                                        className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 cursor-pointer"
                                    >
                                        <Link
                                            href={appBase + product.href}
                                            className="group/card relative block w-full h-[65vh] min-h-[520px] rounded-2xl shadow-xl overflow-hidden bg-slate-900"
                                        >
                                            {/* Image wrapper — overflow-hidden clips the zoom to inside the card */}
                                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                                {product.image ? (
                                                    <img
                                                        src={asset(product.image)}
                                                        alt={product.title}
                                                        className="w-full h-full object-cover scale-100 group-hover/card:scale-150 transition-transform duration-700 ease-in-out"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-blue-900/40" />
                                                )}
                                            </div>

                                            {/* Dark overlay gradient that appears ONLY on hover, and ONLY at the bottom half */}
                                            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out" />

                                            {/* Text content - hidden by default, slides up on hover */}
                                            <div className="absolute inset-0 z-20 p-8 md:p-12 pb-10 md:pb-12 flex flex-col justify-end items-center text-center opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 ease-in-out">
                                                <p className="text-blue-400 font-bold tracking-[0.2em] text-[10px] md:text-xs mb-3 uppercase drop-shadow-md">
                                                    {product.capacity}
                                                </p>
                                                <h3 
                                                    className="text-2xl md:text-3xl font-sans tracking-tight mb-4 uppercase text-white drop-shadow-lg"
                                                    style={{ fontWeight: '300' }}
                                                >
                                                    {product.title}
                                                </h3>

                                                <div className="flex items-center gap-2 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                                                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 group-hover/card:after:w-full pb-1">
                                                        Explore System
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 ml-1" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons inside slider container but outside overflow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/40 text-white backdrop-blur-md hover:bg-slate-900/70 transition-all active:scale-95 opacity-0 group-hover/slider:opacity-100"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/40 text-white backdrop-blur-md hover:bg-slate-900/70 transition-all active:scale-95 opacity-0 group-hover/slider:opacity-100"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                </div>
            </section>
        </>
    );
}
