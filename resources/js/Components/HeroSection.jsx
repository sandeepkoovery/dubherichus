import { useEffect, useRef } from "react";
import { Button } from "@/Components/ui/button";
import { ArrowDown, Droplets, MapPin, Users } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const stats = [
    { icon: MapPin, value: "7+", label: "States" },
    { icon: Droplets, value: "7", label: "Products" },
    { icon: Users, value: "1000+", label: "Clients" },
];

export function HeroSection() {
    const asset = useAsset();
    const appBase = asset('');
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
                className="absolute inset-0 -top-20 -bottom-20 scale-110"
                style={{
                    backgroundImage: `url(${asset('/images/hero-bg.jpg')})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "contrast(1.1) brightness(0.8)",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#0f172a]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]" />

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8 flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur-md shadow-2xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                            Premium Water Solutions in Kerala
                        </span>
                    </div>
                    <h1 className="mb-8 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
                        Manufacturer of <br />
                        <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                            Iron Removal Plants
                        </span>
                    </h1>
                    <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl">
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
