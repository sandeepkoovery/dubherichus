import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/Components/ui/button";
import { ArrowDown, Droplets, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const stats = [
    { icon: MapPin, value: "7+", label: "States" },
    { icon: Droplets, value: "7", label: "Products" },
    { icon: Users, value: "32K+", label: "Clients" },
];

export function HeroSection() {
    const asset = useAsset();
    const appBase = asset('');
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const banners = [
        {
            image: asset('/images/banner1.jpg'),
            heading: <>No.1 Advanced <br /><span className="bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Water Treatment Plant</span><br /> for your Home and Office</>
        },
        {
            image: asset('/images/banner2.jpg'),
            heading: <>Served More than <br /><span className="bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">32,000 Families</span><br /> and Counting</>
        },
        {
            image: asset('/images/Banner-3.png'),
            heading: <>3.2 trillion + <br /><span className="bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">litres of water</span><br /> recycled</>
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
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#020617]">
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
                        filter: "brightness(0.9)",
                        zIndex: 0,
                    }}
                />
            ))}

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/90 via-[#0f172a]/40 to-transparent" style={{ zIndex: 1 }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/80" style={{ zIndex: 1 }} />

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
            <div className="absolute bottom-64 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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
            <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center" style={{ zIndex: 10 }}>
                <div className="mx-auto max-w-5xl">
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md shadow-2xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                            Premium Water Engineering in India
                        </span>
                    </div>
                    <h1 className="mb-6 font-serif text-3xl font-bold leading-[1.2] tracking-tight text-white md:text-5xl lg:text-6xl transition-all duration-700">
                        {banners[currentSlide].heading}
                    </h1>
                    <p className="hidden mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-white/60 md:text-lg">
                        Discover India's most advanced iron removal and filtration systems.
                        A legacy of trust, built on <span className="text-white font-medium">uncompromising purity</span> and innovation.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="h-14 bg-primary px-10 text-[13px] font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_-10px_rgba(12,59,94,0.5)] transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                        >
                            <Link href={appBase + "/products/standard"}>Explorer Gallery</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="h-14 border-white/20 bg-white/5 px-10 text-[13px] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95"
                        >
                            <Link href={appBase + "/contact"}>Consult an Expert</Link>
                        </Button>
                    </div>
                </div>

                <div className="absolute bottom-16 left-0 right-0 px-6">
                    <div className="mx-auto flex max-w-2xl items-center justify-center gap-12 border-t border-white/10 pt-12 md:gap-24">
                        {stats.map((stat) => (
                            <div key={stat.label} className="group flex flex-col items-center gap-1 transition-transform duration-500 hover:-translate-y-1">
                                <p className="font-serif text-3xl font-bold text-white md:text-4xl tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <a
                    href="#about"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-white/50 transition-colors hover:text-white"
                    aria-label="Scroll to next section"
                >
                    <ArrowDown className="h-5 w-5" />
                </a>
            </div>
        </section>
    );
}
