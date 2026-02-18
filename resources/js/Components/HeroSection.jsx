import { useEffect, useRef } from "react";
import { Button } from "@/Components/ui/button";
import { ArrowDown, Droplets, MapPin, Users } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";

const stats = [
    { icon: MapPin, value: "7+", label: "States" },
    { icon: Droplets, value: "7", label: "Products" },
    { icon: Users, value: "1000+", label: "Clients" },
];

export function HeroSection() {
    const asset = useAsset();
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrollY = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            <div
                ref={parallaxRef}
                className="absolute inset-0 -top-20 -bottom-20"
                style={{
                    backgroundImage: `url(${asset('/images/hero-bg.jpg')})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/90" />

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                        Established 1991
                    </p>
                    <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                        <span className="text-balance">
                            Mastering Natural Water Filtration for{" "}
                            <span className="text-[#4da3ff]">Over 33 Years</span>
                        </span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                        India&apos;s No.1 Advanced Water Treatment Plant for your Home,
                        Office &amp; Industry. Fully automated, chemical-free, and built to
                        last.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                        >
                            <a href="#products">Explore Products</a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                        >
                            <a href="#contact">Request a Quote</a>
                        </Button>
                    </div>
                </div>

                <div className="absolute bottom-20 left-0 right-0 px-6 md:bottom-12">
                    <div className="mx-auto flex max-w-xl items-center justify-center gap-8 md:gap-16">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <stat.icon className="h-5 w-5 text-[#4da3ff]" />
                                <div className="text-left">
                                    <p className="text-xl font-bold text-white md:text-2xl">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-white/60">{stat.label}</p>
                                </div>
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
