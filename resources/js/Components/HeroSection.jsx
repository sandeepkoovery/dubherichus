import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/Components/ui/button";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";


export function HeroSection() {
    const asset = useAsset();
    const appBase = asset('');
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const banners = [
        {
            image: asset('/images/banner1.jpg'),
            heading: ""
        },
        {
            image: asset('/images/banner2.jpg'),
            heading: ""
        },
        {
            image: asset('/images/Banner-3.png'),
            heading: ""
        },
    ];

    const goToSlide = useCallback((index) => {
        setCurrentSlide((index + banners.length) % banners.length);
    }, [banners.length]);

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 5000);
    }, [banners.length]);

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [startAutoSlide]);

    const handlePrev = () => {
        goToSlide(currentSlide - 1);
        startAutoSlide();
    };

    const handleNext = () => {
        goToSlide(currentSlide + 1);
        startAutoSlide();
    };

    const handleDot = (index) => {
        goToSlide(index);
        startAutoSlide();
    };

    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-white">
            {/* Banner Slides */}
            {banners.map((slide, i) => (
                <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                        opacity: i === currentSlide ? 1 : 0,
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(1.1)",
                        zIndex: 0,
                    }}
                />
            ))}

            {/* Navigation visibility gradient (Top) */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

            {/* Subtle bottom gradient to help text readability at the very bottom if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" style={{ zIndex: 1 }} />

            {/* Arrow Controls */}
            <button
                onClick={handlePrev}
                className="hidden absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={handleNext}
                className="hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleDot(i)}
                        className={`transition-all duration-300 rounded-full ${i === currentSlide
                            ? "w-8 h-2.5 bg-primary"
                            : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative flex min-h-screen flex-col items-center justify-end pb-12 md:pb-20 px-6 text-center" style={{ zIndex: 10 }}>
                <div className="mx-auto max-w-5xl">
                    <div className="mb-2 flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-900 backdrop-blur-sm shadow-xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                            Advanced Water Treatment in India
                        </span>
                    </div>
                    {banners[currentSlide].heading && (
                        <h1 className="mb-6 font-serif text-3xl font-bold leading-[1.2] tracking-tight text-blue-950 md:text-5xl lg:text-6xl transition-all duration-700 drop-shadow-sm">
                            {banners[currentSlide].heading}
                        </h1>
                    )}
                    <p className="hidden mx-auto mb-10 max-w-2xl text-base font-bold leading-relaxed text-blue-900/80 md:text-lg drop-shadow-sm">
                        Discover India's most advanced iron removal and filtration systems.
                        A legacy of trust, built on <span className="text-blue-950 font-black">uncompromising purity</span> and innovation.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mt-2">
                        <Button
                            asChild
                            size="lg"
                            className="h-14 bg-primary px-10 text-[13px] font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_-10px_rgba(12,59,94,0.5)] transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                        >
                            <Link href={appBase + "/products/standard"}>Explore Our Products</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="h-14 border-blue-900/20 bg-blue-50/50 px-10 text-[13px] font-bold uppercase tracking-widest text-blue-900 backdrop-blur-md transition-all hover:bg-white/60 hover:border-blue-900/40 hover:scale-105 active:scale-95"
                        >
                            <Link href={appBase + "/contact"}>Consult an Expert</Link>
                        </Button>
                    </div>
                </div>

                <a
                    href="#about"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 transition-colors hover:text-blue-600"
                    aria-label="Scroll to next section"
                >
                    <ArrowDown className="h-5 w-5" />
                </a>
            </div>
        </section>
    );
}
